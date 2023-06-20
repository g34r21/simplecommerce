import { all, call, put, takeEvery } from 'redux-saga/effects';

import Products from '~/data/products';
import {
  loadProducts,
  loadProductsError,
  loadProductsSuccess,
} from '~/store/slices/catalog';
import type { SagaReturn } from '~/store/types';

function* loadProductsSaga(): SagaReturn {
  try {
    const products = (yield call(() => Products.getAll())) as ReturnType<
      typeof Products.getAll
    >;

    yield put(loadProductsSuccess(products));
  } catch (error) {
    yield put(loadProductsError(error.message));
  }
}

function* catalogSaga(): Generator {
  yield all([takeEvery(loadProducts, loadProductsSaga)]);
}

export default catalogSaga;
