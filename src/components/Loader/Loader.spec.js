import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Loader from './Loader';

describe('Loader Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<Loader />);
    expect(container).toBeDefined();
  });
});
