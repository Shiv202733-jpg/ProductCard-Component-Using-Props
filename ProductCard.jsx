// src/ProductCard.js
import React from 'react';
import './ProductCard.css'; // We'll create this file for styling

/**
 * A reusable component to display product information.
 * @param {object} props - The properties passed to the component.
 * @param {string} props.name - The name of the product.
 * @param {string} props.price - The price of the product.
 * @param {string} props.status - The stock status of the product.
 */
function ProductCard({ name, price, status }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default ProductCard;