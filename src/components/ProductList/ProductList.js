import React from 'react';
import { useIsMobile } from '../Utils/windowSize';
import { ProductCard } from '../ProductCard';

import './ProductList.css';

const ProductList = ({ products = [] }) => {
  const isMobile = useIsMobile();
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} enableQuickView={!isMobile} />
      ))}
    </div>
  );
};

export default ProductList;
