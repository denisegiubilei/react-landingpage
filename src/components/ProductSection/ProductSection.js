import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard'
import { products as getProducts } from '../../services/DummyService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import './ProductSection.css'

const ProductSection = () => {

  const PRODUCTS_PER_PAGE = 16

  const ORDERBY_OPTIONS = [
    { key: 'relevance', value: "Relevância" },
    { key: 'priceAsc', value: "Menor Preço" },
    { key: 'priceDesc', value: "Maior Preço" }
  ]

  const [products, setProducts] = useState([])
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [currentProducts, setCurrentProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(products => {
        setProducts(products)
        setCurrentProducts(products.slice(0, PRODUCTS_PER_PAGE))
      })
  }, [])

  const showProductsByPage = page => {
    const firstProductIndex = PRODUCTS_PER_PAGE * page
    const lastProductIndex = firstProductIndex + PRODUCTS_PER_PAGE
    const productsInPage = products.slice(firstProductIndex, lastProductIndex )
    setCurrentProducts([...currentProducts, ...productsInPage])
  }
  
  const loadMoreProducts = () => {
    const nextPage = currentPageNumber + 1
    showProductsByPage(nextPage)
    setCurrentPageNumber(nextPage)
  }

  const sortProducts = (e) => {
    const sortOption = e.target.value
    switch (sortOption) {
      case 'priceAsc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'priceDesc':
        products.sort((a, b) => b.price - a.price)
        break
      case 'relevance':
        products.sort((a, b) => a.id - b.id)
        break
    }
    setCurrentProducts(products.slice(0, PRODUCTS_PER_PAGE))
    setCurrentPageNumber(0)
  }

  return (
    <section className="product-section">
      <h2 className="title">
        As melhores ofertas para o seu bichinho! <FontAwesomeIcon icon={faPaw} />
      </h2>
      <div className="filters">
        <label htmlFor="orderby">Ordenar por: </label>
        <select id="orderby" className="select" onChange={sortProducts}>
          {ORDERBY_OPTIONS.map(option => (
            <option value={option.key}>{option.value}</option>
          ))}
        </select>
      </div>
      <div className="container">
        { currentProducts.map((product, index) => <ProductCard product={product} key={index} />) }
      </div>
      <input type="button" className="button" value="Ver mais produtos!" onClick={loadMoreProducts}/>
    </section>
  )
}

export default ProductSection

