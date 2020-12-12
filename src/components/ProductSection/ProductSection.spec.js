import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductSection from './ProductSection';

describe('ProductsSection Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<ProductSection />);
    expect(container).toBeDefined();
  });

  it('should render main section', () => {
    const { getByTestId } = render(<ProductSection />);
    expect(getByTestId('product-section')).toBeInTheDocument();
  });
});
