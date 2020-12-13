import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Footer from './Footer';

describe('Footer Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<Footer />);
    expect(container).toBeDefined();
  });
});
