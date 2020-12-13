import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<ProductCard />);
    expect(container).toBeDefined();
  });
});
