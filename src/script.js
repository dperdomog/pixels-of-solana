// public/script.js

// Inicializar Web3
if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  } else {
    console.log('Web3 provider not found. Please install MetaMask or use a Web3 compatible browser.');
  }
  
  // Configurar la conexión a la red de Solana
  const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));
  
  // Dirección del contrato inteligente (debe ser reemplazada por la dirección real del contrato)
  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  
  // ABI (interfaz del contrato inteligente)
  const contractABI = [
    // Define aquí los métodos del contrato inteligente
  ];
  
  // Crear una instancia del contrato inteligente
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  
  // Evento de clic en un píxel
  document.addEventListener('DOMContentLoaded', async () => {
    const pixelGrid = document.querySelector('.pixel-grid');
    
    // Generar los píxeles
    for (let i = 0; i < 10000; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.id = `pixel-${i}`;
      pixel.addEventListener('click', () => comprarPixel(i));
      pixelGrid.appendChild(pixel);
    }
  });
  
  // Función para comprar un píxel
  async function comprarPixel(posicion) {
    try {
      // Lógica para comprar un píxel
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      const result = await contract.methods.comprarPixel(posicion).send({ from: address, value: web3.utils.toWei('1', 'ether') });
      console.log(result);
      
      // Actualizar el color del píxel comprado
      const pixel = document.getElementById(`pixel-${posicion}`);
      pixel.style.backgroundColor = 'black';
    } catch (error) {
      console.error('Error al comprar el píxel:', error);
    }
  }
  