import React from 'react';

import { Image } from '../Image';
import { ProductPrice } from '../ProductPrice';

import './ProductQuickView.css';

const installments = (price) => price && { count: 3, value: price / 3 };

const ProductQuickView = ({ product }) => (
  <main className="quickview">
    <div className="main-img-container">
      <Image src={product?.image} alt={product?.title} />
    </div>
    <div className="product-info">
      <h1>{product?.title}</h1>
      <p>{product.description}</p>
      <div>
        <ProductPrice
          price={product?.price}
          oldPrice={product?.oldPrice}
          installments={installments(product?.price)}
        />
        <button type="button" className="addtocart button">Comprar</button>
      </div>
    </div>
  </main>
);

export default ProductQuickView;
