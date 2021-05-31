class Logger {
  static create(...file) {
    file.forEach(file => {
      console.log('CREATE '.green + file);
    })
    return Logger;
  }

  static comiled(duration) {
    console.log('COMPILED'.green + ' in ' + duration + 'ms');
    return Logger;
  }

  static entry(file) {
    console.log('ENTRY  '.brightBlue + file);
    return Logger;
  }

  static change(file) {
    console.log('CHANGE '.yellow + file);
  }

  static error(message) {
    console.log('ERROR  '.red + message);
    return Logger;
  }

  static info(message) {
    console.log(message);
    return Logger;
  }

  static separate() {
    return Logger.info('/***********************************************/');
  }

  static space(amount = 1) {
    for (let i = 0 ; i < amount ; i++) {
      console.log();
    }
    return Logger;
  }
}

module.exports = Logger;
