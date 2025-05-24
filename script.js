const inputs = document.querySelectorAll('select');
let currentlySelected = null;

const ringOptions = [
  { value: '', text: 'Select' },
  { value: 'reinforced ring', text: 'Reinforced Ring' },
  { value: 'superior gollux ring', text: 'Superior Gollux Ring' },
  { value: 'meister ring', text: 'Meister Ring' },
  { value: 'endless terror', text: 'Endless Terror' },
  { value: 'kanna ring', text: 'Kanna Ring' }
];
const pocketOptions = [
  { value: '', text: 'Select' },
  { value: 'pink holy cup', text: 'Pink Holy Cup' },
  { value: 'cursed spell book', text: 'Cursed Spell Book' }
];
const pendantOptions = [
  { value: '', text: 'Select' },
  { value: 'dominator', text: 'Dominator' },
  { value: 'superior gollux pendant', text: 'Superior Gollux Pendant' },
  { value: 'source of suffering', text: 'Source of Suffering' }
];
const weaponOptions = [ //need updat later 
  { value: '', text: 'Select' },
  { value: 'arcane', text: 'Arcane Weapon' },
  { value: 'genesis', text: 'Genesis Weapon' },
  { value: 'source of suffering', text: 'Source of Suffering' }
];
const beltOptions = [
  { value: '', text: 'Select' },
  { value: 'golden clover belt', text: 'Golden Clover Belt' },
  { value: 'superior gollux belt', text: 'Superior Gollux Belt' },
  { value: 'dreamy belt', text: 'Dreamy Belt' }
];
const hatOptions = [
  { value: '', text: 'Select' },
  { value: 'cra helmet', text: 'CRA Helmet' },
  { value: 'absolab helmet', text: 'Absolab helmet' },
  { value: 'arcane helmet', text: 'Arcane Helmet' }
];
const faceOptions = [
  { value: '', text: 'Select' },
  { value: 'condensed power crystal', text: 'Condensed Power Crystal' },
  { value: 'twilight mark', text: 'Twilight Mark' },
  { value: 'berserked', text: 'Berserked' }
];

const eyeOptions = [
  { value: '', text: 'Select' },
  { value: 'aquatic letter eye', text: 'Aquatic Letter Eye' },
  { value: 'black bean mark', text: 'Black Bean Mark' },
  { value: 'papulatus mark', text: 'Papulatus Mark' },
  { value: 'magic eye patch', text: 'Magic Eye Patch' }
];

const topOptions = [
  { value: '', text: 'Select' },
  { value: 'cra top', text: 'Cra Top' },
  { value: 'absolab overall', text: 'Absolab Overall' },
  { value: 'arcane overall', text: 'Arcane Overall' },
  { value: 'eternal top', text: 'Eternal Top' },
];

const bottomOptions = [
  { value: '', text: 'Select' },
  { value: 'cra bottom', text: 'Cra Bottom' },
  { value: 'absolab overall', text: 'Absolab Overall' },
  { value: 'eternal bottom', text: 'Eternal Bottom' }
];
const shoesOptions = [
  { value: '', text: 'Select' },
  { value: 'pensalir shoes', text: 'Pensalir Shoes' },
  { value: 'ranmaru shoes', text: 'Ranmaru Shoes' },
  { value: 'absolab shoes', text: 'Absolab Shoes' },
  { value: 'arcane shoes', text: 'Arcane Shoes' },
  { value: 'eternal shoes', text: 'Eternal Shoes' }
];

const earringOptions = [
  { value: '', text: 'Select' },
  { value: 'dea sidus earring', text: 'Dea Sidus Earring' },
  { value: 'reinforced gollux earring', text: 'Reinforced Gollux Earring' },
  { value: 'superior gollux earring', text: 'Superior Gollux Earring' },
  { value: 'command force earring', text: 'Command Force Earring' }
];

const shoulderOptions = [
  { value: '', text: 'Select' },
  { value: 'royal black metal shoulder', text: 'Royal Black Metal Shoulder' },
  { value: 'ranmaru shoulder', text: 'Ranmaru Shoulder' },
  { value: 'absolab shoulder', text: 'Absolab Shoulder' },
  { value: 'arcane shoulder', text: 'Arcane Shoulder' },
  { value: 'eternal shoulder', text: 'Eternal Shoulder' }
];

const gloveOptions = [
  { value: '', text: 'Select' },
  { value: 'pensalir gloves', text: 'Pensalir Gloves' },
  { value: 'ranmaru gloves', text: 'Ranmaru Gloves' },
  { value: 'absolab gloves', text: 'Absolab Gloves' },
  { value: 'arcane gloves', text: 'Arcane Gloves' },
  { value: 'eternal gloves', text: 'Eternal Gloves' }
];

const emblemOptions = [
  { value: '', text: 'Select' },
  { value: 'lvl 100 emblem', text: 'Lvl 100 Emblem' },
  { value: 'mitra emblem', text: 'Mitra Emblem' }
];

const secondaryOptions = [
  { value: '', text: 'Select' },
  { value: 'lvl 100 secondary', text: 'Lvl 100 Secondary' },
  { value: 'pno secondary', text: 'Pno Secondary' }
];

const capeOptions = [
  { value: '', text: 'Select' },
  { value: 'pensalir cape', text: 'Pensalir Cape' },
  { value: 'ranmaru cape', text: 'Ranmaru Cape' },
  { value: 'absolab cape', text: 'Absolab Cape' },
  { value: 'arcane cape', text: 'Arcane Cape' },
  { value: 'eternal cape', text: 'Eternal Cape' }
];

const statArray = [
  { min: 0, max: 94, value: 5 },
  { min: 95, max: 107, value: 8 },
  { min: 108, max: 117, value: 10 },
  { min: 118, max: 127, value: 15 },
  { min: 128, max: 137, value: 20 },
  { min: 138, max: Infinity, value: 25 }
];
function getValue(stat) {
  for (let range of statArray) {
    if (stat >= range.min && stat <= range.max) {
      return range.value;
    }
  }
  return null; // or some default
}
const imageMap = {
  'absolab helmet': 'absoHat.png',
  'cra helmet': 'craHat.png',
  'arcane helmet': 'arcaneHat.png',
  'reinforced ring': 'reinforcedRing.png',
  'superior gollux ring': 'superiorGolluxRing.png',
  'meister ring': 'meisterRing.png',
  'endless terror': 'endlessTerror.png',
  'kanna ring': 'kannaRing.png'
};

const ringDropdowns = document.querySelectorAll('.input1, .input2, .input3, .input4');
const pocketDropdowns = document.querySelectorAll('.input5');
const pendantDropdowns = document.querySelectorAll('.input6, .input7');
const weaponDropdowns = document.querySelectorAll('.input8');
const beltDropdowns = document.querySelectorAll('.input9');
const hatDropdowns = document.querySelectorAll('.input10');
const faceDropdowns = document.querySelectorAll('.input11');
const eyeDropdowns = document.querySelectorAll('.input12');
const topDropdowns = document.querySelectorAll('.input13');
const bottomDropdowns = document.querySelectorAll('.input14');
const shoesDropdowns = document.querySelectorAll('.input15');
const earringDropdowns = document.querySelectorAll('.input16');
const shoulderDropdowns = document.querySelectorAll('.input17');
const glovesDropdowns = document.querySelectorAll('.input18');
const emblemDropdowns = document.querySelectorAll('.input19');
const badgeDropdowns = document.querySelectorAll('.input20');
const medalDropdowns = document.querySelectorAll('.input21');
const secondaryDropdowns = document.querySelectorAll('.input22');
const capeDropdowns = document.querySelectorAll('.input23');
const heartDropdowns = document.querySelectorAll('.input24');
const dropdownMap = [
  { dropdowns: ringDropdowns, options: ringOptions },
  { dropdowns: pocketDropdowns, options: pocketOptions },
  { dropdowns: pendantDropdowns, options: pendantOptions },
  { dropdowns: weaponDropdowns, options: weaponOptions },
  { dropdowns: beltDropdowns, options: beltOptions },
  { dropdowns: hatDropdowns, options: hatOptions },
  { dropdowns: faceDropdowns, options: faceOptions },
  { dropdowns: eyeDropdowns, options: eyeOptions },
  { dropdowns: topDropdowns, options: topOptions },
  { dropdowns: bottomDropdowns, options: bottomOptions },
  { dropdowns: shoesDropdowns, options: shoesOptions },
  { dropdowns: earringDropdowns, options: earringOptions },
  { dropdowns: shoulderDropdowns, options: shoulderOptions },
  { dropdowns: glovesDropdowns, options: gloveOptions },
  { dropdowns: emblemDropdowns, options: emblemOptions },
  // { dropdowns: badgeDropdowns, options: badgeOptions },
  // { dropdowns: medalDropdowns, options: medalOptions },
  { dropdowns: secondaryDropdowns, options: secondaryOptions },
  { dropdowns: capeDropdowns, options: capeOptions }
  // { dropdowns: heartDropdowns, options: heartOptions },
];

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
function updateStarsDisplay(starLevel) {
  stars.forEach((s, i) => {
    s.style.color = i < starLevel ? 'yellow' : 'white';
  });
}
const stats = { //stat, hp, speed, gloves
  0: [2, 5, 0, 0],
  1: [2, 5, 0, 0],
  2: [2, 5, 1, 0],
  3: [2, 10, 1, 0],
  4: [2, 10, 1, 1],
  5: [3, 15, 1, 0],
  6: [3, 15, 1, 1],
  7: [3, 20, 1, 0],
  8: [3, 20, 1, 1],
  9: [3, 25, 1, 0],
  10: [3, 25, 2, 1],
  11: [3, 25, 2, 0],
  12: [3, 25, 2, 1],
  13: [3, 25, 2, 1],
  14: [3, 25, 2, 1]
};
const highStats = [
  // 15★ → 16★ to 21★ → 22★
  // Format: [visibleStat, nonWeaponAtt, weaponAtt]
  // Indexing: starforceStats[star - 16][equipLevelRangeIndex]
  [
    [7, 7, 6], [9, 8, 7], [11, 9, 8], [13, 10, 9], [15, 12, 13], [17, 14, 114]
  ],
  [
    [7, 8, 7], [9, 9, 8], [11, 10, 9], [13, 11, 9], [15, 13, 13], [17, 15, 15]
  ],
  [
    [7, 9, 7], [9, 10, 8], [11, 11, 9], [13, 12, 10], [15, 14, 14], [17, 16, 16]
  ],
  [
    [7, 10, 8], [9, 11, 9], [11, 12, 10], [13, 13, 11], [15, 15, 14], [17, 17, 17]
  ],
  [
    [7, 11, 9], [9, 12, 10], [11, 13, 11], [13, 14, 12], [15, 16, 15], [17, 18, 18]
  ],
  [
    [null], [9, 13, 11], [11, 14, 12], [13, 15, 13], [15, 17, 16], [17, 19, 19]
  ],
  [
    [null], [9, 15, 12], [11, 16, 13], [13, 17, 14], [15, 19, 17], [17, 21, 21]
  ]
];
function getStatIndexFromEquipLevel(level) {
  if (level >= 128 && level <= 137) return 0;
  if (level >= 138 && level <= 149) return 1;
  if (level >= 150 && level <= 159) return 2;
  if (level >= 160 && level <= 199) return 3;
  if (level >= 200 && level <= 249) return 4;
  if (level === 250) return 5;
  return -1;
}

const noHP = ["gloves","shoes","earrings","eye accessory"];
// Job Stat +2
// Non-Weapon's Visible DEF +5%
// Overall's Visible DEF +5%
// Category A's Max HP +5
// Weapon's Max MP +5
// Weapon's Visible ATT +2%
// Weapon's Visible Magic ATT +2%
// Shoes' Speed +1
// Shoes' Jump +1
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
  if (atk > 0) result["Attack Power"] = atk;

  return result;
}

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

      starForceSpans.forEach((span, i) => {
        const key = statMap[i];
        if (key && updatedStats.get(key) !== undefined) {
          span.textContent = updatedStats.get(key);
          span.style.color = 'orange';
        }
        else{
          span.textContent = '0';
          span.style.color = 'white';
        }
        console.log(span,i);
      });
      
      console.log('Number of yellow stars: ', selectedEquip.starLevel);
    }

  
}

function updateImageAndBackground(input) {
  const value = input.value.toLowerCase();
  const imageUrl = imageMap[value] || '';
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
inputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    currentlySelected = index;
    updateImageAndBackground(input);

    const selectedEquip = equips[index];
    if (selectedEquip) {
      updateStarsDisplay(selectedEquip.starLevel || 0);
      updateStarStat();
      console.log(totalStats(150,selectedEquip.starLevel));
    }

  });

  input.addEventListener('change', () => {
    const selectedValue = input.value;
    const armor = new Armor();
    armor.name = selectedValue;
    equips[index] = armor;
    currentlySelected = index;

    updateImageAndBackground(input);
    updateStarsDisplay(armor.starLevel);
  });
});

const stars = document.querySelectorAll('.star');

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
