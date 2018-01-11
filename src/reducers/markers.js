import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer';
import { SET_MARKERS, ADD_MARKER } from 'lib/constants/actions';


const defaultState = Map().set('markers', [{ coordinate: { latitude: 45.524, longitude: -122.672 } }]);

export default createReducer(defaultState, {

  [SET_MARKERS](state, action) {
    return state.set('markers', action.payload);
  },

  [ADD_MARKER](state, action) {
    const markers = state.markers.getState('markers');
    markers.push(action.payload);
    return state.set('markers', markers);
  },

});

/**************************************************************
Here we have a typical reducer that makes use of the helpful
helper function createReducer.
**************************************************************/
