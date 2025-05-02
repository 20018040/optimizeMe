function mesoCost(level, currentStar){
    divider = 20000;
    if (currentStar < 10) {
    return 100*Math.round((level**3) *  (currentStar+1)/2500 + 10);
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
  } 
    return 100*Math.round((level**3) *  (currentStar+1)**2.7/divider + 10);  
  }
//   const preSaviorRates = {
//     0: [0.95, 0.05, 0, 0],
//     1: [0.9, 0.1, 0, 0],
//     2: [0.85, 0.15, 0, 0],
//     3: [0.85, 0.15, 0, 0],
//     4: [0.80, 0.2, 0, 0],
//     5: [0.75, 0.25, 0, 0],
//     6: [0.7, 0.3, 0, 0],
//     7: [0.65, 0.35, 0, 0],
//     8: [0.6, 0.4, 0, 0],
//     9: [0.55, 0.45, 0, 0],
//     10: [0.5, 0.5, 0, 0],
//     11: [0.45, 0, 0.55, 0],
//     12: [0.4, 0.0, 0.594, 0.006],
//     13: [0.35, 0.0, 0.637, 0.013],
//     14: [0.3, 0.0, 0.686, 0.014],
//     15: [0.3, 0.679, 0, 0.021],
//     16: [0.3, 0.0, 0.679, 0.021],
//     17: [0.3, 0.0, 0.679, 0.021],
//     18: [0.3, 0.0, 0.672, 0.028],
//     19: [0.3, 0.0, 0.672, 0.028],
//     20: [0.3, 0.63, 0, 0.07],
//     21: [0.3, 0, 0.63, 0.07],
//     22: [0.03, 0.0, 0.776, 0.194],
//     23: [0.02, 0.0, 0.686, 0.294],
//     24: [0.01, 0.0, 0.594, 0.396]
//   };
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
    20: [0.30, 0.63, 0.00,  0.07],
    21: [0.30, 0.00, 0.63, 0.07],
    22: [0.03, 0.00, 0.776, 0.194],
    23: [0.02, 0.00, 0.686, 0.294],
    24: [0.01, 0.00, 0.594, 0.396],
  };
  function starForce(level,currentStar,starCatch,safeGuard,chanceTime){
    const r= Math.random();
    let [successRate, maintainRate, dropRate, boomRate] = starForceRates[currentStar];
    if (starCatch){
      let increased = successRate * 0.05;
      successRate = successRate *1.05;
      const remain = 1- successRate;
      maintainRate = maintainRate - increased * maintainRate / (remain);
      dropRate =  dropRate - (increased * dropRate / (remain));
      boomRate =  boomRate- increased *  boomRate/ (remain);
    }
    if(r < successRate || chanceTime == 2 ){
        return 'success';
    }
    else if(r < successRate + maintainRate ){//maintain
        return 'maintain';
    }else if(r < successRate + maintainRate +dropRate ){//drop
      return 'drop';
    }else if(r < successRate + maintainRate +dropRate + boomRate){
      if((currentStar == 16 || currentStar == 15 )&& safeGuard){
        if(maintainRate)
          return 'maintain';
        else 
          return 'drop';
      }
      return 'boom';
    }
    return 'success'
}
  
  function calcExpected(attempts, level, currentStar, starCatch, safeGuard, goalStar){
    let totalCost = 0;
    let totalBoom = 0;
    for(let i = 0; i<attempts;i++){
      let trialStar = currentStar
      let sessionBoom = 0;
      let chanceTime = 0;
      while(trialStar<goalStar){
        totalCost += mesoCost(level, trialStar);
        if((trialStar == 16 || trialStar == 15 )&& safeGuard){
          totalCost += mesoCost(level,trialStar);
        }
        // console.log("current star : ",trialStar);
        result = starForce(level, trialStar,starCatch,safeGuard,chanceTime);
        if(result == 'success'){
          trialStar++;
          chanceTime = 0; 
        }
        else if(result == 'maintain'){
          
        }
        else if(result == 'drop'){
          trialStar--;
          chanceTime++;
          if(trialStar ==15 ||trialStar ==20){//dont think this part is necessary
            if (chanceTime ==1){
              chanceTime = 0;
            }
          }
        }
        else if(result == 'boom'){
          sessionBoom ++;
          trialStar = 12;
        }
        
      }
      totalBoom += sessionBoom;
    }

    console.log("Average Cost :", totalCost/attempts);
    
    return totalCost;
  }


  function main(){
    calcExpected(25000, 150, 15, false, true, 22);
  }
  main();
//   document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".button-wrapper button").addEventListener("click", function () {
//         const level = document.querySelector('input[placeholder="Item Level"]').value;
//         let starCatching = false;
//         if (document.querySelector('input[list="Star catching"]').value == 'Starcatch'){
//           starCatching = true;
//         }
//         let safeguard = false;
//         if(document.querySelector('input[list="safeguards"]').value == 'Safeguard'){
//           safeguard = true;
//         }
//         const events = document.querySelector('input[list="events"]').value;
//         const currentStar = document.querySelector('input[placeholder="0"]').value;
//         const goalStar = document.querySelector('input[placeholder="22"]').value;
//         const trials = document.querySelector('input[placeholder="3000"]').value;
//         const averageCost = calcExpected(trials,level,currentStar,starCatching,safeguard,goalStar)
//         const output = `
//             <p><strong>Average Cost: </strong>${averageCost/trials}</p>
//             <p><strong>Level:</strong> ${level}</p>
//             <p><strong>Star Catching:</strong> ${starCatching}</p>
//             <p><strong>Safeguard:</strong> ${safeguard}</p>
//             <p><strong>Events:</strong> ${events}</p>
//             <p><strong>Current Star:</strong> ${currentStar}</p>
//             <p><strong>Goal Star:</strong> ${goalStar}</p>
//             <p><strong>Trials:</strong> ${trials}</p>
//         `;

//         const outputBox = document.getElementById("output-box");
//         document.getElementById("output-content").innerHTML = output;
//         outputBox.style.display = "block";
//     });
// });

  
  