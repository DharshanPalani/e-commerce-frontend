import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/BuyNowButtonStyle.css'; // Add a new CSS file for custom styling

function generateRandomID() {
  let randomNumber = '';
  for (let i = 0; i < 15; i++) {
    randomNumber += Math.floor(Math.random() * 10).toString();
  }
  return randomNumber;
}

function BuyNowButton({ productId, isAvailable }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAvailable) {
      const uniqueId = generateRandomID();
      navigate(`/purchase/${uniqueId}/${productId}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`buy-now-button ${isAvailable ? 'available' : 'unavailable'}`}
      disabled={!isAvailable}
    >
      {isAvailable ? 'Buy Now' : 'Currently Unavailable'}
    </button>
  );
}

export default BuyNowButton;
