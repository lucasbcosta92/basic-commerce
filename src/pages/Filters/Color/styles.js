import styled from 'styled-components';

export const Header = styled.div`
  background-color: #f7ebf5;
  height: 180px;
  margin-bottom: 50px;

  #container {
    padding-bottom: 0 !important;
  }

  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .title-page {
      display: block;
      text-align: center;
      width: 100%;

      h1 {
        font-family: Poppins;
        font-size: 55.8px;
        font-weight: 700;
        line-height: 80px;
        margin-bottom: 8px;
      }

      span {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        text-transform: capitalize;
        letter-spacing: 0;
        line-height: 30px;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 600px) {
    > div {
      .title-page {
        h1 {
          font-size: 45px;
          line-height: 70px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Products = styled.div`
  display: block;

  #bar-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid #eee;
  }
  .location,
  .products-count {
    font-size: 13px;
    color: #808080;
  }

  #filters-and-products {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1023px) {
    #filters-and-products {
      display: block;
    }

    #bar-top {
      margin-bottom: 25px;
    }
  }

  @media screen and (max-width: 600px) {
    #filters-and-products {
      display: block;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  width: 25%;

  div {
    display: block;
    width: 100%;

    .checkbox {
      display: none;
    }

    .color-strong {
      cursor: auto;
      font-size: 15px;
      color: #808080;
      font-weight: 600;
    }

    ul {
      display: block;
      width: 100%;
      margin-top: 25px;
    }

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: #000;
        font-size: 14px;
        font-weight: 600;
        line-height: 25px;
        text-transform: uppercase;

        &:hover {
          color: #4876ee;
        }
      }
    }
  }

  @media screen and (max-width: 1023px) {
    display: block;
    width: 100%;

    div {
      border-bottom: 1px solid #eee;

      ul {
        display: block;
        width: 100%;
        margin: 12.5px 0;
        opacity: 0;
        max-height: 0;
        font-size: 0;
      }

      .checkbox {
        display: none;
      }

      .checkbox:checked ~ ul {
        opacity: 1;
        font-size: inherit;
        max-height: 999em;
        margin-bottom: 25px;
      }

      .checkbox ~ .color-strong:before {
        content: '+ ';
      }

      .checkbox:checked ~ .color-strong:before {
        content: '- ';
      }

      .color-strong {
        cursor: pointer;
        font-size: 15px;
        color: #808080;
        font-weight: 600;
      }
    }
  }
`;

export const ProductList = styled.ul`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7px;
  list-style: none;
  width: 75%;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    position: relative;
    border-radius: 10px;
    margin-bottom: 25px;

    &:hover {
      width: calc(100% + 20px);
      margin-bottom: 0px;
      z-index: 99;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    }

    img {
      width: 100%;
      align-self: center;
      max-width: 250px;
    }

    /* > - faz com que os estilos só funcionem dentro da li */
    strong {
      font-size: 15px;
      line-height: 20px;
      color: #333;
    }

    .price {
      font-size: 14px;
      font-weight: 500;
      margin-top: 10px;
      display: flex;

      .regular_price {
        color: #808080;
        margin-right: 10px;
        text-decoration: line-through;
        opacity: 0.5;
      }

      .actual_price {
        color: #222;
      }
    }

    .discount_percentage {
      display: flex;
      position: absolute;
      background-color: #ff0000;
      border-radius: 4px;
      top: 30px;
      left: 30px;

      span {
        color: #fff;
        font-size: 14px;
        padding: 0 10px;
        font-weight: 600;
      }
    }

    a {
      text-decoration: none;
      color: #111;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-top: 25px;

    #container {
      padding-right: 0;
    }

    li {
      margin-bottom: 0px;
      text-align: center;

      &:hover {
        width: 100%;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
      }

      img {
        /* max-width: 100%; */
      }

      div {
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
    width: 100%;

    #container {
      padding-right: 0;
    }

    li {
      margin-bottom: 0px;

      &:hover {
        width: 100%;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
