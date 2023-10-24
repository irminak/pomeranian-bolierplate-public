import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { EventsMetaData } from './Events/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole } from './HitTheMole/router-data';

// import { blockRouterMetaData as blockRouterMetaDataHitTheMole2 } from './HitTheMole2/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  blockRouterMetaDataHitTheMole,

  // blockRouterMetaDataHitTheMole2,
  blockRouterMetaDataMemoGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
