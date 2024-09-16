import React, { useEffect, useState } from 'react';
import ProductListing from "./ProductListing";
import logo from './images/amafli.png';
import './css/main.css';

function Home() {
    const [showProducts, setShowProducts] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Scroll to the product listing section
        const scrollToProducts = () => {
            const productListingElement = document.querySelector('.product-listing-container');
            if (productListingElement) {
                productListingElement.scrollIntoView({ behavior: 'smooth' });
                setScrolled(true);
            }
        };

        // Trigger scroll first
        scrollToProducts();

        // Delay showing the product listing animation
        const timer = setTimeout(() => {
            if (scrolled) {
                setShowProducts(true);
            }
        }, 1000); // Adjust this delay to fit your scrolling speed

        return () => clearTimeout(timer);
    }, [scrolled]);

    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Amafli</h1>
                    <p>Better than Amazon and Flipcart combined</p>
                </div>
            </section>
            <div className={`product-listing-container ${showProducts ? 'show' : ''}`}>
                <ProductListing />
            </div>
        </>
    );
}

export default Home;
