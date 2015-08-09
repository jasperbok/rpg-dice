/**
 * RPG Dice - Node module for rolling various types of dice
 * Copyright (C) 2015 Jasper Bok
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 *
 * @param {int} max - The highest possible number
 * @param {int} min - The lowest possible number
 * @returns {int} A random integer between min and max
 */
function randInt(max, min) {
  min = min || 1;
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}

function rollDice() {
  if (arguments.length === 1) {
    return rollDiceString(arguments[0]);
  } else {
    return rollDiceParams(arguments[0], arguments[1]);
  }
}

function rollDiceString(str) {
  var parts = str.split('d');
  return rollDiceParams(parts[0] || 1, parts[1]);
}

function rollDiceParams(num, sides) {
  var result = {rolls: [], result: 0};
  var i = 0;
  for (; i < num; i++) {
    var roll = randInt(sides, 1);
    result.rolls.push(roll);
    result.result += roll;
  }
  return result;
}

module.exports = {
  roll: rollDice
}
