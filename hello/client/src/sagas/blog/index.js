import {
  all, takeEvery, select,
  call, put, delay,
  takeLatest,
} from 'redux-saga/effects';
import {
  blog_FETCH_START,
  fetchblogSuccess,
  getblogList,



  fetchblogInfoSuccess
} from '../../reducers/blog';

function* fetchblogList(action) {
  const res = yield call(fetch, 'https://pokeapi.co/api/v2/blog');
  const json = yield call([res, 'json']);
  const { results, prev, next } = json;

  // yield delay(2500);
  yield put(fetchblogSuccess(results, next, prev));
}

function* watchFetchblogList() {
  yield takeEvery(blog_FETCH_START, fetchblogList);
}


function* blogSaga() {
  yield all([
    watchFetchblogList(),
  ]);
}

export default blogSaga;
