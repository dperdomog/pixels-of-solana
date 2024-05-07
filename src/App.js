import React, { useState } from 'react';
import './App.css';

function App({ solanaWeb3 }) {
  const [pixels, setPixels] = useState(Array(10000).fill('white')); // Estado para almacenar los colores de los píxeles

  // Función para comprar un píxel
  const comprarPixel = async (posicion) => {
    try {
      const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));
      const wallet = solanaWeb3.Wallet.fromKeypair(solanaWeb3.Keypair.generate());

      // Lógica para enviar una transacción
      const transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: solanaWeb3.SystemProgram.programId,
          lamports: 1000000000, // Ejemplo: 1 SOL
        })
      );

      // Firmar y enviar la transacción
      const signature = await solanaWeb3.sendAndConfirmTransaction(
        connection,
        transaction,
        [wallet]
      );

      console.log('Transacción completada:', signature);

      // Actualizar visualmente el píxel comprado
      setPixels((prevPixels) => {
        const newPixels = [...prevPixels];
        newPixels[posicion] = 'black';
        return newPixels;
      });
    } catch (error) {
      console.error('Error al comprar el píxel:', error);
    }
  };

  return (
    <div className="App">
      <h1>Solana Pixel Page</h1>
      <div className="pixel-grid">
        {pixels.map((color, index) => (
          <div
            key={index}
            className="pixel"
            style={{ backgroundColor: color }}
            onClick={() => comprarPixel(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
