import { TITLE_FETCH } from 'lib/constants/actions';

export default () => ({
  type: TITLE_FETCH,
});

/**************************************************************
Here things get real basic

import { ACTION_TYPE_NAME } from 'lib/constants/actions';

export default () => ({
  type: ACTION_TYPE_NAME
});

Here the action doesn't event take a name, because it doesn't
really have to. Note with no payload there is nothing to pass
in as an argument.
**************************************************************/
