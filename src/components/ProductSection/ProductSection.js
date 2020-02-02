import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard'
import { products as getProducts } from '../../services/DummyService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import './ProductSection.css'

const ProductSection = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(products => setProducts(products))
  });

  return (
    <section className="product-section">
      <h2 className="title">
        As melhores ofertas para o seu bichinho! <FontAwesomeIcon icon={faPaw} />
      </h2>
      <div className="container">
        { products.map(product => <ProductCard product={product} />) }
      </div>
    </section>
  )
}

export default ProductSection

