import {
  all,
} from 'redux-saga/effects';
import blogSaga from './blog';

function* rootSagas() {
  yield all([
    blogSaga(),
  ]);
}

export default rootSagas;
