import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import { ProductList, Header, Products, Filter } from './styles';
import indisponivel from '../../assets/images/imagemindisponivel.png';
import { ordenationASC, repeatDelete } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [ordenationColor, setOrdenationColor] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        color: product.color,
      }));

      const temp = data.map(color => ({ cor: color.color }));
      const orderColor = ordenationASC(temp);
      const repeatColor = repeatDelete(orderColor);

      setProducts(data);
      setOrdenationColor(repeatColor);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Header>
        <div id="container">
          <div className="title-page">
            <h1>All Products</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
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
              Mostrando 1 - {products.length} de {products.length} resultados
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
                    >
                      {product.cor}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Filter>
          <ProductList>
            {products.map(product => (
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
