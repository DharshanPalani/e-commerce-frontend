import React from 'react';
import { useNavigate } from 'react-router-dom';
import watchProduct from './images/watchIMG.jpeg';
import ProductLists from './data/products.json';
import './css/ItemCardStyle.css';

function ItemCard() {
  const navigate = useNavigate();

  const productView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {ProductLists.map(product => (
        <button 
          onClick={() => productView(product.id)} 
          className="item-card-container" 
          key={product.id}
        >
          <img src={product.image} className="product-image" alt={product.name}/>
          <h5>{product.name}</h5>
          <p>{product.description}</p>
        </button>
      ))}
    </>
  );
}

export default ItemCard;
