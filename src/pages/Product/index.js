import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdShoppingCart } from 'react-icons/md';
import api from '../../service/api';
import * as CartActions from '../../store/module/cart/actions';

import { Product, ProductInfo, ProductDetails } from './styles';
import indisponivel from '../../assets/images/imagemindisponivel.png';

export default function Products({ match }) {
  const [product, setProduct] = useState([]);
  const [productSize, setProductSize] = useState([]);
  const [selectSKU, setSelectSKU] = useState('');

  const dispatch = useDispatch();

  // Carregando as informações do produto
  useEffect(() => {
    async function loadProduct() {
      // pegando o código do produto passado como parametro na URL e decodificando
      const productCode = decodeURIComponent(match.params.product);

      // Buscando o produto na API
      const response = await api.get(`/products`);

      const data = response.data.find(prod => prod.code_color === productCode);

      setProduct(data);
      setProductSize(data.sizes);
    }

    loadProduct();
  }, []);

  // Adicionando o produto ao carrinho
  function handleAddProduct(id) {
    if (selectSKU === '') {
      toast.error('Tamanho obrigatório');
    } else {
      dispatch(CartActions.addToCartRequest(id, selectSKU));
    }
  }

  function handleSize(skuID) {
    setSelectSKU(skuID);
  }

  return (
    <Product id="container">
      <div id="content">
        <ProductInfo>
          <h1>{product.name}</h1>
          <p>{product.color}</p>
          <div className="img-product">
            {product.image !== '' ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <img src={indisponivel} alt={product.name} />
            )}
          </div>
        </ProductInfo>

        <ProductDetails>
          <div>
            <h2>Price</h2>
            {// condição de preços
            product.actual_price !== product.regular_price ? (
              <>
                <div className="price">
                  <span className="regular_price">{product.regular_price}</span>
                  <span className="actual_price">{product.actual_price}</span>
                </div>
              </>
            ) : (
              <div className="price">
                <span className="actual_price">{product.actual_price}</span>
              </div>
            )}

            <p className="installments">em até {product.installments}</p>

            <div className="sizes">
              <h2>Size</h2>
              <ul>
                {// mapeamento de tamanhos
                productSize.map(sizeP => (
                  <li key={sizeP.sku}>
                    {sizeP.available === true ? (
                      <button
                        type="button"
                        className={sizeP.sku === selectSKU ? 'select' : null}
                        onClick={() => handleSize(sizeP.sku)}
                      >
                        {sizeP.size}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSize(sizeP.sku)}
                        disabled
                      >
                        {sizeP.size}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="description">
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae dolore nesciunt fugit aspernatur eum nemo tempora
                cumque a nam? Aperiam sed expedita enim quidem molestias non et
                fuga mollitia quasi?
              </p>
            </div>

            {product.on_sale === true ? (
              <button
                type="button"
                onClick={() => handleAddProduct(product.code_color)}
              >
                <div>
                  <MdShoppingCart size={16} color="#fff" />
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            ) : (
              <button type="button" disabled>
                <div>
                  <MdShoppingCart size={16} color="#fff" />
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            )}
          </div>
        </ProductDetails>
      </div>
    </Product>
  );
}

Products.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      product: PropTypes.string,
    }),
  }).isRequired,
};
