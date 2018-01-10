import setTitle from './set-title';
import fetchTitle from './fetch-title';
import setConnectivity from './set-connectivity';
import { genericError } from './errors';

const ActionCreators = {
  setTitle,
  fetchTitle,
  setConnectivity,
  genericError,
};

export default ActionCreators;

/**************************************************************
The action index.js file

import actionOne from './actionOne';
import actionTwo from './actionTwo';
import actionThree from './actionThree';
import { actionType1 } from './severalActions';

const ActionCreators = {
  actionOne,
  actionTwo,
  actionThree,
  actionType1,
};

export default ActionCreators;

Here all of our actions are packaged together into a bundle
called ActionCreators. This will later be bound to components,
giving each component access to every action we list here.
**************************************************************/
