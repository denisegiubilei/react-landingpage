import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  afterEach(cleanup);

  it('should render component', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it('should render h1 text', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/especial para você/i);
    expect(linkElement).toBeInTheDocument();
  });
});
