import React from 'react';

import { ProductCard } from '../ProductCard';

import './ProductList.css';

const ProductList = ({ products = [] }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </div>
);

export default ProductList;
