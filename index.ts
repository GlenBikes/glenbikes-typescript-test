import './src/interfaces/string-ext';

import {LogType} from './src/logging';
import {getLogger} from './src/logging';

export {LogType} from './src/logging';
export {getLogger} from './src/logging';
export {ICitation} from './src/interfaces/icitation';
export {Citation} from './src/interfaces/icitation';
export {IRegion} from './src/interfaces/iregion';
export {CitationIds} from './src/citationIds';

export {formatPlate} from './src/util/licensehelper';
export {StatesAndProvinces} from './src/util/licensehelper';

export {CompareNumericStrings} from './src/util/string_utils';

let log = getLogger(LogType.app);

log.info(`Module ${process.env.PROJECT_NAME} loaded.`);
