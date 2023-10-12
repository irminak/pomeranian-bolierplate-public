import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndStrings } from './EmptyValueAndStrings/router-data';
import { blockRouterMetaData as blockRouterMetaDataStringMethods } from './StringMethods/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsArrayBasics } from './ExerciseJsArrayBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataObjectsAndDate } from './Objects/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsDateTime } from './JsDateTime/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsExtension } from './JsExtension/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsSetTimeout } from './JsSetTimeout/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsSetInterval } from './JsSetInterval/router-data';
import { blockRouterMetaData as blockRouterMetaDataVanishString } from './VanishString/router-data';
import { blockRouterMetaData as blockRouterMetaDataTimer } from './Timer/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataEmptyValuesAndStrings,
  blockRouterMetaDataStringMethods,
  blockRouterMetaDataExerciseJsArrayBasics,
  blockRouterMetaDataObjectsAndDate,
  blockRouterMetaDataJsDateTime,
  blockRouterMetaDataJsExtension,
  blockRouterMetaDataJsSetTimeout,
  blockRouterMetaDataJsSetInterval,
  blockRouterMetaDataVanishString,
  blockRouterMetaDataTimer,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
