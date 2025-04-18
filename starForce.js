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
  };
  const starForceRates = {
    0:  [0.95, 0.05, 0.00, 0.00],
    1:  [0.90, 0.10, 0.00, 0.00],
    2:  [0.85, 0.15, 0.00, 0.00],
    3:  [0.85, 0.15, 0.00, 0.00],
    4:  [0.80, 0.20, 0.00, 0.00],
    5:  [0.75, 0.25, 0.00, 0.00],
    6:  [0.70, 0.30, 0.00, 0.00],
    7:  [0.65, 0.35, 0.00, 0.00],
    8:  [0.60, 0.40, 0.00, 0.00],
    9:  [0.55, 0.45, 0.00, 0.00],
    10: [0.50, 0.50, 0.00, 0.00],
    11: [0.45, 0.55, 0.00, 0.00],
    12: [0.40, 0.60, 0.00, 0.00],
    13: [0.35, 0.65, 0.00, 0.00],
    14: [0.30, 0.70, 0.00, 0.00],
    15: [0.30, 0.679, 0.00, 0.021],
    16: [0.30, 0.00, 0.679, 0.021],
    17: [0.30, 0.00, 0.679, 0.021],
    18: [0.30, 0.00, 0.672, 0.028],
    19: [0.30, 0.00, 0.672, 0.028],
    20: [0.30, 0.00, 0.63,  0.07],
    21: [0.30, 0.00, 0.63, 0.07 ],
    22: [0.03, 0.00, 0.776, 0.194],
    23: [0.02, 0.00, 0.686, 0.294],
    24: [0.01, 0.00, 0.594, 0.396],
  };
  function starForce(level,currentStar,starCatch){
  const r= Math.random();
  const [successRate, maintainRate, dropRate, boomRate] = starForceRates[currentStar];
  
  if(r < successRate){
    currentStar++;
  }else if(r < successRate + maintainRate ){//maintain
  
  }else if(r < successRate + maintainRate +dropRate ){//drop
    currentStar--;
  }else{
    currentStar = 12;
    return [1,currentStar];
  }
  return [0,currentStar]; 
  }
  function calcExpected(attempts, level, currentStar, starCatch, safeGuard, goalStar){
    let totalCost = 0;
    let totalBoom = 0;
    for(let i = 0; i<attempts;i++){
      let trialStar = currentStar
      let sessionBoom = 0;
      while(trialStar<goalStar){
        totalCost += mesoCost(level, trialStar);
        const [boom, newStar] = starForce(level, trialStar, starCatch);
        sessionBoom += boom;
        trialStar = newStar;
      }
      totalBoom += sessionBoom;
    }
    
    console.log("Average Cost :", totalCost/attempts);
    console.log("Average Boom :", totalBoom/attempts);
    
  }
  function main(){
    let level = 150;
    let currentStar = 12;
    calcExpected(1000, 150, 12, false, false, 22);
  }
  main()
  