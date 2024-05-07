import React, { useState } from 'react';

function BuyPixelForm() {
  const [color, setColor] = useState('');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBuyPixel = () => {
    // Lógica para comprar un píxel con el color seleccionado
  };

  return (
    <div>
      <h2>Buy a Pixel</h2>
      <label htmlFor="color">Choose a color:</label>
      <input type="color" id="color" value={color} onChange={handleColorChange} />
      <button onClick={handleBuyPixel}>Buy Pixel</button>
    </div>
  );
}

export default BuyPixelForm;
