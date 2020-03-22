import React from 'react';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import history from '../../service/history';

import { Container, Cart, Logo, Search } from './styles';

export default function Header() {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const search = document.querySelector('input').value;
      history.push(`/search/${encodeURIComponent(search)}`);
      document.querySelector('input').value = '';
    }
  }
  // acessando os dados de um reducer em um componente que não tem ligação direta com o mesmo
  const cartSize = useSelector(state => state.cart.length); // nome do reducer - pegando a quantidade de itens no cart
  return (
    <Container>
      <div className="top-bar">
        <div className="top-bar-fixed">
          <div id="container">
            <Logo to="/">Co.</Logo>
            <Search>
              <div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search here..."
                  onKeyDown={e => handleKeyDown(e)}
                />
              </div>
            </Search>
            <Cart to="/cart">
              <MdShoppingBasket size={27} color="#000" />
              <div>
                <span>{cartSize}</span>
              </div>
            </Cart>
          </div>
        </div>
      </div>
    </Container>
  );
}
