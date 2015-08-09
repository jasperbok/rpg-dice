# RPG Dice

A Node.js module that exposes functionality to simulate dice rolls.

## Usage

    var dice = require('rpg-dice');

    dice.roll(1, 20);  // Rolls a 1d20
    // Returns {rolls: [15], result: 15}

    dice.roll(3, 6); // Rolls 3d6
    // Returns {rolls:[1, 5, 3], result: 9}
