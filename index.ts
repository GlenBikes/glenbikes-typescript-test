import {LogType} from './src/logging';
import {getLogger} from './src/logging';
import {ICitation} from './src/interfaces/icitation';
import {IRegion} from './src/interfaces/iregion';
import {CitationIds} from './src/citationIds';

export {LogType} from './src/logging';
export {getLogger} from './src/logging';
export {ICitation} from './src/interfaces/icitation';
export {IRegion} from './src/interfaces/iregion';
export {CitationIds} from './src/citationIds';

let log = getLogger(LogType.app);

log.info(`Module ${process.env.PROJECT_NAME} loaded.`);
