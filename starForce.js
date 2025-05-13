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
  let costChartInstance = null;
  let boomChartInstance = null;
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
  
  function calcExpected(attempts, level, currentStar,goalStar, starCatch, safeGuard, thirtyOff, fifteensixteen){
    let totalCost = 0;
    let totalBoom = 0;
    const sessionCosts = [];
    const sessionBooms = [];
    for(let i = 0; i<attempts;i++){
      let trialStar = currentStar
      let sessionBoom = 0;
      let sessionCost = 0;
      let chanceTime = 0;
      while(trialStar<goalStar){
        sessionCost += mesoCost(level, trialStar)*thirtyOff;
        if(trialStar == 15 && fifteensixteen)
          chanceTime = 2;
        if((trialStar == 16 || trialStar == 15 )&& safeGuard &&chanceTime != 2){
          sessionCost += mesoCost(level,trialStar);
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
      
      sessionCosts.push(sessionCost);
      sessionBooms.push(sessionBoom);
      totalBoom += sessionBoom;
      totalCost += sessionCost;
    }

    return {
      totalCost,
      totalBoom,
      sessionCosts,
      sessionBooms
    };
  }
  function createHistogramData(data, bins = 10) { //making histogram 
    const max = Math.max(...data);
    const min = 0;
    const binSize = (max - min) / bins;
  
    const binLabels = [];
    const binCounts = new Array(bins).fill(0);
  
    for (let i = 0; i < bins; i++) {
      const start = Math.round(min + i * binSize);
      const end = Math.round(min + (i + 1) * binSize);
      binLabels.push(`${start.toLocaleString()} - ${end.toLocaleString()}`);
    }
  
    for (const value of data) {
      let index = Math.floor((value - min) / binSize);
      if (index === bins) index = bins - 1; // edge case: max value
      binCounts[index]++;
    }
  
    return { binLabels, binCounts };
  }
  function renderCharts(sessionCosts, sessionBooms) {
    const { binLabels, binCounts } = createHistogramData(sessionCosts, 36);
    const { binLabels: boomLabels, binCounts: boomCounts } = createHistogramData(sessionBooms, 36);
    const costCtx = document.getElementById('costChart').getContext('2d');
    const boomCtx = document.getElementById('boomChart').getContext('2d');
    if (costChartInstance) {
      costChartInstance.destroy();
    }
    if (boomChartInstance) {
      boomChartInstance.destroy();
    }
    costChartInstance = new Chart(costCtx, {
      type: 'bar',
      data: {
        labels: binLabels,
        datasets: [{
          label: 'Trial Count per Meso Range',
          data: binCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Trials'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Meso Range'
            }
          }
        }
      }
    });
  
    boomChartInstance = new Chart(boomCtx, {
      type: 'bar',
      data: {
        labels: boomLabels,
        datasets: [{
          label: 'Trial Count per Boom Range',
          data: boomCounts,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          background: {
            color: '#ffffff'
          }
        },
        layout: {
          backgroundColor: '#ffffff'
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Trials'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Boom Count Range'
            }
          }
        }
      }
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-wrapper button").addEventListener("click", function () {
        const level = document.querySelector('input[placeholder="Item Level"]').value;
        let starCatching = false;
        if (document.querySelector('input[list="Star catching"]').value == 'Starcatching'){
          starCatching = true;
        }
        let safeguard = false;
        if(document.querySelector('input[list="safeguards"]').value == 'Safeguard'){
          safeguard = true;
        }
        let thirtyOff = 1.0;
        let fifteenSixteen = false;
        if(document.querySelector('input[list="events"]').value == '30% Off + 15/16'){
          thirtyOff = 0.7;
          fifteenSixteen = true;
        }
        else if(document.querySelector('input[list="events"]').value == '30% Off'){
          thirtyOff = 0.7;
        }
        else if(document.querySelector('input[list="events"]').value == '15/16'){
          fifteenSixteen = true;
        }
        const events = Number(document.querySelector('input[list="events"]').value);
        const currentStar = Number(document.querySelector('input[placeholder="0"]').value);
        const goalStar = Number(document.querySelector('input[placeholder="22"]').value);
        const trials = Number(document.querySelector('input[placeholder="3000"]').value);
        
        const {totalCost, totalBoom, sessionCosts, sessionBooms} = calcExpected(trials,level,currentStar,goalStar, starCatching,safeguard,thirtyOff, fifteenSixteen)
        // const {totalCost, totalBoom, sessionCosts, sessionBooms} = calcExpected(30000,150,15,22, true,true,0.7, false);
        // let trials = 3000;
        const output = `
            <p><strong>Average Cost: </strong>${(totalCost/trials).toLocaleString()}</p>
            <p><strong>Average Boom: </strong>${(totalBoom/trials).toLocaleString()}</p>
            <p><strong>Level:</strong> ${level}</p>
            <p><strong>Star Catching:</strong> ${starCatching}</p>
            <p><strong>Safeguard:</strong> ${safeguard}</p>
            <p><strong>Events:</strong> ${events}</p>
            <p><strong>Current Star:</strong> ${currentStar}</p>
            <p><strong>Goal Star:</strong> ${goalStar}</p>
            <p><strong>Trials:</strong> ${trials}</p>
        `;
        renderCharts(sessionCosts,sessionBooms);
        const outputBox = document.getElementById("output-box");
        document.getElementById("output-content").innerHTML = output;
        outputBox.style.display = "block";
    });
});

  
  