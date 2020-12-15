import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductQuickView from './ProductQuickView';

describe('ProductCard Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<ProductQuickView />);
    expect(container).toBeDefined();
  });
});
