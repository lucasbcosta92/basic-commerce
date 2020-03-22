import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  position: relative;

  .top-bar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;

    .top-bar-fixed {
      background: #fff;
      width: 100%;
      height: 55px;
      padding-top: 27.5px;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    }

    #container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 25px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  position: relative;

  &:hover {
    opacity: 0.7;
  }

  > div {
    text-align: center;
    margin-right: 10px;
    position: relative;

    span {
      position: absolute;
      left: -8px;
      border-radius: 10px;
      padding: 2px 7px;
      background: #4876ee;
      font-size: 12px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  width: 50%;

  > div {
    display: flex;
    align-items: center;
    width: 100%;

    input {
      text-align: center;
      width: 100%;
      border: 0;
      height: 55px;
    }
  }
`;
