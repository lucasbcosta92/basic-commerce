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

      > h1 {
        font-family: Poppins;
        font-size: 55.8px;
        font-weight: 700;
        line-height: 80px;
        margin-bottom: 8px;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    > div {
      .title-page {
        h1 {
          font-size: 38px;
          line-height: 60px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
`;

export const ProductList = styled.ul`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 7px;
  list-style: none;

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

  @media screen and (min-width: 601px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
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

export const Notfound = styled.div`
  display: block;
  width: 100%;

  #container {
    padding-right: 0;
  }

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 17px;
    color: #808080;
  }
`;
