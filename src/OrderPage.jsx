import React from 'react';
import InvoiceBackend from "./InvoiceBackend";
import './css/OrderPageStyle.css'; // Import the updated CSS file

function OrderPage() {
    return (
        <>
        <div className="order-page-container">
            <div className="thank-you-message">
                <h1>Thank You for Your Purchase!</h1>
                <p>Your order has been successfully placed. You will receive a confirmation email shortly.</p>
                <p>If you have any questions, feel free to contact our support team.</p>
            </div>
            <div className="invoice-container">
                <InvoiceBackend />
            </div>
        </div>
        </>
        
    );
}

export default OrderPage;
