import produce from 'immer';

// adicionando produto ao carrinho
export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      // draft já é a cópia do estado
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.code_color === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.sizes.sku === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
