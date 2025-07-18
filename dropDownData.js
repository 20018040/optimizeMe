const ringOptions = [
    { value: '', text: 'Select' },
    { value: 'reinforced gollux ring', text: 'Reinforced Gollux Ring' },
    { value: 'superior gollux ring', text: 'Superior Gollux Ring' },
    { value: 'meister ring', text: 'Meister Ring' },
    { value: 'endless terror', text: 'Endless Terror' },
    { value: 'kanna\'s treasure', text: 'Kanna\'s Treasure' }
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
    { value: 'source of suffering', text: 'Source of Suffering' },
    { value: 'reinforced gollux pendant', text: 'Reinforced Gollux Pendant'}
];
const weaponOptions = [ //need updat later 
    { value: '', text: 'Select' },
    { value: 'arcane weapon', text: 'Arcane Weapon' },
    { value: 'genesis weapon', text: 'Genesis Weapon' }
];
const beltOptions = [
    { value: '', text: 'Select' },
    { value: 'golden clover belt', text: 'Golden Clover Belt' },
    { value: 'superior gollux belt', text: 'Superior Gollux Belt' },
    { value: 'dreamy belt', text: 'Dreamy Belt' },
    { value: 'reinforced gollux belt', text: 'Reinforced Gollux Belt'}
];
const hatOptions = [
    { value: '', text: 'Select' },
    { value: 'cra helmet', text: 'CRA Helmet' },
    { value: 'absolab helmet', text: 'Absolab helmet' },
    { value: 'arcane helmet', text: 'Arcane Helmet' },
    { value: 'eternal helmet', text: 'Eternal Helmet'}
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
    // { value: 'pensalir shoes', text: 'Pensalir Shoes' },
    // { value: 'ranmaru shoes', text: 'Ranmaru Shoes' },
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
    // { value: 'ranmaru shoulder', text: 'Ranmaru Shoulder' },
    { value: 'absolab shoulder', text: 'Absolab Shoulder' },
    { value: 'arcane shoulder', text: 'Arcane Shoulder' },
    { value: 'eternal shoulder', text: 'Eternal Shoulder' }
];
  
const gloveOptions = [
    { value: '', text: 'Select' },
    // { value: 'pensalir gloves', text: 'Pensalir Gloves' },
    // { value: 'ranmaru gloves', text: 'Ranmaru Gloves' },
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
    // { value: 'pensalir cape', text: 'Pensalir Cape' },
    // { value: 'ranmaru cape', text: 'Ranmaru Cape' },
    { value: 'absolab cape', text: 'Absolab Cape' },
    { value: 'arcane cape', text: 'Arcane Cape' },
    { value: 'eternal cape', text: 'Eternal Cape' }
];

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

export const dropdownMap = [
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