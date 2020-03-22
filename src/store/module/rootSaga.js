// juntar todos os sagas em um único arquivo, assim como o rootReducer
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
