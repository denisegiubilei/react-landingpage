import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Image from './Image';

describe('Image Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<Image />);
    expect(container).toBeDefined();
  });
});
