import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductCarousel from './ProductCarousel';

describe('ProductCarousel Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<ProductCarousel />);
    expect(container).toBeDefined();
  });
});
