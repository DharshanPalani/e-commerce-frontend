import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Header from './Header'
import PurchasePage from './PurchasePage'
import OrderPage from './OrderPage'
import './css/main.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Redirect root to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* Define routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/purchase/:uniqueId/:productId" element={<PurchasePage />} /> {/* Add the PurchasePage route */}
          <Route path="/order/:uniqueId/:productId" element={<OrderPage />}/>
          {/* <Route path="/invoice" element={<InvoiceBackend />} /> */}
          {/* Catch-all for undefined routes */}
          <Route path="*" element={
            <div>
              <h2>404 Not Found</h2>
              <Link to="/home">Go to Home</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
