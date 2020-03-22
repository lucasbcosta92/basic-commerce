import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px 'Poppins', 'Roboto', sans-serif;
  }

  #container{
    max-width: 1020px;
    padding: 0 20px 50px;
    margin: 0 auto;
  }

  button{
    cursor: pointer;
  }

  .Toastify__toast--error {
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
 }
`;
