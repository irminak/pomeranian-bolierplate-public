import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndStrings } from './EmptyValueAndStrings/router-data';
import { blockRouterMetaData as blockRouterMetaDataStringMethods } from './StringMethods/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsArrayBasics } from './ExerciseJsArrayBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrayBasics } from './ArrayBasics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataEmptyValuesAndStrings,
  blockRouterMetaDataStringMethods,
  blockRouterMetaDataExerciseJsArrayBasics,
  blockRouterMetaDataArrayBasics,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
