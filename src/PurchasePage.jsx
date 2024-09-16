import React, { useState, useEffect } from 'react';
import ProductData from './data/products.json';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from 'react-router-dom';
import './css/PurchasePageStyle.css'; // Import the new CSS file

function PurchasePage() {
  const { uniqueId, productId } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    // Find the product based on the productId
    const foundProduct = ProductData.find(p => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to invoice page with form and product data
    navigate(`/order/${uniqueId}/${productId}`, { state: { formData, product } });
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <h1 className="animated-title">ORDER PLACED ON: {`${new Date().toLocaleDateString()}`}</h1>
        <h5 className="animated-subtitle">Order ID: {`${uniqueId}`}</h5>
      </div>
      <div className="container">
        <form className="row g-3 animated-form" onSubmit={handleSubmit}>
          <div className="input-group mb-3 animated-input-group">
            <span className="input-group-text">First and last name</span>
            <input type="text" id="firstName" aria-label="First name" className="form-control animated-input" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            <input type="text" id="lastName" aria-label="Last name" className="form-control animated-input" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
          </div>
          <div className="col-sm-3">
            <label htmlFor="mobile" className="visually-hidden">Mobile number</label>
            <input type="tel" id="mobile" className="form-control animated-input" placeholder="Mobile no" value={formData.mobile} onChange={handleChange} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="email" className="visually-hidden">E-mail</label>
            <input type="email" id="email" className="form-control animated-input" placeholder="E-mail" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col-12">
            <label htmlFor="address1" className="form-label">Address</label>
            <input type="text" id="address1" className="form-control animated-input" placeholder="1234 Main St" value={formData.address1} onChange={handleChange} />
          </div>
          <div className="col-12">
            <label htmlFor="address2" className="form-label">Address 2</label>
            <input type="text" id="address2" className="form-control animated-input" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" className="form-control animated-input" value={formData.city} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <select id="state" className="form-select animated-select" value={formData.state} onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input type="text" id="zip" className="form-control animated-input" value={formData.zip} onChange={handleChange} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn animated-button">Place order</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PurchasePage;
