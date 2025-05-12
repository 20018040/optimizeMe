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
      STR: 0, DEX: 0, INT: 0, LUK: 0,
      Defense: 0, HP: 0, MP: 0, ATK: 0, MATK: 0,
      Speed: 0, Jump: 0, AllStat: 0
    };
    this.flameStats = { ...this.flatStats };
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
      itemImage.src = 'empty.png'; // Set this to your actual "empty" image
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
