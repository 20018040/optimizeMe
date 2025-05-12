
const soloStat = [
    [1, 2, 3, 4, 5, 6, 7],         // 0-19
    [2, 4, 6, 8, 10, 12, 14],      // 20-39
    [3, 6, 9, 12, 15, 18, 21],     // 40-59
    [4, 8, 12, 16, 20, 24, 28],    // 60-79
    [5, 10, 15, 20, 25, 30, 35],   // 80-99
    [6, 12, 18, 24, 30, 36, 42],   // 100-119
    [7, 14, 21, 28, 35, 42, 49],   // 120-139
    [8, 16, 24, 32, 40, 48, 56],   // 140-159
    [9, 18, 27, 36, 45, 54, 63],   // 160-179
    [10, 20, 30, 40, 50, 60, 70],  // 180-199
    [11, 22, 33, 44, 55, 66, 77],  // 200-229
    [12, 24, 36, 48, 60, 72, 84]   // 230+
  ];
const hybridStat = {
    0: [1, 2, 3, 4, 5, 6, 7],      // 0–39
    1: [2, 4, 6, 8, 10, 12, 14],   // 40–79
    2: [3, 6, 9, 12, 15, 18, 21],  // 80–119
    3: [4, 8, 12, 16, 20, 24, 28], // 120–159
    4: [5, 10, 15, 20, 25, 30, 35],// 160–199
    5: [6, 12, 18, 24, 30, 36, 42],// 200–249
    6: [7, 14, 21, 28, 35, 42, 49] // 250+
};
const hybridStats = [
    [1, 2, 3, 4, 5, 6, 7],     // 0–39
    [2, 4, 6, 8, 10, 12, 14],  // 40–79
    [3, 6, 9, 12, 15, 18, 21], // 80–119
    [4, 8, 12, 16, 20, 24, 28],// 120–159
    [5, 10, 15, 20, 25, 30, 35],// 160–199
    [6, 12, 18, 24, 30, 36, 42],// 200–249
    [7, 14, 21, 28, 35, 42, 49] // 250+
  ];//56
const atkLists = ["Atk", "MAtk","All Stat","Speed","Jump","Damage"];
const atk = [1,2,3,4,5,6,7]; // can use for speed jump dmg% allstat

const bossDmg = [2,4,6,8,10,12,14]; 

const weaponAtk = [
    [0.03, 0.044, 0.0605, 0.07986, 0.102487],    // 0–39
    [0.06, 0.088, 0.121, 0.15972, 0.204974],     // 40–79
    [0.09, 0.132, 0.1815, 0.23958, 0.307461],    // 80–119
    [0.12, 0.176, 0.242, 0.31944, 0.409948],     // 120–159
    [0.15, 0.22, 0.3025, 0.3993, 0.512435],      // 160–199
    [0.18, 0.264, 0.363, 0.47916, 0.614922]      // 200+
  ];
const hp = {
    0: [3, 6, 9, 12, 15, 18, 21],           // 0-9
    1: [30, 60, 90, 120, 150, 180, 210],    // 10-19
    2: [60, 120, 180, 240, 300, 360, 420],  // 20-29
    3: [90, 180, 270, 360, 450, 540, 630],  // 30-39
    4: [120, 240, 360, 480, 600, 720, 840], // 40-49
    5: [150, 300, 450, 600, 750, 900, 1050],// 50-59
    6: [180, 360, 540, 720, 900, 1080, 1260],// 60-69
    7: [210, 420, 630, 840, 1050, 1260, 1470],// 70-79
    8: [240, 480, 720, 960, 1200, 1440, 1680],// 80-89
    9: [270, 540, 810, 1080, 1350, 1620, 1890],// 90-99
   10: [300, 600, 900, 1200, 1500, 1800, 2100],// 100-109
   11: [330, 660, 990, 1320, 1650, 1980, 2310],// 110-119
   12: [360, 720, 1080, 1440, 1800, 2160, 2520],// 120-129
   13: [390, 780, 1170, 1560, 1950, 2340, 2730],// 130-139
   14: [420, 840, 1260, 1680, 2100, 2520, 2940],// 140-149
   15: [450, 900, 1350, 1800, 2250, 2700, 3150],// 150-159
   16: [480, 960, 1440, 1920, 2400, 2880, 3360],// 160-169
   17: [510, 1020, 1530, 2040, 2550, 3060, 3570],// 170-179
   18: [540, 1080, 1620, 2160, 2700, 3240, 3780],// 180-189
   19: [570, 1140, 1710, 2280, 2850, 3420, 3990],// 190-199
   20: [600, 1200, 1800, 2400, 3000, 3600, 4200],// 200-209
   21: [620, 1240, 1860, 2480, 3100, 3720, 4340],// 210-219
   22: [640, 1280, 1920, 2560, 3200, 3840, 4480],// 220-229
   23: [660, 1320, 1980, 2640, 3300, 3960, 4620],// 230-239
   24: [680, 1360, 2040, 2720, 3400, 4080, 4760],// 240-249
   25: [700, 1400, 2100, 2800, 3500, 4200, 4900] // 250+
  };
  
const defense = {
    0: [1, 2, 3, 4, 5, 6, 7],        // 0-19
    1: [2, 4, 6, 8, 10, 12, 14],     // 20-39
    2: [3, 6, 9, 12, 15, 18, 21],    // 40-59
    3: [4, 8, 12, 16, 20, 24, 28],   // 60-79
    4: [5, 10, 15, 20, 25, 30, 35],  // 80-99
    5: [6, 12, 18, 24, 30, 36, 42],  // 100-119
    6: [7, 14, 21, 28, 35, 42, 49],  // 120-139
    7: [8, 16, 24, 32, 40, 48, 56],  // 140-159
    8: [9, 18, 27, 36, 45, 54, 63],  // 160-179
    9: [10, 20, 30, 40, 50, 60, 70], // 180-199
   10: [11, 22, 33, 44, 55, 66, 77], // 200-229
   11: [12, 24, 36, 48, 60, 72, 84]  // 230+
  };
const equipLevel = [-5,-10,-15,-20,-25,-30,-35];
const possibleComb = ["STR","DEX","INT","LUK","STR DEX","STR INT",
    "STR LUK","DEX INT", "DEX LUK", "INT LUK","Atk", "MAtk","All Stat",
     "Defense","HP","MP","Speed","Jump","Equip Level"];
const possibleWeap = ["STR","DEX","INT","LUK","STR DEX","STR INT",
    "STR LUK","DEX INT", "DEX LUK", "INT LUK","wAtk", "wMAtk","All Stat",
     "Defense","HP","MP","Boss Damage", "Damage","Equip Level"];
const hybrids = ["STR DEX","STR INT",
    "STR LUK","DEX INT", "DEX LUK", "INT LUK"];
const powerfulRate = [0.20,0.30,0.36,0.14]; //for 1 2 3 4  or  3,4,5,6
const eternalRate = [0.29,0.45,0.25,0.01];//2 3 4 5 for non advantage, for advantage 4 5 6 7
function getRandomFlames(sourceArray, count = 4) {
    const shuffled = [...sourceArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}
function pickOption(armor = "armor"){
    let source = possibleComb;
    if (armor == "weapon"){
        source = possibleWeap;
    }
    return getRandomFlames(source);
}
function getFlame(flames,type){ //type indicates powerful Or eternal 3 would be powerful Eternal would be 4
function getFlame(flames,type){ //type indicates powerful Or eternal 3 would be powerful Eternal would be 4 
    let flameType = 3;
    let prob = powerfulRate;
    if (type == 'eternal'){
        flameType = 4;
        prob = eternalRate;
    }
    const itemFlame = new Map();
    for(flame of flames){
        const tier = Math.floor(Math.random() * (6 - 3 + 1)) + type ;
        itemFlame.set(flame, tier);
    }=
        const rand = Math.random();
        let cumulative = 0;
        // const tier = Math.floor(Math.random() * (6 - 3 + 1)) + flameType ;
        for (let i = 0; i < prob.length; i++) {
            cumulative += prob[i];
            if (rand < cumulative) {
                itemFlame.set(flame, flameType +i);
                break;
            }
        }
    }
    return itemFlame;
}
function toStat(itemFlame, itemLevel){
    const flameTotal = new Map();
    for(let [flame, tier] of itemFlame){
        tier = tier -1;
        if(hybrids.includes(flame)){
            const [stat1, stat2] = flame.split(" ");
            const value = hybridStat[Math.floor(itemLevel / 40)][tier];
            if (flameTotal.has(stat1)) {
                flameTotal.set(stat1, flameTotal.get(stat1) + value);
            } else {
                flameTotal.set(stat1, value);
            }
            if (flameTotal.has(stat2)) {
                flameTotal.set(stat2, flameTotal.get(stat2) + value);
            } else {
                flameTotal.set(stat2, value);
            }
        }
        else{
            let value = 0;
            if (atkLists.includes(flame)){
                value = atk[tier];
            }
            else if (flame == "HP" || flame == "MP"){ //itemLevel/ 10
                value = hp[Math.floor(itemLevel /10)][tier]
            }
            else if (flame == 'Defense')
                value = defense[Math.floor(itemLevel /20)][tier];
            else if (flame == 'wAtk' || flame == 'wMAtk') //itemLevel/40
                value = weaponAtk[Math.floor(itemLevel / 40)][tier-2];
            else if (flame == 'Boss Damage')
                value = bossDmg[tier];
            else if (flame == 'Equip Level')
                value = equipLevel[tier];
            else
                value = soloStat[Math.floor(itemLevel /20)][tier]
            if (flameTotal.has(flame)) {
                flameTotal.set(flame, flameTotal.get(flame) + value);
            } else {
                flameTotal.set(flame, value);
            }
        }
    }
    return flameTotal;
}
function convertStat(flameTotal,myStat,mainToSubRate, allStatRate,atkRate){
    let total = 0;
    let subStat = 'DEX';
    if (myStat == 'INT' ){
        subStat = 'LUK';
    }
    else if (myStat == 'DEX')
        subStat = 'STR';
    for (let [flame, stat] of flameTotal){
        if(flame == myStat){
            total += stat;
        }
        else if(flame == subStat){
            total += stat * mainToSubRate;
        }
        else if(flame == 'All Stat')
            total += stat * allStatRate;
        else if(myStat == 'INT' &&flame == 'MAtk')
            total += stat * atkRate;
        else if(myStat != 'INT' && flame =='Atk')
            total += stat * atkRate;
    }
    return total;
}
function calcFlameExpected(trial,level,totalStat,myStat = 'LUK',mainToSubRate = 0.125, allStatRate = 10,atkRate = 4,type){
    let counts = 0;
    let lists = new Map();
    for(let i = 0; i<trial;i++){
        let sections = pickOption();
        let secTiers = getFlame(sections,type);
        let numberStats = toStat(secTiers,level);
        let pureTotal = convertStat(numberStats,myStat,0.125,10,4);
        if (pureTotal >=totalStat){
            lists.set(counts,numberStats);
            counts ++;
        }

    }
    return counts;
}
function checkFlame(){ //checks if the flame is possible 
    
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-wrapper button").addEventListener("click", function () {
        // Select all input elements with the class 'search-bar'
        const Level = Number(document.querySelector('input[placeholder="Item Level"]').value);
        const Target = Number(document.querySelector('input[placeholder="Target Flame"]').value);
        const AllStat = Number(document.querySelector('input[placeholder="All Stat"]').value);
        const Atk = Number(document.querySelector('input[placeholder="Atk Equivalent"]').value);
        const Secondary = Number(document.querySelector('input[placeholder="Secondary Stat"]').value);
        const flameSelected = document.querySelector('input[name="flameType"]:checked').value;
        const Trials = Number(document.querySelector('input[placeholder="Trials"]').value);
        const counts = calcFlameExpected(Trials,Level,Target,undefined,Secondary,AllStat,Atk,flameSelected);
        const probability = counts/Trials;
        const output = `
            <p><strong>
                In ${Trials} Trials, ${counts} times happened.<br>
                 Probability: ${(probability * 100).toFixed(2)}%<br>
                Expected # of flames to hit: ${(1 / probability).toFixed(2)}
            </strong></p>
        `;

        const outputBox = document.getElementById("output-box");
        document.getElementById("output-content").innerHTML = output;
        outputBox.style.display = "block";
    });
});

  
  