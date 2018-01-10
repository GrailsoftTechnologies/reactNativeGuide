import { call, put, takeLatest } from 'redux-saga/effects';

import { TITLE_FETCH } from 'lib/constants/actions';
import Api from 'lib/api';
import setTitle from 'actions/set-title';
import { genericError } from 'actions/errors';

const executeFetchTitle = () => {
  const root = 'https://jsonplaceholder.typicode.com';
  const params = '/posts/1';
  return Api.get(root + params).then((val) => {
    console.log(val);
    return val.title.slice(0, 8);
  });
};

function* fetchTitle(action) {
  try {
    const title = yield call(executeFetchTitle);
    yield put(setTitle(title));
  } catch (error) {
    console.warn(error);
    yield put(genericError('Failed to fetch Title'));
  }
}

export default function* watchFetchTitle() {
  yield takeLatest(TITLE_FETCH, fetchTitle);
}

/**************************************************************
Here we have an example of a saga. This saga is broken down
into three parts; you'll find every saga you write will have
at least two. The first part is the actual API call, which can
also be imported from a separate file, or written within the
next part. This second part is the saga action, which
encapsulates the async request. The third part is the saga
watcher. This particular watcher is watching for the
TITLE_FETCH action. Upon 'seeing' it, it will execute the saga
action, fetchTitle.
**************************************************************/
