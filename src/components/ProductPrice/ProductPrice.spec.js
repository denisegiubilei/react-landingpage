import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductPrice from './ProductPrice';

describe('ProductPrice Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<ProductPrice />);
    expect(container).toBeDefined();
  });
});
