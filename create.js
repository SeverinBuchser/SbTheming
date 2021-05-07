const colors = require('colors');

const createClass = require('./create-class');

const optionPattern = /--.*:.*/;
const optionPossibilities = [
  {
    name: 'class',
    method: createClass
  }
]

function parseArgs(argv) {
  let options = [];
  for (let i = 2 ; i < argv.length ; i++) {
    let arg = argv[i];
    let option = parseArg(arg);
    if (option) options.push(option);
    else {
      console.log(("Illegal argument " + arg).red);
      return null;
    }
  }
  return options;
}

function parseArg(arg) {
  if (optionPattern.test(arg)) {
    let name = arg.split(/--|:/)[1];
    let params = arg.split(/--|:/)[2].split(/,/);
    return { name, params };
  }
}

function assignOptionToMethod(options) {
  let methodAndArgs = [];
  if (options) {
    let unknown = [];
    options.forEach(option => {
      let optionFound = false;
      optionPossibilities.forEach(optionPossibility => {
        if (optionPossibility.name === option.name) {
          optionFound = true;
          methodAndArgs.push({
            method: optionPossibility.method,
            params: option.params
          })
        }
      })
      if (!optionFound) unknown.push(option)
    })
    if (unknown.length > 0) {
      unknown.forEach(option => {
        console.log(("Unknown option " + option.name).red);
      })
      return null;
    }
    return methodAndArgs;
  }
}

function runMethods(methodAndArgs) {
  if (methodAndArgs) {
    methodAndArgs.forEach(option => {
      option.method(option.params);
    })
  }
}

let options = parseArgs(process.argv);
let methodAndArgs = assignOptionToMethod(options);
runMethods(methodAndArgs);
