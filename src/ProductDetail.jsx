import React from 'react';
import { useParams } from 'react-router-dom';
import ProductLists from './data/products.json';
import './css/ProductDetailStyle.css';
import BuyNowButton from './BuyNowButton';

function ProductDetail() {
  const { id } = useParams();
  const product = ProductLists.find(p => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container product-detail-container">
      <h1 className="product-detail-title">{product.name}</h1>
      <div className="row">
        <div className="col-md-6 product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="col-md-6 product-detail-content">
          <div className="product-detail-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-detail-details">
            <h2>Details</h2>
            <ul>
              <li><strong>Price:</strong> ₹{product.price.toFixed(2)}</li>
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>Subcategory:</strong> {product.subcategory}</li>
              <li><strong>Color:</strong> {product.color}</li>
              <li><strong>Size:</strong> {product.size}</li>
              <li><strong>Material:</strong> {product.material}</li>
              <li><strong>Brand:</strong> {product.brand}</li>
            </ul>
          </div>
          <BuyNowButton productId={product.id} isAvailable={product.availability} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
