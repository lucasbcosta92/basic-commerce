import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../../service/api';
import { ProductList, Header, Products, Filter } from './styles';
import indisponivel from '../../../assets/images/imagemindisponivel.png';
import { ordenationASC, repeatDelete } from '../../../util/format';

export default function Filters({ match }) {
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState([]);
  const [colorName, setColorName] = useState([]);
  const [ordenationColor, setOrdenationColor] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const filterColor = decodeURIComponent(match.params.filter);
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        color: product.color,
      }));

      const prodFilter = data.filter(prod => prod.color === filterColor);
      const temp = data.map(prodColor => ({ cor: prodColor.color }));
      const orderColor = ordenationASC(temp);
      const repeatColor = repeatDelete(orderColor);

      setProducts(data);
      setColor(prodFilter);
      setColorName(filterColor);
      setOrdenationColor(repeatColor);
    }
    loadProducts();
  }, [color]);

  function handleSelectFilter() {
    document.getElementById('post-1').checked = false;
  }

  return (
    <>
      <Header>
        <div id="container">
          <div className="title-page">
            <h1>{colorName}</h1>
          </div>
        </div>
      </Header>

      <Products id="container">
        <div id="bar-top">
          <div className="location">
            <span>Home > Shop</span>
          </div>
          <div className="products-count">
            <span>
              Mostrando 1 - {color.length} de {color.length} resultados
            </span>
          </div>
        </div>

        <div id="filters-and-products">
          <Filter>
            <div>
              <input type="checkbox" className="checkbox" id="post-1" />
              <label htmlFor="post-1" className="color-strong">
                Colors
              </label>
              <ul>
                {ordenationColor.map(product => (
                  <li key={product.cor}>
                    <Link
                      to={`/products/filter/color/${encodeURIComponent(
                        product.cor
                      )}`}
                      onClick={() => handleSelectFilter()}
                    >
                      {product.cor}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Filter>
          <ProductList>
            {color.map(product => (
              <li key={product.code_color}>
                <Link to={`/product/${encodeURIComponent(product.code_color)}`}>
                  {product.image !== '' ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <img src={indisponivel} alt={product.name} />
                  )}
                  <div>
                    <strong>{product.name}</strong>
                  </div>
                  {product.actual_price !== product.regular_price ? (
                    <>
                      <div className="discount_percentage">
                        <span>{product.discount_percentage}</span>
                      </div>
                      <div className="price">
                        <span className="regular_price">
                          {product.regular_price}
                        </span>
                        <span className="actual_price">
                          {product.actual_price}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="price">
                      <span className="actual_price">
                        {product.actual_price}
                      </span>
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ProductList>
        </div>
      </Products>
    </>
  );
}

Filters.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }).isRequired,
};
