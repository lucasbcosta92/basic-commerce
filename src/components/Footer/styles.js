import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background: #222;
  margin-top: 50px;
  text-align: center;

  div {
    display: block;
    margin: 35px 0;

    .logo {
      color: #fff;
      font-weight: bold;
      font-size: 30px;
    }

    .midias ul {
      display: flex;
      margin: 20px 0;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        width: 50px;
        height: 50px;
        border: 1px solid #fff;
        margin: 0 10px;
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
          background: #4876ee;
          color: #fff;
          border: 1px solid #4876ee;
        }

        i {
          color: #fff;
          font-size: 20px;
        }
      }
    }

    span {
      color: #fff;
      font-size: 15px;
    }
  }
`;
