import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders h1 text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/especial para você/i);
  expect(linkElement).toBeInTheDocument();
});
