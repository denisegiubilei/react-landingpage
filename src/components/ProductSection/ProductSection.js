import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from '../ProductCard';
import { getProducts } from '../../services/store';

import './ProductSection.css';

const ProductSection = () => {
  const PRODUCTS_PER_PAGE = 16;

  const ORDERBY_OPTIONS = [
    { key: 'relevance', value: 'Relevância' },
    { key: 'priceAsc', value: 'Menor Preço' },
    { key: 'priceDesc', value: 'Maior Preço' },
  ];

  const [products, setProducts] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [endOfResults, setEndOfResults] = useState(false);

  useEffect(() => {
    getProducts().then((_products) => {
      setProducts(_products);
      setCurrentProducts(_products.slice(0, PRODUCTS_PER_PAGE));
    });
  }, []);

  const showProductsByPage = (page) => {
    const firstProductIndex = PRODUCTS_PER_PAGE * page;
    const lastProductIndex = firstProductIndex + PRODUCTS_PER_PAGE;
    const productsInPage = products.slice(firstProductIndex, lastProductIndex);
    setCurrentProducts([...currentProducts, ...productsInPage]);
    setCurrentPageNumber(page);
    if (lastProductIndex >= products.length) setEndOfResults(true);
  };

  const loadMoreProducts = () => {
    const nextPage = currentPageNumber + 1;
    showProductsByPage(nextPage);
  };

  const sortProducts = (e) => {
    const sortOption = e.target.value;
    switch (sortOption) {
      case 'priceAsc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'relevance':
        products.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }
    setCurrentProducts(products.slice(0, PRODUCTS_PER_PAGE));
    setCurrentPageNumber(0);
  };

  return (
    <section data-testid="product-section" className="product-section">
      <h2 data-testid="product-section-title" className="title">
        Aproveite as melhores ofertas!
      </h2>
      <div data-testid="product-section-filters" className="filters">
        <label htmlFor="orderby">
          <FontAwesomeIcon icon={faSortAmountUpAlt} size="lg" />
        </label>
        <select id="orderby" className="select" onChange={sortProducts}>
          {ORDERBY_OPTIONS.map((option) => (
            <option value={option.key} key={option.key}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        {currentProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      {!endOfResults && (
        <input
          type="button"
          className="button"
          value="Ver mais produtos!"
          onClick={loadMoreProducts}
        />
      )}
    </section>
  );
};

export default ProductSection;
