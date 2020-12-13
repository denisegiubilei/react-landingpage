import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NewsletterForm from './NewsletterForm';

describe('NewsletterForm Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<NewsletterForm />);
    expect(container).toBeDefined();
  });
});
