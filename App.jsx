// src/App.js
import React from 'react';
import ProductCard from './ProductCard';
import './App.css'; // General styles for the app layout

function App() {
  // Array of product data
  const products = [
    { name: 'Wireless Mouse', price: '25.99', status: 'In Stock' },
    { name: 'Keyboard', price: '45.5', status: 'Out of Stock' },
    { name: 'Monitor', price: '199.99', status: 'In Stock' }
  ];

  return (
    <div className="app-container">
      <h1>Products List</h1>
      <div className="product-list">
        {/* Map over the products array and render a ProductCard for each item */}
        {products.map((product) => (
          <ProductCard
            key={product.name} // The 'key' prop is important for list rendering
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;