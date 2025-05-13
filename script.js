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

// Populate all ring dropdowns with shared options
ringDropdowns.forEach(select => {
  select.innerHTML = '';
  ringOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.text;
    select.appendChild(option);
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
const statsgained = { //stat, hp, speed, gloves
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
const higherStats = { // for 15+
  
}
const noHP = ["gloves","shoes","earrings","eye accessory"];
function statAtStar(itemLevel,starForce,classType,equipType){
  let statOne = null;
  let statTwo = null;
  let statAdd = null;
  let def = 1.05;
  let speed = null;
  let hp = null;
  let atk = null;
  if(classType ==='pirate' || classType === 'warrior' ||classType === 'bowman'){
    statOne = 'STR';
    statTwo = 'DEX';
  }
  else if(classType ==='pirate' || classType === 'warrior'){
    statOne = 'STR';
    statTwo = 'DEX';
  }
  else if(classType === 'thief'){
    statOne = 'LUK';
    statTwo = 'DEX';
  }
  else if(classType == 'magician'){
    statOne = 'INT';
    statTwo = 'LUK';
  }

}
function totalStats(itemLevel,starForce){
  for(let i = 0; i<starForce; i++){
    if (i )
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
    console.log(`Equip ${index + 1}: ${armor}`);
    console.log('All equips:', equips.map(e => e ? e.name : null));
  });
});

const stars = document.querySelectorAll('.star');

// Star selection logic
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.style.color = i <= index ? 'yellow' : 'white';
    });

    if (currentlySelected !== null && equips[currentlySelected]) {
      equips[currentlySelected].starLevel = index + 1;
      console.log('Updated stars:', equips.map(e => e ? e.starLevel : null));
    }

    console.log('Number of yellow stars: ', index + 1);
  });
});
