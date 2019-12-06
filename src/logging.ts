/**
 *  Standard logging for HowsMyDriving modules.
 *
 *  It is not required to use this. But if you do, your plugin module's 
 *  logs will be integrated with the infrastructure logs and all the 
 *  other plugin logs.
**/
const log4js = require('log4js'),
      chokidar = require('chokidar');

/**
 *  These are the log files that are tracked.
**/
export enum LogType {
  app = 1,
  err,
  test,
  last_dm,
  last_mention
}

// Load the config.
log4js.configure(__dirname + '/../../config/log4js.json');

// Create default logger to log that our module was loaded and for
// config update changes.
var log = log4js.getLogger();

/**
 * Monitor the log4js config file and reloading log instances if the file changes.
**/
const watcher = chokidar.watch(__dirname + '/../../config/log4js.json', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  awaitWriteFinish: true
});

/**
 * Get log instance of the specified LogType.
 *
 * Params:
 *   log_type: Type of log to return logger for.
 *
 * Returns:
 *   Instance of log4js logger of specified type.
 *
 * Exceptions:
 *   Throws Error on invalid log_type.
**/
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

/**
 * Reload log4js (when config changes).
 *
 * Params:
 *   reason: Reason why logs are being reloaded. This is logged before
 *           reloading log4js.
 *
 * TODO: Test to make sure this works. Do existing loggers still work? Do
 *       they update to the new log level?
**/
function reloadlog(reason: string) {
  log.info(`Reloading log config due to config file ${reason}.`);
  log4js.shutdown( () => {
    log4js.configure(__dirname + '/../../config/log4js.json');
    log = log4js.getLogger();
  });
}

// Handle the change/add events for the log4js config file.
watcher
  .on('add', (path: string) => reloadlog(`add of ${path}`))
  .on('change', (path: string) => reloadlog(`change of ${path}`));

