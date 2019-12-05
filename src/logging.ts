const log4js = require('log4js'),
      chokidar = require('chokidar');

//require('app-module-path').addPath(__dirname);
debugger;
// Log files
log4js.configure(__dirname + '/../../config/log4js.json');
var log = log4js.getLogger();

export enum LogType {
  app = 1,
  err,
  test,
  last_dm,
  last_mention
}

const watcher = chokidar.watch(__dirname + '/../../config/log4js.json', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  awaitWriteFinish: true
});

export function getLogger(log_type: LogType) {
  switch(log_type) {
    case LogType.app:
      return log4js.getLogger("default");
      break;
      
    case LogType.err:
      return log4js.getLogger("_error");
      break;
      
    case LogType.test:
      return log4js.getLogger("_test");
      break;
      
    case LogType.last_dm:
      return log4js.getLogger("_lastdm");
      break;
      
    case LogType.last_mention:
      return log4js.getLogger("_lastmention");
      break;
      
    default:
      throw new Error(`Unknown log type ${log_type}.`);
  }
}

function reloadlog(reason: string) {
  log.info(`Reloading log config due to config file ${reason}.`);
  log4js.shutdown( () => {
    log4js.configure(__dirname + '/../../config/log4js.json');
    log = log4js.getLogger();
  });
}

watcher
  .on('add', (path: string) => reloadlog(`add of ${path}`))
  .on('change', (path: string) => reloadlog(`change of ${path}`));

