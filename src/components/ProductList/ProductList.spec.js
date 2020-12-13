import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductList from './ProductList';

describe('ProductList Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<ProductList />);
    expect(container).toBeDefined();
  });
});
