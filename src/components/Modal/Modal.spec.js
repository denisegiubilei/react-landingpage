import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Modal from './Modal';

describe('Modal Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<Modal />);
    expect(container).toBeDefined();
  });
});
