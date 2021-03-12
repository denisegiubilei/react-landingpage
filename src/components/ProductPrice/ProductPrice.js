import React from 'react';
import { Installments } from './Installments';
import { currencyFormat } from '../Utils';
import './ProductPrice.css';

const ProductPrice = ({ price, oldPrice, installments = {} }) => {
  const hasDiscount = oldPrice > price;

  return (
    <>
      <p>
        { hasDiscount && <span>De: </span> }
        <strike data-testid="product-oldprice">
          { currencyFormat(oldPrice) }
        </strike>
      </p>
      <p>
        {/* <span>Por: </span> */}
        <span data-testid="product-price" className="price">
          { currencyFormat(price) }
        </span>
      </p>
      <p className="installments">
        <Installments installments={installments} />
      </p>
    </>
  );
};

export default ProductPrice;
