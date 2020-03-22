// CHAMANDO O REDUX-SAGA PARA VALIDAÇÃO
export function addToCartRequest(id, skuID) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
    skuID,
  };
}

// Adicionando o produto ao carrinho
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

// removendo produto do carrinho
export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

// CHAMANDO O REDUX-SAGA PARA VALIDAÇÃO DE ESTOQUE DO PRODUTO
export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

// alteração de quantidade de produto
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
