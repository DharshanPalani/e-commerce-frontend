import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { useLocation, useParams } from 'react-router-dom';
import ProductData from './data/products.json'; // Import your product data
import './css/InvoiceStyle.css';

const InvoiceBackend = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Extract form data
  const { uniqueId, productId } = useParams(); // Get productId from URL
  const [product, setProduct] = useState(null);

  const calculateTotal = () => {
    const subtotal = product ? product.price : 0; // Calculate subtotal from product price
    const tax = subtotal * 0.1; // Example tax rate
    const shippingCharges = 5.00; // Example shipping charges
    return {
      subtotal,
      tax,
      total: subtotal + tax + shippingCharges
    };
  };

  const totals = calculateTotal();

  useEffect(() => {
    // Find product details based on productId
    const productDetails = ProductData.find(p => p.id === productId);
    setProduct(productDetails);
  }, [productId]);

  useEffect(() => {
    const generateInvoiceImage = async () => {
      try {
        const canvas = await html2canvas(document.getElementById('invoice'), {
          useCORS: true,
          scrollY: -window.scrollY,
          backgroundColor: null,
          scale: 2,
          logging: true,
          allowTaint: true
        });
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'invoice.png';
        link.click();
      } catch (error) {
        console.error('Error generating invoice image:', error);
      }
    };

    if (product) {
      generateInvoiceImage();
    }
  }, [product]);

  if (!product) return <p>Loading...</p>; // Show loading state if product is not available

  return (
    <div className="invoice-box" id="invoice">
      <table cellPadding="0" cellSpacing="0">
        <tr className="top">
          <td colSpan="4">
            <table>
              <tr>
                <td className="title">
                  <h2>INVOICE</h2>
                </td>
                <td>
                  Date: {new Date().toLocaleDateString()}<br />
                  Invoice #{`${uniqueId}`}<br />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr className="information">
          <td colSpan="2">
            <table>
              <tr>
                <td>
                  Bill To:<br />
                  {formData?.firstName} {formData?.lastName}<br />
                  {formData?.address1}<br />
                  {formData?.address2}<br />
                  {formData?.city}, {formData?.state} {formData?.zip}<br />
                  {formData?.mobile}<br />
                  {formData?.email}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr className="heading">
          <td>Description</td>
          <td>Quantity</td>
          <td>Unit Price</td>
          <td>Amount</td>
        </tr>
        <tr className="item">
          <td>{product.name}</td>
          <td>1</td>
          <td>₹{product.price.toFixed(2)}</td>
          <td>₹{product.price.toFixed(2)}</td>
        </tr>
        <tr className="total">
          <td colSpan="3">Subtotal:</td>
          <td>₹{totals.subtotal.toFixed(2)}</td>
        </tr>
        <tr className="total">
          <td colSpan="3">Tax Rate:</td>
          <td>{(0.1 * 100).toFixed(0)}%</td>
        </tr>
        <tr className="total">
          <td colSpan="3">Shipping Charges:</td>
          <td>₹{5.00.toFixed(2)}</td>
        </tr>
        <tr className="total">
          <td colSpan="3"><strong>TOTAL:</strong></td>
          <td><strong>₹{totals.total.toFixed(2)}</strong></td>
        </tr>
      </table>
    </div>
  );
};

export default InvoiceBackend;
