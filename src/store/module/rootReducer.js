// Essa arquitetura é utilizada para quando desejamos utilizar mais de um reducer na aplicação
// basta importá-lo e adicioná-lo no combineReducers
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});
