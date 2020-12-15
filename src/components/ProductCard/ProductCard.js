import React, { useState } from 'react';

import { Image } from '../Image';
import { Modal } from '../Modal';
import { ProductPrice } from '../ProductPrice';
import { ProductQuickView } from '../ProductQuickView';

import './ProductCard.css';

const ProductCard = ({ product, enableQuickView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openQuickView = () => (
    enableQuickView && setIsOpen(true)
  );

  const closeQuickView = () => setIsOpen(false);

  return (
    <>
      <article id={product?.id} className="card">
        <div role="main" onClick={openQuickView}>
          <Image src={product?.image} alt={product?.title} />
          <h3>{product?.title}</h3>
          <ProductPrice
            price={product?.price}
            oldPrice={product?.oldPrice}
            installments={product?.installments}
          />
        </div>
        <button type="button" className="addtocart button">Comprar</button>
      </article>
      <Modal open={isOpen} onClose={closeQuickView}>
        <ProductQuickView product={product} />
      </Modal>
    </>
  );
};

export default ProductCard;
