import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import solanaWeb3 from '@solana/web3.js'; // Importa la biblioteca de Solana

ReactDOM.render(
  <React.StrictMode>
    <App solanaWeb3={solanaWeb3} /> {/* Pasa la instancia de SolanaWeb3 como prop */}
  </React.StrictMode>,
  document.getElementById('root')
);
