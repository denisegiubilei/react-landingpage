import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Sort from './Sort';

describe('Sort Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<Sort />);
    expect(container).toBeDefined();
  });
});
