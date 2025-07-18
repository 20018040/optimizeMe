const inputs = document.querySelectorAll('select');
let currentlySelected = null;
import {imageMap,itemsByLevel} from './items.js';
import {dropdownMap} from './dropDownData.js';
import {statArray,stats,highStats,noHP} from './starForceStats.js';
function getValue(stat) {
  for (let range of statArray) {
    if (stat >= range.min && stat <= range.max) {
      return range.value;
    }
  }
  return null; // or some default
}

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
      console.log('Updated Stats:', updatedStats);
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
      console.log('Number of yellow stars: ', selectedEquip.starLevel);
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
inputs.forEach((input, index) => { //when box is clicked 
  input.addEventListener('focus', () => {
    currentlySelected = index;

    const selectedEquip = equips[index];
    if (selectedEquip) {
      updateStarsDisplay(selectedEquip.starLevel || 0);
      updateStarStat();
      console.log(selectedEquip.name, " ",selectedEquip.level);
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
    console.log(findItemLevel(selectedValue));
  });
});
