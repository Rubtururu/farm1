K = 1000;
M = 1000000;
B = 1000000000;
T = 1000000000000;

BASE_PRODUCTION_UPGRADE_CLASS = 0;
PRODUCTION_MULTIPLIER_UPGRADE_CLASS = 1;
UNIT_CAPACITY_UPGRADE_CLASS = 8;
REDUCED_COST_UPGRADE_CLASS = 9;


UNIT_ONE_UPGRADES_ZERO = [
	{id: 1, gooCost: 500, value: 0.1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 2, gooCost: 20 * K, value: 0.1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 3, gooCost: 1 * M, value: 0.1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 4, gooCost: 50 * M, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 5, gooCost: 2.5 * B, value: 0.1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 6, gooCost: 50 * B, value: 0.1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 7, gooCost: 500 * B, value: 0.1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 8, gooCost: 2.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 9, tronCost: 500, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	//{id: 10, gooCost: 500 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 11, gooCost: 2.5 * T, value: 0.1, class: BASE_PRODUCTION_UPGRADE_CLASS}
];

UNIT_ONE_UPGRADES_ONE = [
	{id: 21, gooCost: 1 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 22, gooCost: 50 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 23, gooCost: 2.5 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 24, gooCost: 100 * M, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 25, gooCost: 5 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 26, gooCost: 100 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 27, gooCost: 750 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 28, gooCost: 3.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 29, tronCost: 500, value: 100, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	//{id: 30, gooCost: 750 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 31, gooCost: 3.5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS}
];


UNIT_TWO_UPGRADES_ZERO = [
	{id: 51, gooCost: 2.5 * K, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 52, gooCost: 100 * K, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 53, gooCost: 5 * M, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 54, gooCost: 250 * M, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 55, gooCost: 10 * B, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 56, gooCost: 75 * B, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 57, gooCost: 750 * B, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 58, gooCost: 5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 59, tronCost: 500, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS},
	//{id: 60, gooCost: 750 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 61, gooCost: 5 * T, value: 0.2, class: BASE_PRODUCTION_UPGRADE_CLASS}
];

UNIT_TWO_UPGRADES_ONE = [
	{id: 71, gooCost: 5 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 72, gooCost: 250 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 73, gooCost: 10 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 74, gooCost: 500 * M, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 75, gooCost: 15 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 76, gooCost: 125 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 77, gooCost: 1 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 78, gooCost: 7.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 79, tronCost: 500, value: 100, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	//{id: 80, gooCost: 1 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 81, gooCost: 7.5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS}
];


UNIT_FOUR_UPGRADES_ZERO = [
	{id: 151, gooCost: 7.5 * K, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 152, gooCost: 250 * K, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 153, gooCost: 10 * M, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 154, gooCost: 500 * M, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 155, gooCost: 15 * B, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 156, gooCost: 100 * B, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 157, gooCost: 1 * T, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 158, gooCost: 7.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 159, tronCost: 500, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS},
	//{id: 160, gooCost: 1 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 161, gooCost: 7.5 * T, value: 0.4, class: BASE_PRODUCTION_UPGRADE_CLASS}
];

UNIT_FOUR_UPGRADES_ONE = [
	{id: 171, gooCost: 10 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 172, gooCost: 750 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 173, gooCost: 15 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 174, gooCost: 750 * M, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 175, gooCost: 20 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 176, gooCost: 150 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 177, gooCost: 1.5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 178, gooCost: 10 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 179, tronCost: 500, value: 100, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	//{id: 180, gooCost: 1.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 181, gooCost: 10 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS}
];


UNIT_FIVE_UPGRADES_ZERO = [
	{id: 201, gooCost: 15 * K, value: 0.6, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 202, gooCost: 600 * K, value: 0.6, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 203, gooCost: 20 * M, value: 0.6, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 204, gooCost: 750 * M, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 205, gooCost: 25 * B, value: 0.6, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 206, gooCost: 150 * B, value: 0.6, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 207, gooCost: 1.5 * T, value: 0.6, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 208, gooCost: 10 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 209, tronCost: 500, value: 1.2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	//{id: 210, gooCost: 1.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 211, gooCost: 10 * T, value: 0.6, class: BASE_PRODUCTION_UPGRADE_CLASS}
];

UNIT_FIVE_UPGRADES_ONE = [
	{id: 221, gooCost: 20 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 222, gooCost: 750 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 223, gooCost: 25 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 224, gooCost: 1 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 225, gooCost: 30 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 226, gooCost: 200 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 227, gooCost: 2 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 228, gooCost: 15 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 229, tronCost: 500, value: 100, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	//{id: 230, gooCost: 2 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 231, gooCost: 15 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS}
];


UNIT_SIX_UPGRADES_ZERO = [
	{id: 251, gooCost: 25 * K, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 252, gooCost: 800 * K, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 253, gooCost: 30 * M, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 254, gooCost: 1.2 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 255, gooCost: 35 * B, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 256, gooCost: 200 * B, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 257, gooCost: 2 * T, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 258, gooCost: 15 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 259, tronCost: 500, value: 1.6, class: BASE_PRODUCTION_UPGRADE_CLASS},
	//{id: 260, gooCost: 2 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 261, gooCost: 15 * T, value: 0.8, class: BASE_PRODUCTION_UPGRADE_CLASS}
];

UNIT_SIX_UPGRADES_ONE = [
	{id: 271, gooCost: 30 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 272, gooCost: 1 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 273, gooCost: 40 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 274, gooCost: 1.5 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 275, gooCost: 40 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 276, gooCost: 250 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 277, gooCost: 2.5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 278, gooCost: 17.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 279, tronCost: 500, value: 100, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	//{id: 280, gooCost: 2.5 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 281, gooCost: 17.5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS}
];


UNIT_EIGHT_UPGRADES_ZERO = [
	{id: 351, gooCost: 50 * K, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 352, gooCost: 2 * M, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 353, gooCost: 75 * M, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 354, gooCost: 3 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 355, gooCost: 55 * B, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 356, gooCost: 300 * B, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 357, gooCost: 3 * T, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 358, gooCost: 20 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 359, tronCost: 500, value: 2, class: BASE_PRODUCTION_UPGRADE_CLASS},
	//{id: 360, gooCost: 3 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 361, gooCost: 20 * T, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS}
];

UNIT_EIGHT_UPGRADES_ONE = [
	{id: 371, gooCost: 75 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 372, gooCost: 4 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 373, gooCost: 100 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 374, gooCost: 4 * B, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	{id: 375, gooCost: 60 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 376, gooCost: 400 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 377, gooCost: 4 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 378, gooCost: 30 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 379, tronCost: 500, value: 100, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	//{id: 380, gooCost: 4 * T, value: 10, class: REDUCED_COST_UPGRADE_CLASS},
	//{id: 381, gooCost: 30 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS}
];


UNIT_ONE_HUNDRED_UPGRADES_ZERO = [
	{id: 1001, gooCost: 100 * K, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1002, gooCost: 5 * M, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1003, gooCost: 150 * M, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1004, gooCost: 6 * B, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1005, gooCost: 75 * B, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1006, gooCost: 500 * B, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1007, gooCost: 3 * T, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1008, gooCost: 15 * T, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1009, gooCost: 60 * T, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
];

UNIT_ONE_HUNDRED_UPGRADES_ONE = [
	{id: 1021, gooCost: 150 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1022, gooCost: 7.5 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1023, gooCost: 200 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1024, gooCost: 8 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1025, gooCost: 100 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1026, gooCost: 750 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1027, gooCost: 5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1028, gooCost: 25 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1029, gooCost: 100 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
];

UNIT_TWO_HUNDRED_UPGRADES_ZERO = [
	{id: 1051, gooCost: 100 * K, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1052, gooCost: 5 * M, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1053, gooCost: 150 * M, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1054, gooCost: 6 * B, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1055, gooCost: 75 * B, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1056, gooCost: 500 * B, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1057, gooCost: 3 * T, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1058, gooCost: 15 * T, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1059, gooCost: 60 * T, value: 1, class: BASE_PRODUCTION_UPGRADE_CLASS},
];

UNIT_TWO_HUNDRED_UPGRADES_ONE = [
	{id: 1071, gooCost: 150 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1072, gooCost: 7.5 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1073, gooCost: 200 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1074, gooCost: 8 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1075, gooCost: 100 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1076, gooCost: 750 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1077, gooCost: 5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1078, gooCost: 25 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1079, gooCost: 100 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
];


UNIT_THREE_HUNDRED_UPGRADES_ZERO = [
	{id: 1101, gooCost: 100 * K, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1102, gooCost: 5 * M, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1103, gooCost: 150 * M, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1104, gooCost: 6 * B, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1105, gooCost: 75 * B, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1106, gooCost: 500 * B, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1107, gooCost: 3 * T, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1108, gooCost: 15 * T, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
	{id: 1109, gooCost: 60 * T, value: 5, class: BASE_PRODUCTION_UPGRADE_CLASS},
];

UNIT_THREE_HUNDRED_UPGRADES_ONE = [
	{id: 1121, gooCost: 150 * K, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1122, gooCost: 7.5 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1123, gooCost: 200 * M, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1124, gooCost: 8 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1125, gooCost: 100 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1126, gooCost: 750 * B, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1127, gooCost: 5 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1128, gooCost: 25 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
	{id: 1129, gooCost: 100 * T, value: 50, class: PRODUCTION_MULTIPLIER_UPGRADE_CLASS},
];

function getUpgradeText(upgradeClass, value) {
	if (upgradeClass == BASE_PRODUCTION_UPGRADE_CLASS) {
        return "+" + value + " base production";
    } else if (upgradeClass == PRODUCTION_MULTIPLIER_UPGRADE_CLASS) {
        return "+" + value + "% production";
    } else if (upgradeClass == REDUCED_COST_UPGRADE_CLASS) {
        return "-" + value + "% unit cost";
    }
}

function getUpgradeIcon(upgradeClass) {
    if (upgradeClass == BASE_PRODUCTION_UPGRADE_CLASS) {
        return "/assets/img/goo_plus.png";
    } else if (upgradeClass == PRODUCTION_MULTIPLIER_UPGRADE_CLASS) {
        return "/assets/img/goo_percentage.png";
    } else {
        return "/assets/img/reduced_price.png";
    }
}


UNIT_ONE = {index: 0, id: 1, name: "Intern Kitty", img: "internkitty.png", gooCost: 20, gooCostIncreaseHalf: 10, production: 0.1, upgrades0: UNIT_ONE_UPGRADES_ZERO, upgrades1: UNIT_ONE_UPGRADES_ONE};
UNIT_TWO = {index: 1, id: 2, name: "Graduate Gerbil", img: "graduategerbil.png", gooCost: 150, gooCostIncreaseHalf: 75, production: 0.5, upgrades0: UNIT_TWO_UPGRADES_ZERO, upgrades1: UNIT_TWO_UPGRADES_ONE};
UNIT_FOUR = {index: 2, id: 4, name: "PhD. Ducks", img: "phdduck.png", gooCost: 400, gooCostIncreaseHalf: 200, production: 1, levelRequirement: 2, upgrades0: UNIT_FOUR_UPGRADES_ZERO, upgrades1: UNIT_FOUR_UPGRADES_ONE};
UNIT_FIVE = {index: 3, id: 5, name: "Prof. Penguin", img: "profpenguin.png", gooCost: 1000, gooCostIncreaseHalf: 500, production: 2, levelRequirement: 3, upgrades0: UNIT_FIVE_UPGRADES_ZERO, upgrades1: UNIT_FIVE_UPGRADES_ONE};
UNIT_SIX = {index: 4, id: 6, name: "Biochem. Badgers", img: "biochembadger.png", gooCost: 2400, gooCostIncreaseHalf: 1200, production: 4, levelRequirement: 4, upgrades0: UNIT_SIX_UPGRADES_ZERO, upgrades1: UNIT_SIX_UPGRADES_ONE};
UNIT_EIGHT = {index: 5, id: 8, name: "Hamster Wheels", img: "hamsterwheel.png", gooCost: 4000, gooCostIncreaseHalf: 2000, production: 6, levelRequirement: 5, upgrades0: UNIT_EIGHT_UPGRADES_ZERO, upgrades1: UNIT_EIGHT_UPGRADES_ONE};

UNIT_ONE_HUNDRED = {id: 100, production: 5, upgrades0: UNIT_ONE_HUNDRED_UPGRADES_ZERO, upgrades1: UNIT_ONE_HUNDRED_UPGRADES_ONE};
UNIT_TWO_HUNDRED = {id: 200, production: 1, upgrades0: UNIT_TWO_HUNDRED_UPGRADES_ZERO, upgrades1: UNIT_TWO_HUNDRED_UPGRADES_ONE};

UNIT_THREE_HUNDRED = {id: 300, production: 10, upgrades0: UNIT_THREE_HUNDRED_UPGRADES_ZERO, upgrades1: UNIT_THREE_HUNDRED_UPGRADES_ONE};

PRODUCTION_UNITS = [UNIT_ONE, UNIT_TWO, UNIT_FOUR, UNIT_FIVE, UNIT_SIX, UNIT_EIGHT, UNIT_THREE_HUNDRED, UNIT_TWO_HUNDRED, UNIT_ONE_HUNDRED];

ALL_UPGRADES = function allUpgrades() {
	var upgrades = [];
	for (var i = 0; i < PRODUCTION_UNITS.length; i++) {
		const unit = PRODUCTION_UNITS[i];
		upgrades = upgrades.concat(unit.upgrades0).concat(unit.upgrades1);
	}
	return upgrades;
}

function productionUnitIds() {
    const units = PRODUCTION_UNITS;
    const ids = [];
    for (var i = 0; i < units.length; i++) {
        ids.push(units[i].id);
    }
	return ids;
}

function productionUpgradeIds() {
    const units = PRODUCTION_UNITS;
    var upgrades = [];
	for (var i = 0; i < units.length; i++) {
		const unit = units[i];
		upgrades = upgrades.concat(unit.upgrades0).concat(unit.upgrades1);
	}

    const upgradeIds = [];
    for (var i = 0; i < upgrades.length; i++) {
        upgradeIds.push(upgrades[i].id);
    }
	return upgradeIds;
}

function productionUpgradeIndexStart(unitIndex) {
	const units = Config.PRODUCTION_UNITS;
	var offset = 0;
	for (var i = 0; i < unitIndex; i++) {
		offset += (units.upgrades0.length + units.upgrades1.length);
	}
	return offset;
}

function getUnitsGooProduction(baseStat, baseIncreases, multiplierIncreases) {
	var multiplier = 100;

	if (baseIncreases != null) {
		baseStat = baseIncreases + baseStat;
	}
	if (multiplierIncreases != null) {
		multiplier = multiplierIncreases + multiplier;
	}
	return (multiplier * baseStat) / 100;
}

function getUnitsGooCost(unit, existing, amount, discountValue) {
    const baseGooCost = unit.gooCost;
    const gooCostIncreaseHalf = unit.gooCostIncreaseHalf;

	var unitsCost = baseGooCost;
    if (amount == 1) {
        if (existing > 0) {
            unitsCost = (existing * gooCostIncreaseHalf * 2) + baseGooCost;
        }
    } else if (amount > 1) {
        var existingCost = 0;
        if (existing > 0) {
            existingCost = (existing * baseGooCost) + (existing * (gooCostIncreaseHalf * (existing - 1)));
        }

        existing = existing + amount;
        const newCost = (existing * baseGooCost) + (existing * (gooCostIncreaseHalf * (existing - 1)));
        unitsCost = newCost - existingCost;
    } else if (amount == 0){
        unitsCost = 0;
    }

	if (discountValue != null && discountValue > 0 && discountValue < 100) {
		const discount = 100 -  discountValue;
		unitsCost = (unitsCost * discount) / 100;
	}

    return unitsCost;
}

function getNumUnitsCanAfford(unit, existing, goo, discountValue) {
    const a = existing;
    const b = unit.gooCost;
    const c = unit.gooCostIncreaseHalf;
    const d = (discountValue != null && discountValue > 0 && discountValue < 100) ? discountValue : 0;
    const g = (goo * 100) / (100-d);
    const x = (((2 * a) - 1) * c) + b;
    const n = Math.floor((Math.sqrt((g * c * 4) + (x * x)) - x) / (2 * c));
    const success = (getUnitsGooCost(unit,existing,n,discountValue) <= goo) && (getUnitsGooCost(unit,existing,n+1,discountValue) > goo);
    if (!success) {
        return 0;
    }
    return n;
}
