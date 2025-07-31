const itemInputs = document.querySelectorAll('select.dropdown');
let currentlySelected = null;
import {imageMap,itemsByLevel} from './items.js';
import {dropdownMap} from './dropDownData.js';
import {statArray,stats,highStats,noHP} from './starForceStats.js';
import { cubeRates } from './cubeRates.js';

const potentialOptions = {
  "first": [
    ["All Stat",9],
    ["STR", 12],
    ["DEX", 12],
    ["INT", 12],
    ["LUK", 12],
    ["HP", 12],
  ]
}
// for (const key in cubeRates["lvl120to200"]) {
//   console.log(key); // e.g., "secondary", "bottom", etc.
  
//   for(const stat in cubeRates["lvl120to200"][key]["red"]["legendary"]["first_line"]){
//     console.log(cubeRates["lvl120to200"][key]["red"]["legendary"]["first_line"][stat][0], cubeRates["lvl120to200"][key]["red"]["legendary"]["first_line"][stat][1]);
//   }
// }
function getValue(stat) {
  for (let range of statArray) {
    if (stat >= range.min && stat <= range.max) {
      return range.value;
    }
  }
  return null; // or some default
}
//populating item options 
document.addEventListener('DOMContentLoaded', () => {
  dropdownMap.forEach(({ dropdowns, options }) => {
    dropdowns.forEach(select => {
      select.innerHTML = '';
      options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        select.appendChild(option);
      });
    });
  });
});
//populating potentials depending on item
function populateDropDown(downs, lists){
  downs.forEach(select => {
    select.innerHTML = '';
    lists.forEach(opt => {
      const option = document.createElement('option');
      const value = opt[0]+opt[1].toString();
      option.value,option.textContent = value;
      select.appendChild(option);
    });
  });
}
//updates potential choosing options depending on itemtype selected
function updatePotential(itemType){
  let type = itemType.toLowerCase();
  const potentialInfos = cubeRates["lvl120to200"][type]["red"]["legendary"];
  const firstDropdowns = document.querySelectorAll('.first');
  const secondDropdowns = document.querySelectorAll('.second');
  const thirdDropdowns = document.querySelectorAll('.third');
  populateDropDown(firstDropdowns, potentialInfos["first_line"]);
  populateDropDown(secondDropdowns, potentialInfos["second_line"]);
  populateDropDown(thirdDropdowns, potentialInfos["third_line"]);
}
updatePotential("ring");

//itemTypes that need different conversions : WSE, gloves, maybe hat 
//line possible options. Options where lines get trimmed into mainStat stat looking for 
//allStatEQ : ALL Stat to stat// default 1.1
function trimRates(line,options,mainStat,allStatEQ = 1.1){
  let matches = [];
  if (mainStat !== "MAX HP %"){
    matches = line.filter(entry  => entry.includes("All Stats %") || entry.includes(mainStat));
  
  }
  else {
    matches = line.filter(entry => entry.includes(mainStat));
  }
  matches.forEach(match =>{
    if(match.includes("All Stats %")){
      // match[1] = parseFloat((match[1] * allStatEQ).toFixed(2));
    }
    match[2] = match[2] *0.01;
    match.splice(0,1);
    options.push(match);
  });
}
function normalizeWithDumpster(line) {
  let total = line.reduce((sum, entry) => sum + entry[1], 0);
  if (total > 1) {
    // if sum > 1, scale down all probabilities proportionally
    return line.map(([stat, prob]) => [stat, prob / total]);
  }
  else if (total < 1) {
    // Add dumpster
    return [...line, [0, 1 - total]];
  }
  else {
    return line; // already sums to 1
  }
}
function findExpectedReturn(itemType,cubeType, stat){
  // cube rates. First/second/third rates could be found by ["first_line"]["second_line"]..
  const rates = cubeRates["lvl120to200"][itemType][cubeType]["legendary"];

  const firstLine = rates["first_line"];
  const secondLine = rates["second_line"];
  const thirdLine = rates["third_line"];
  let line1_options = [], line2_options = [], line3_options = [];
  trimRates(firstLine, line1_options,"LUK %");
  trimRates(secondLine, line2_options,"LUK %");
  trimRates(thirdLine, line3_options,"LUK %");
  line1_options = normalizeWithDumpster(line1_options);
  line2_options = normalizeWithDumpster(line2_options);
  line3_options = normalizeWithDumpster(line3_options);
  //finding all possible combinations with useful options
  const results = [];
  for (const l1 of line1_options) {
    for (const l2 of line2_options) {
      for (const l3 of line3_options) {
        const totalStat = l1[0] + l2[0] + l3[0];
        const probability = l1[1] * l2[1] * l3[1];
        results.push([totalStat, probability]);
      }
    }
  }
  const statDistribution = new Map();

  results.forEach(([total, prob]) => {
    statDistribution.set(total, (statDistribution.get(total) || 0) + prob);
  });
  let prob_gt_24 = 0;
  let expected_stat = 0;

  for (const [total, prob] of statDistribution.entries()) {
    // if (total >= stat) prob_gt_24 += prob;
    // expected_stat += total * prob;
    if (total >= stat){
    prob_gt_24 += prob;
    expected_stat += (total-24) * prob;
    }
  }

  const expected_trials = prob_gt_24 > 0 ? 1 / prob_gt_24 : Infinity;
  const cube_cost = cubeType === "red"
   ? 11_000_000 
   : cubeType === "black" 
   ? 22_000_000
   : undefined;
  
  const expected_stat_per_currency = 1/expected_stat; //#of trials need to gain 1 percent of  
  //console.log(cube_cost, expected_stat_per_currency);
  // Step 5: Output results
  console.log(`Probability of getting >24% stat: ${(prob_gt_24 * 100).toFixed(4)}%`);
  console.log(`Expected number of trials: ${expected_trials.toFixed(2)}`);
  console.log(`Expected stat per trial: ${expected_stat.toFixed(2)}%`);
  console.log(`Expected stat per 10M currency: ${expected_stat_per_currency.toFixed(30)}`);
}
findExpectedReturn("bottom","red",24);
const equips = Array(24).fill(null); // One for each dropdown (input1 to input24)

class Armor {
  constructor(level = 0, starLevel = 0) {
    this.level = level;
    this.name = '';
    this.starLevel = starLevel;
    this.flatStats = {
      STR: null, DEX: null, INT: null, LUK: null,
      Defense: null, HP: null, MP: null, ATK: null, MATK: null,
      Speed: null, Jump: null, AllStat: null
    };
    this.flameStats = {
      STR: null, DEX: null, INT: null, LUK: null,
      Defense: null, HP: null, MP: null, ATK: null, MATK: null,
      Speed: null, Jump: null, AllStat: null
    };
  }
  toString() {
    return `${this.name}`;
  }
  toJSON() {
    return this.name;
  }
}

function getStatIndexFromEquipLevel(level) {
  if (level >= 128 && level <= 137) return 0;
  if (level >= 138 && level <= 149) return 1;
  if (level >= 150 && level <= 159) return 2;
  if (level >= 160 && level <= 199) return 3;
  if (level >= 200 && level <= 249) return 4;
  if (level === 250) return 5;
  return -1;
}


//finds stat gained at given star
function statAtStar(itemLevel,starForce,equipType = 'ring'){
  let statOne = null;
  let statTwo = null;
  let statAdd = null;
  let def = 1.05;
  let speed = null;
  let hp = null;
  let atk = null;
  const result = {};
  
  if(starForce<15){
    [statAdd, hp, speed, atk] = stats[starForce];
    if ( noHP.includes(equipType)){
      hp = 0; 
    }
    if (equipType !== 'shoes'){
      speed = 0;
    }
    if (equipType !== 'gloves'){
      atk = 0;
    }
    if (equipType === 'weapon')
      result["MAX MP"] = hp;
    
  }
  else{
    if (equipType === 'weapon')
      [statAdd,,atk] = highStats[starForce-15][getStatIndexFromEquipLevel(itemLevel)];
    else
      [statAdd,atk] = highStats[starForce-15][getStatIndexFromEquipLevel(itemLevel)];
  } 

  if (statAdd > 0) result["STR"] = statAdd;
  if (statAdd > 0) result["DEX"] = statAdd;
  if (statAdd > 0) result["INT"] = statAdd;
  if (statAdd > 0) result["LUK"] = statAdd;
  if (hp > 0) result["MAX HP"] = hp;
  if (speed > 0) {
    result["Speed"] = speed;
    result["Jump"] = speed;
  }
  if (atk > 0) {
    result["Attack Power"] = atk;
    result["Magic Attack"] = atk;
  }
  return result;
}

//finding total stat of item at given star. returns map of it.
function totalStats(itemLevel, starForce, baseDefense = 0, baseAtk = 0, equipType = 'ring', classType = 'all') {
  let stats = new Map();

  for (let i = 0; i < starForce; i++) {
    const gains = statAtStar(itemLevel, i, equipType);
    for (const [key, value] of Object.entries(gains)) {
      stats.set(key, (stats.get(key) || 0) + value);
    }
  }

  return stats;
}

function findItemLevel(itemName) {
  for (const [level, items] of Object.entries(itemsByLevel)) {
    if (items.includes(itemName.toLowerCase())) {
      return parseInt(level);
    }
  }
  return null; // or "Unknown"
}
const stars = document.querySelectorAll('.star');
function updateStarsDisplay(starLevel) {
  stars.forEach((s, i) => {
    s.style.color = i < starLevel ? 'yellow' : 'white';
  });
}
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.style.color = i <= index ? 'yellow' : 'white';
    });

    if (currentlySelected !== null && equips[currentlySelected]) {
      const selectedEquip = equips[currentlySelected];
      selectedEquip.starLevel = index + 1;
      updateStarStat();
    }

  });
});

function updateStarStat(){
  if (currentlySelected !== null && equips[currentlySelected]) {
      const selectedEquip = equips[currentlySelected];
      const itemLevel = selectedEquip.level || 150;
      // const equipType = selectedEquip.name?.toLowerCase().includes('ring') ? 'ring' : 'other';
      const equipType = 'ring';

      const updatedStats = totalStats(itemLevel, selectedEquip.starLevel, 0, 0, equipType);
      // Update starForceStat values in the UI
      const armorStatsContainer = document.querySelector('.ArmorStats');
      const starForceSpans = armorStatsContainer.querySelectorAll('.starForceStat');

      // Expected stat keys from totalStats: str, dex, int, luk, def, hp, atk, matk, spd, jmp, allStat
      const statMap = [
        'STR', 'DEX', 'INT', 'LUK', 'Defense', 'MAX HP',       // 0-5
        'MAX MP',                                        //6 
        'Attack Power', 'Magic Attack', 'Speed', 'Jump'  // 7-10
      ];

      starForceSpans.forEach((span, i) => { //uses each of statmap category to find value of key (stat) in upDatedStat
        const key = statMap[i];
        if (key && updatedStats.get(key) !== undefined) {
          span.textContent = updatedStats.get(key);
          span.style.color = 'orange';
        }
        else{
          span.textContent = '0';
          span.style.color = 'white';
        }
      });
    }
}

function updateImageAndBackground(input) {
  const value = input.value.toLowerCase();
  const imageUrl = imageMap[value] ? `itemimages/${imageMap[value]}` : '';
  const itemImage = document.querySelector('.itemImage img');

  if (imageUrl) {
    input.style.backgroundImage = `url('${imageUrl}')`;
    input.style.backgroundRepeat = 'no-repeat';
    input.style.backgroundPosition = 'center';
    input.style.backgroundSize = 'cover';
    input.style.paddingRight = '30px';
    if (itemImage) {
      itemImage.src = imageUrl;
      itemImage.alt = value;
    }
  } else {
    input.style.backgroundImage = 'none';
    if (itemImage) {
      itemImage.src = 'empty.png'; 
      itemImage.alt = 'No item selected';
    }
  }
}

// Set up dropdown behavior
itemInputs.forEach((input, index) => { //when box is clicked 
  const selectedEquip = equips[index];
  input.addEventListener('focus', () => {
    currentlySelected = index;

    if (selectedEquip) {
      updateStarsDisplay(selectedEquip.starLevel || 0);
      updateStarStat();
      updateImageAndBackground(input);
    }

  });

  input.addEventListener('change', () => { //when input actually changed
    const selectedValue = input.value;
    const armor = new Armor();
    armor.name = selectedValue;
    armor.level = findItemLevel(selectedValue);
    equips[index] = armor;
    currentlySelected = index;
    updateImageAndBackground(input);
    updateStarsDisplay(armor.starLevel);
  });
});
