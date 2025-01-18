// src/components/Products/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard'

// Placeholder product data - you'll fetch this from a database later
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  type: 'digital' | 'physical'; // Add a type property
}

const products: Product[] = [
  { id: 1, name: "Awesome T-Shirt", price: 20, imageUrl: "tshirt.jpg", type: 'physical' },
  { id: 2, name: "Ebook: Web Dev Guide", price: 15, imageUrl: "ebook.jpg", type: 'digital' },
  // ... more products
]

;

const ProductList: React.FC = () => {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;