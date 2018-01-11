import { GENERIC_ERROR } from 'lib/constants/actions';

export const genericError = message => ({
  type: GENERIC_ERROR,
  payload: message,
});


/**************************************************************
This basic format is easily repeated

  import { ACTION_TYPE_NAME } from 'lib/constants/actions';

  export const someAction = payload => ({
    type: ACTION_TYPE_NAME,
    payload
  });

Note that payload does not need to be set to payload the same
way it does for message. That's a little ES6! You can still
write ' payload: payload ' if you want.
**************************************************************/
