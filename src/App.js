import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

// importando o reactotron e suas conexões
import './config/reactotronConfig';

// Estilos
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

// history
import history from './service/history';

// redux
import { store, persistor } from './store';

function App() {
  return (
    // Provider - Deixa disponivel o store (método criado em store/index) da aplicação para todos os componentes
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
