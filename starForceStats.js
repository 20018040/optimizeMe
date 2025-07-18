export const statArray = [
    { min: 0, max: 94, value: 5 },
    { min: 95, max: 107, value: 8 },
    { min: 108, max: 117, value: 10 },
    { min: 118, max: 127, value: 15 },
    { min: 128, max: 137, value: 20 },
    { min: 138, max: Infinity, value: 25 }
];
export const stats = { //stat, hp, speed, gloves
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

export const highStats = [
    // 15★ → 16★ to 21★ → 22★
    // Format: [visibleStat, nonWeaponAtt, weaponAtt]
    // Indexing: starforceStats[star - 15][equipLevelRangeIndex]
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

export const noHP = ["gloves","shoes","earrings","eye accessory"];
// Job Stat +2
// Non-Weapon's Visible DEF +5%
// Overall's Visible DEF +5%
// Category A's Max HP +5
// Weapon's Max MP +5
// Weapon's Visible ATT +2%
// Weapon's Visible Magic ATT +2%
// Shoes' Speed +1
// Shoes' Jump +1