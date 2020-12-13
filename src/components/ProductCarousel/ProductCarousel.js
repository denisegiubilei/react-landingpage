import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import { getProductsByCategory } from '../../services/store';
import { ProductCard } from '../ProductCard';

import 'react-multi-carousel/lib/styles.css';
import './ProductCarousel.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ProductCarousel = ({ category, title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then((_products) => {
      setProducts(_products);
    });
  }, []);

  return (
    <div className="carousel-container" data-testid="product-carousel">
      {products.length
        ? (
          <>
            <h2>{title}</h2>
            <Carousel responsive={responsive}>
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </Carousel>
          </>
        ) : null }
    </div>
  );
};
export default ProductCarousel;
