# RPG Dice

A Node.js module that exposes functionality to simulate dice rolls.


## Installation

The module can be installed via NPM:

    npm install rpg-dice


## Usage

    // Require the library
    var dice = require('rpg-dice');

    // Rolling can be done via two syntaxes:
    dice.roll('1d20');
    dice.roll(1, 20);

The `roll()` method returns a result object in the following format:

    {
      rolls: [18, 14, 2, 9, 11],  // the individual roll results
      result: 54  // the total result
    }
