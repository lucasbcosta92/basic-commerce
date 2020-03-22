import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../service/api';
import history from '../../../service/history';
import { addToCartSuccess, updateAmountSuccess } from './actions';

// * - é basicamente um async - yield - é o await
function* addToCart({ id, skuID }) {
  // VERIFICANDO SE O PRODUTO ADICIONADO JÁ NÃO EXISTE NO CARRINHO
  const productExists = yield select(state =>
    state.cart.find(p => p.code_color === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  // se o produto já existir no carrinho, só adiciona +1
  if (productExists) {
    const findSizes = yield select(state =>
      state.cart.find(p => p.sizes.sku === skuID)
    );

    if (findSizes) {
      yield put(updateAmountSuccess(skuID, amount));
      history.push('/cart');
    }
    //
    else {
      // CHAMANDO A API PARA PEGAR OS DADOS DO PRODUTO PAR ADIÇÃO AO CARRINHO
      const response = yield call(api.get, `/products`);
      // adicionando a quantidade e formatando o valor do item pelo SAGA e não pelo reducer
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
      // redirecionando para o carrinho
      history.push('/cart');
      // chamando a action que adiciona o produto ao carrinho
      yield put(addToCartSuccess(data));
    }
  }
  // caso não exista, adiciona um novo item
  else {
    // CHAMANDO A API PARA PEGAR OS DADOS DO PRODUTO PAR ADIÇÃO AO CARRINHO
    const response = yield call(api.get, `/products`);
    // adicionando a quantidade e formatando o valor do item pelo SAGA e não pelo reducer
    const findProd = response.data.find(prod => prod.code_color === id);
    // encontrando a SKU
    const skusMap = findProd.sizes.map(sizes => ({
      ...sizes,
    }));

    const sizeSelection = skusMap.find(skuCode => skuCode.sku === skuID);

    const data = {
      ...findProd,
      sizes: sizeSelection,
      amount: 1,
    };
    // redirecionando para o carrinho
    history.push('/cart');
    // chamando a action que adiciona o produto ao carrinho
    yield put(addToCartSuccess(data));
  }
}

// VALIDA E ALTERA A QUANTIDADE DENTRO DO CARRINHO DE COMPRAS
function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
