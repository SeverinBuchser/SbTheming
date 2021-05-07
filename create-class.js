const fs = require('fs');
const path = require('path');
const capitalize = require('capitalize');

const importFile = 'index';
const fileTypes = [
  'settings',
  'naming',
  'functions',
  'classes'
]

function toFileName(className, fileType) {
  if (className === "") return "_" + fileType + ".scss";
  else return "_" + className + "-" + fileType + ".scss";
}

function toImport(className, fileType) {
  return "@import '" + className + "-" + fileType + "';";
}

function importToImport(className) {
  return "@import '" + className + "';"
}

function createImports(className) {
  let imports = [];
  fileTypes.forEach(fileType => {
    imports.push(toImport(className, fileType));
  });
  return imports.join("\n");
}

function createFileContent(className, fileType) {
  let separatorTop = "\/*****************************************************************************\r\n";
  let name = "                              " + capitalize.words(className) + " - " + capitalize.words(fileType) + "\r\n";
  let separatorBottom = "******************************************************************************\/\n";
  return separatorTop + name +  separatorBottom;
}

function createFile(dir, fileName, content) {
  let filePath = path.join(dir, fileName)
  fs.writeFile(filePath, content, function(err) {
      if (err) console.log(err);
      else console.log("Created file: ".brightBlue + filePath.green);
  });
}

function createFiles(dir, className) {
  createFile(dir, toFileName("", importFile), createImports(className));
  fileTypes.forEach(fileType => {
    createFile(dir, toFileName(className, fileType), createFileContent(className, fileType))
  });
}

function addImportInParentDir(dir, className) {
  let parentImportFile = path.join(dir, "../", toFileName("", importFile));
  console.log(parentImportFile)
  fs.exists(parentImportFile, (exists) => {
    if (exists) {
      fs.appendFile(parentImportFile, importToImport(className), function (err) {
        if (!err) console.log("Added import to the parent directorys index file!".brightBlue);
      });
    }
  })
}

module.exports = function(classNames) {
  classNames.forEach(className => {
    let newDir = path.join(__dirname, "/scss/classes", className)
    fs.mkdir(newDir, {recursive: true}, (err) => {
      if (err) console.log(err);
      else {
        console.log("Created directory: ".brightBlue + newDir.green);
        createFiles(newDir, className);
        addImportInParentDir(newDir, className);
      }
    })
  });
}
