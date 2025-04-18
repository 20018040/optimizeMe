const inputs = document.querySelectorAll('input[type="search"]');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    let imageUrl = 'default.png';

    if (value === 'option 1') {
      imageUrl = 'absoHat.png';
    } else if (value === 'option 2') {
      imageUrl = 'banana.png';
    } else if (value === 'option 3') {
      imageUrl = 'cherry.png';
    }

    input.style.backgroundImage = `url('${imageUrl}')`;
    input.style.backgroundRepeat = 'no-repeat';
    input.style.backgroundPosition = 'right center';
    input.style.backgroundSize = 'cover';
    input.style.paddingRight = '30px';
  });
  function mesoCost(level, currentStar){
    divider = 20000;
    if (currentStar < 10) {
      divider = 2500;
  } else if (currentStar == 10) {
      divider = 40000;
  } else if (currentStar == 11) {
      divider = 22000;
  } else if (currentStar == 12) {
      divider = 15000;
  } else if (currentStar == 13) {
      divider = 11000;
  } else if (currentStar == 14) {
      divider = 7500;
  } else if (currentStar == 15) {
      divider = 22000;
  }
    return 100*Math.round(level**3 *  (currentStar+1)/divider + 10);  
  }
  const preSaviorRates = {
    0: [0.95, 0.05, 0, 0],
    1: [0.9, 0.1, 0, 0],
    2: [0.85, 0.15, 0, 0],
    3: [0.85, 0.15, 0, 0],
    4: [0.80, 0.2, 0, 0],
    5: [0.75, 0.25, 0, 0],
    6: [0.7, 0.3, 0, 0],
    7: [0.65, 0.35, 0, 0],
    8: [0.6, 0.4, 0, 0],
    9: [0.55, 0.45, 0, 0],
    10: [0.5, 0.5, 0, 0],
    11: [0.45, 0, 0.55, 0],
    12: [0.4, 0.0, 0.594, 0.006],
    13: [0.35, 0.0, 0.637, 0.013],
    14: [0.3, 0.0, 0.686, 0.014],
    15: [0.3, 0.679, 0, 0.021],
    16: [0.3, 0.0, 0.679, 0.021],
    17: [0.3, 0.0, 0.679, 0.021],
    18: [0.3, 0.0, 0.672, 0.028],
    19: [0.3, 0.0, 0.672, 0.028],
    20: [0.3, 0.63, 0, 0.07],
    21: [0.3, 0, 0.63, 0.07],
    22: [0.03, 0.0, 0.776, 0.194],
    23: [0.02, 0.0, 0.686, 0.294],
    24: [0.01, 0.0, 0.594, 0.396]
}
function starForce(level,currentStar,starCatch){
  const r= Math.random();
  const [successRate, maintainRate, dropRate, boomRate] = preSaviorRates[currentStar];

  if(r < successRate){
    currentStar++;
  }else if(r < successRate + maintain ){//maintain

  }else if(r < successRate + maintain +dropRate ){//drop
    currentStar--;
  }else{
    currentStar = 12;
    return 1;
  }
  return 0; 
}
  function calcExpected(attempts, level, curentStar, starCatch, safeGuard, goalStar){
    totalCost = 0;
    totalBoom = 0;
    for(let i = 0; i<attempts;i++){
      while(currentStar<goalStar){
        totalCost += mesoCost(level, currentStar);
        totalBoom += starForce(level,currentStar,starCatch);
        
      }
    }
  }
});