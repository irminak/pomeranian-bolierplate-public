import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { EventsMetaData } from './Events/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole } from './HitTheMole/router-data';

// import { blockRouterMetaData as blockRouterMetaDataHitTheMole2 } from './HitTheMole2/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataToDoWithServer } from './ToDoWithServer/router-data';
import { blockRouterMetaData as blockRouterMetaDataFormExercise } from './FormExercise/router-data';
import { blockRouterMetaData as blockRouterMetaDataRTLTesting } from './RTLTesting/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  blockRouterMetaDataHitTheMole,

  // blockRouterMetaDataHitTheMole2,
  blockRouterMetaDataMemoGame,
  blockRouterMetaDataToDoWithServer,
  blockRouterMetaDataFormExercise,
  blockRouterMetaDataRTLTesting,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
