import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice, replacePrice } from '../../util/format';
import * as CartActions from '../../store/module/cart/actions';
import { Container, ProductTable, Total } from './styles';
import indisponivel from '../../assets/images/imagemindisponivel.png';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + replacePrice(product.actual_price) * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      price: formatPrice(replacePrice(product.actual_price)),
      subtotal: formatPrice(
        replacePrice(product.actual_price) * product.amount
      ),
    }))
  );

  const dispatch = useDispatch();

  // Aumentando quantidade do produto
  function increment(product) {
    dispatch(
      CartActions.updateAmountRequest(product.sizes.sku, product.amount + 1)
    );
  }

  // Diminuindo quantidade do produto
  function decrement(product) {
    dispatch(
      CartActions.updateAmountRequest(product.sizes.sku, product.amount - 1)
    );
  }

  return (
    <Container id="container">
      <ProductTable cellSpacing="0">
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                {product.image !== '' ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <img src={indisponivel} alt={product.name} />
                )}
              </td>
              <td>
                <strong>{product.name}</strong>
                <span className="size">Tamanho: {product.sizes.size}</span>
                <span className="price">{product.price}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#4876ee" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#4876ee" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  // removendo item do carrinho
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.code_color))
                  }
                >
                  <MdDelete size={20} color="#4876ee" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <div className="footer">
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </div>
    </Container>
  );
}
