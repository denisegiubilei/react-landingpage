import React from 'react'
import { Image } from '../Image'
import { ProductPrice } from '../ProductPrice'
import './ProductCard.css'

const ProductCard = ({ product }) => (
  <article id={product.id} className="card">
    <a rel="bookmark">
      <Image 
        src={product.imageUrl} 
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <ProductPrice
        price={product.price}
        oldPrice={product.oldPrice}
        installments={product.installments}
      />
    </a>
    <button className="addtocart button">Comprar</button>
  </article> 
)

export default ProductCard

