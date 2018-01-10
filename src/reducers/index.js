import { combineReducers } from 'redux';

import title from 'reducers/title';
import connectivity from 'reducers/connectivity';

export const reducers = { title, connectivity };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}


/**************************************************************
Here's where we combine our reducers into one, in the reducers'
index.js. First the reducers are imported and turned into a
single object called reducers. These are combined with the
navReducer, a reducer for react-navigation that is being passed
in as an argument, within combineReducers. The result is
returned to navigator.js.
**************************************************************/
