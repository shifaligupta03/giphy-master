import { all, fork } from "redux-saga/effects";
import RandomSaga from './random';
import SearchSaga from './search';

export default function* () {
  yield all([
    fork(RandomSaga),
    fork(SearchSaga)
  ]);
}
