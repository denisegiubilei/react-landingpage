import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';

import './Sort.css';

const ORDERBY_OPTIONS = [
  { key: 'relevance', value: 'Relevância' },
  { key: 'priceAsc', value: 'Menor Preço' },
  { key: 'priceDesc', value: 'Maior Preço' },
];

const Sort = ({ products, onSort }) => {
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

    onSort(products);
  };

  return (
    <div data-testid="sort" className="sort">
      <label htmlFor="orderby">
        <FontAwesomeIcon icon={faSortAmountUpAlt} size="lg" />
      </label>
      <select
        data-testid="select-orderby"
        id="orderby"
        className="select"
        onChange={sortProducts}
      >
        {ORDERBY_OPTIONS.map((option) => (
          <option value={option.key} key={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
