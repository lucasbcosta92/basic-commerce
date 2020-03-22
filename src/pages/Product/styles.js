import styled from 'styled-components';
import { darken } from 'polished';

export const Product = styled.div`
  #content {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1023px) {
    #container {
      padding-right: 0;
    }

    #content {
      display: block;
      text-align: center;
    }
  }
`;

export const ProductInfo = styled.div`
  display: block;
  width: 60%;

  h1 {
    font-size: 33px;
    font-weight: bold;
    letter-spacing: -1px;
    color: #222;
    margin: 0;
  }

  p {
    color: #4876ee;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .img-product {
    width: 100%;
    text-align: center;

    img {
      width: 260px;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: block;
  width: 40%;
  justify-content: flex-start;
  padding-top: 17px;

  div {
    display: block;

    h2 {
      font-size: 16px;
      font-weight: 500;
      color: #222;
      margin: 0;
    }

    .price {
      font-size: 25px;
      font-weight: 500;
      margin-top: 5px;
      display: flex;

      .regular_price {
        color: #808080;
        margin-right: 10px;
        text-decoration: line-through;
        opacity: 0.5;
      }

      .actual_price {
        color: #222;
        font-weight: 600;
      }
    }

    .installments {
      color: #222;
      font-size: 16px;
      font-weight: 400;
      margin: 3px 0 30px;
    }

    ul {
      display: flex;
      margin: 20px 0;

      li {
        list-style: none;
        margin-right: 10px;

        button {
          padding: 10px 15px;
          background: #eee;
          color: #666;
          font-size: 14px;
          font-weight: bold;
          border: 1px solid #c1c1c1;
          border-radius: 60px;
          overflow: hidden;

          &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
          }

          &:hover {
            background: #4876ee;
            color: #fff;
          }
        }

        .select {
          background: #4876ee;
          border: 1px solid #4876ee;
          color: #fff;
        }
      }
    }

    .description {
      p {
        padding-top: 14px;
        color: #808080;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 30px;
      }
    }

    > button {
      background: #4876ee;
      color: #fff;
      border: 0;
      overflow: hidden;
      margin-top: 30px;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.3, '#4876ee')};
      }

      > div {
        display: flex;
        align-items: center;
        padding: 20px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: 600;
        padding: 0 20px;
      }

      &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;

    #container {
      padding-right: 0;
    }

    .price {
      justify-content: center;
    }

    ul {
      justify-content: center;
    }

    button {
      margin: 0 auto;
    }
  }
`;
