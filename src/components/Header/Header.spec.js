import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });
});
