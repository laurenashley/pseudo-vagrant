const chalk = require("chalk");

const message = `Hello ${chalk.yellow("World")} We are ${chalk.magenta('happy')} to ${chalk.bgYellowBright('meet')} you${chalk.blackBright('!')}`;
console.log(message);