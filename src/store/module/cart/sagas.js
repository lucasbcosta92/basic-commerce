import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../service/api';
import history from '../../../service/history';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id, skuID }) {
  // VERIFICANDO SE O PRODUTO ADICIONADO JÁ NÃO EXISTE NO CARRINHO
  const productExists = yield select(state =>
    state.cart.find(p => p.code_color === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    const findSizes = yield select(state =>
      state.cart.find(p => p.sizes.sku === skuID)
    );

    if (findSizes) {
      yield put(updateAmountSuccess(skuID, amount));
      history.push('/cart');
    } else {
      const response = yield call(api.get, `/products`);
      const findProd = response.data.find(prod => prod.code_color === id);

      const skusMap = findProd.sizes.map(sizes => ({
        ...sizes,
      }));

      const sizeSelection = skusMap.find(skuCode => skuCode.sku === skuID);

      const data = {
        ...findProd,
        sizes: sizeSelection,
        amount: 1,
      };

      history.push('/cart');

      yield put(addToCartSuccess(data));
    }
  } else {
    const response = yield call(api.get, `/products`);

    const findProd = response.data.find(prod => prod.code_color === id);

    const skusMap = findProd.sizes.map(sizes => ({
      ...sizes,
    }));

    const sizeSelection = skusMap.find(skuCode => skuCode.sku === skuID);

    const data = {
      ...findProd,
      sizes: sizeSelection,
      amount: 1,
    };

    history.push('/cart');

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
