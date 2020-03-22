import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px !important;
  background: #fff;
  border-radius: 4px;

  .footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #4876ee;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.3, '#4876ee')};
      }
    }
  }
  @media screen and (max-width: 800px) {
    #container {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  margin-top: 30px;

  thead tr {
    height: 40px;

    th {
      color: #222;
      text-align: left;
      font-weight: 600;
    }
  }

  tbody {
    padding: 12px;
    vertical-align: middle; /* CONTEUDO ALINHADO AO CENTRO */

    tr {
      height: 116px;
    }

    tr:nth-child(odd) {
      background-color: #f9f9f9;
    }
    tr:nth-child(even) {
      background-color: #eee;
    }

    td {
      border: 0px;
    }
  }

  img {
    height: 100px;
    margin: 8px 0 8px 8px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: bold;
  }

  .price {
    font-size: 18px;
  }

  .size {
    font-size: 14px;
    font-weight: normal;
    color: #808080;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  @media screen and (max-width: 800px) {
    strong {
      font-size: 13px;
    }

    .price {
      font-size: 13px;
    }

    .size {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 600px) {
    tbody {
      tr {
        height: 140px;
      }
    }

    div {
      input {
        padding: 6px 0 6px 6px;
        width: 40px;
      }
    }

    img {
      height: 90px;
      margin: 25px 0 25px 8px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
