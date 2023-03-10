# Notes App Functional Requirements

## Write and Create files in the file system
* Node.js FS module 
[File System - Node.js v18.15.0 documentation](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html)
```
const fs = require('fs')

fs.readFileSync(path[, options]);

fs.writeFileSync(file, data[,options]);
```

## Take Inputs from CLI to Notes App
* yargs module
Used the yargs module to build interactive Command Line Tools, by parsing arguments (from the console) and generating an elegant user interface.
[yargs - npm](https://www.npmjs.com/package/yargs)
```
const yargs = require('yargs');

yargs.parse();

yargs.command({});
```

* chalk module
Used the chalk module to format text in the CLI
[chalk - npm](https://www.npmjs.com/package/chalk)
```
cosnt chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
```

## Notes App Functionalities
* `Add` note
* `Remove` note
* `List` note
* `Read` notes
