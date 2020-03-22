import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../../service/api';
import { ProductList, Header, Notfound } from './styles';
import indisponivel from '../../../assets/images/imagemindisponivel.png';

export default function Search({ match }) {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  // Buscando produtos na api
  useEffect(() => {
    async function loadProducts() {
      const searching = decodeURIComponent(match.params.search);
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        name: product.name,
      }));

      const searcProd = searching.toUpperCase();
      const prodFilter = data.filter(prod => prod.name.indexOf(searcProd) > -1);

      setProducts(prodFilter);
      setSearchProducts(searching);
    }
    loadProducts();
  }, [products]);

  return (
    <>
      <Header>
        <div id="container">
          <div className="title-page">
            <h1>Results for "{searchProducts}"</h1>
            <span>{products.length} results found.</span>
          </div>
        </div>
      </Header>

      {products.length !== 0 ? (
        <ProductList id="container">
          {products.map(product => (
            <li key={product.code_color}>
              <Link to={`/product/${encodeURIComponent(product.code_color)}`}>
                {product.image !== '' ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <img src={indisponivel} alt={product.name} />
                )}
                <strong>{product.name}</strong>
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
                    <span className="actual_price">{product.actual_price}</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ProductList>
      ) : (
        <Notfound id="container">
          <h1>Sorry, no results were found.</h1>
          <p>Please try again with different keywords.</p>
        </Notfound>
      )}
    </>
  );
}

Search.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      search: PropTypes.string,
    }),
  }).isRequired,
};
