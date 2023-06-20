import { all, fork } from 'redux-saga/effects';

import cartSaga from './cart';
import catalogSaga from './catalog';

function* rootSaga(): Generator {
  yield all([fork(cartSaga), fork(catalogSaga)]);
}

export default rootSaga;
