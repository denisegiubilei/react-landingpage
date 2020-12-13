import React, { useEffect, useState } from 'react';

import { getProducts } from '../../services/store';
import { ProductList } from '../../components/ProductList';
import { ProductCarousel } from '../../components/ProductCarousel';
import { Loader } from '../../components/Loader';
import { Sort } from '../../components/Sort';

import './ProductSection.css';

const ProductSection = () => {
  const PRODUCTS_PER_PAGE = 16;

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [endOfResults, setEndOfResults] = useState(false);

  useEffect(() => {
    getProducts().then((_products) => {
      setProducts(_products);
      setCurrentProducts(_products.slice(0, PRODUCTS_PER_PAGE));
      setLoading(false);
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

  const handleSort = (sortedProducts) => {
    setCurrentProducts(sortedProducts.slice(0, PRODUCTS_PER_PAGE));
    setCurrentPageNumber(0);
  };

  return (
    <section data-testid="product-section" className="product-section">
      <h2 data-testid="product-section-title" className="title">
        Aproveite as melhores ofertas!
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sort products={products} onSort={handleSort} />
          <ProductList products={currentProducts} loading={loading} />
          {!endOfResults && (
            <input
              type="button"
              className="button"
              value="Ver mais produtos!"
              onClick={loadMoreProducts}
            />
          )}
        </>
      )}
      <section className="widgets-section" data-testid="widgets-section">
        <ProductCarousel category="electronics" title="Eletrônicos selecionados para você!" />
        <ProductCarousel category="women clothing" title="Escolha o presente que cabe no seu bolso :)" />
      </section>
    </section>
  );
};

export default ProductSection;
