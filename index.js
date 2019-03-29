#!/usr/bin/env node

const { spawn } = require("child_process");

const { gitCommandByAlias, formatMessage } = require("./helpers");

const completeCommand = process.argv;

let cmd = gitCommandByAlias(completeCommand[2]);

completeCommand.splice(0, 3, cmd);

let child = spawn("git", completeCommand);

//Output
child.stdout.on("data", data => {
  console.log(formatMessage(cmd, data));
});

child.stderr.on("data", data => {
  console.log(formatMessage(cmd, data));
});
