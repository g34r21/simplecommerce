import type { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import Products from '~/data/products';
import {
  getCartProductById,
  getCartProducts,
  getCartTotal,
} from '~/store/selectors/cart';
import { getProductById } from '~/store/selectors/catalog';
import type { IUpdateCartProductQuantity } from '~/store/slices/cart';
import {
  addProductToCart,
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart,
  updateCartError,
  updateCartProductQuantity,
  updateCartSuccess,
} from '~/store/slices/cart';
import type { SagaReturn } from '~/store/types';

function* increaseCartProductQuantitySaga({
  payload: productId,
}: PayloadAction<string>): SagaReturn {
  const cartProduct = (yield select(
    getCartProductById(productId)
  )) as ReturnType<ReturnType<typeof getCartProductById>>;

  if (!cartProduct) {
    yield put(addProductToCart(productId));
    return;
  }

  const newQuantity = cartProduct.quantity + 1;

  yield put(
    updateCartProductQuantity({
      productId,
      newQuantity,
    })
  );
}

function* decreaseCartProductQuantitySaga({
  payload: productId,
}: PayloadAction<string>): SagaReturn {
  const cartProduct = (yield select(
    getCartProductById(productId)
  )) as ReturnType<ReturnType<typeof getCartProductById>>;

  if (!cartProduct || cartProduct.quantity < 1) {
    return;
  }

  const newQuantity = cartProduct.quantity - 1;

  if (newQuantity === 0) {
    yield put(removeProductFromCart(productId));
    return;
  }

  yield put(
    updateCartProductQuantity({
      productId,
      newQuantity,
    })
  );
}

function* addProductToCartSaga({
  payload: productId,
}: PayloadAction<string>): SagaReturn {
  const cartProduct = (yield select(
    getCartProductById(productId)
  )) as ReturnType<ReturnType<typeof getCartProductById>>;

  const cartTotal = (yield select(getCartTotal)) as ReturnType<
    typeof getCartTotal
  >;

  if (cartProduct) {
    return;
  }

  const cartProducts = (yield select(getCartProducts)) as ReturnType<
    typeof getCartProducts
  >;

  const updatedCartProducts = { ...cartProducts };

  const product = (yield call(() => Products.getById(productId))) as ReturnType<
    typeof Products.getById
  >;

  if (!product) {
    yield put(updateCartError("Product doesn't exists"));
    return;
  }

  const { price } = product;

  const newTotal = cartTotal + price;

  Object.assign(updatedCartProducts, {
    [productId]: {
      ...product,
      subtotal: price,
      quantity: 1,
    },
  });

  yield put(
    updateCartSuccess({
      products: updatedCartProducts,
      total: newTotal,
    })
  );
}

function* removeProductFromCartSaga({
  payload: productId,
}: PayloadAction<string>): SagaReturn {
  const cartProduct = (yield select(
    getCartProductById(productId)
  )) as ReturnType<ReturnType<typeof getCartProductById>>;

  const cartTotal = (yield select(getCartTotal)) as ReturnType<
    typeof getCartTotal
  >;

  if (!cartProduct) {
    return;
  }

  const cartProducts = (yield select(getCartProducts)) as ReturnType<
    typeof getCartProducts
  >;

  const updatedCartProducts = { ...cartProducts };

  const newTotal = cartTotal - cartProduct.subtotal;

  delete updatedCartProducts[productId];

  yield put(
    updateCartSuccess({
      products: updatedCartProducts,
      total: newTotal,
    })
  );
}

function* updateCartProductQuantitySaga({
  payload: { productId, newQuantity },
}: PayloadAction<IUpdateCartProductQuantity>): SagaReturn {
  const cartProducts = (yield select(getCartProducts)) as ReturnType<
    typeof getCartProducts
  >;

  const product = (yield select(getProductById(productId))) as ReturnType<
    ReturnType<typeof getProductById>
  >;

  const cartProduct = (yield select(
    getCartProductById(productId)
  )) as ReturnType<ReturnType<typeof getCartProductById>>;

  if (!product || !cartProduct) {
    yield put(updateCartError("Product doesn't exists"));
    return;
  }

  const { price } = product;

  const updatedCartProducts = { ...cartProducts };

  const updatedCartProduct = { ...cartProduct };

  const cartTotal = (yield select(getCartTotal)) as ReturnType<
    typeof getCartTotal
  >;

  const newSubtotal = newQuantity * price;
  const newTotal = cartTotal - cartProduct.subtotal + newSubtotal;

  const updatedProduct = Object.assign(updatedCartProduct, {
    subtotal: newSubtotal,
    quantity: newQuantity,
  });

  Object.assign(updatedCartProducts, {
    [productId]: updatedProduct,
  });

  yield put(
    updateCartSuccess({
      products: updatedCartProducts,
      total: newTotal,
    })
  );
}

function* cartSaga(): Generator {
  yield all([takeEvery(addProductToCart, addProductToCartSaga)]);
  yield all([takeEvery(removeProductFromCart, removeProductFromCartSaga)]);
  yield all([
    takeEvery(updateCartProductQuantity, updateCartProductQuantitySaga),
  ]);
  yield all([
    takeEvery(increaseCartProductQuantity, increaseCartProductQuantitySaga),
  ]);
  yield all([
    takeEvery(decreaseCartProductQuantity, decreaseCartProductQuantitySaga),
  ]);
}

export default cartSaga;
