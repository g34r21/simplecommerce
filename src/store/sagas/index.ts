import { all, fork } from 'redux-saga/effects';

import catalogSaga from './catalog';

function* rootSaga(): Generator {
  yield all([fork(catalogSaga)]);
}

export default rootSaga;
