const chalk = require("chalk");
const commands = require("./commands");

/**
 * Swap the keys and values of a given object.
 *
 * @param {object} obj
 * @returns {object}
 */
const swap = obj => {
  var swapped = {};
  for (var key in obj) {
    swapped[obj[key]] = key;
  }
  return swapped;
};

/**
 * format the output message.
 * @param {string} data
 */
const formatMessage = (cmd, data) => {
  let message = chalk.magenta.bold(`mgit  \`git ${cmd}\`...`);
  return message + `\n\n${chalk.blue(data)}`;
};

/**
 * Retrieve the appropriate `git` command from the alias that was passed.
 * If it doesn't exist, return the alias itself. Enables backward compatibility.
 * @param {string} alias
 */
const gitCommandByAlias = alias => {
  let swappedCommands = swap(commands);
  return swappedCommands[alias] === undefined
    ? [alias]
    : swappedCommands[alias];
};

module.exports = {
  swap,
  gitCommandByAlias,
  formatMessage
};
