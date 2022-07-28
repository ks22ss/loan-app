import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './routes/Home';
global.ResizeObserver = require('resize-observer-polyfill')

test('renders welcome page', () => {
  render(<Home />, {wrapper: MemoryRouter});
  const linkElement = screen.getByText("立即網上申請可享高達$18,000現金獎");
  expect(linkElement).toBeInTheDocument();  
});

test('renders chart page', () => {
  render(<Home />, {wrapper: MemoryRouter});
  const loanTotalTitle = screen.getByText("每年物業按揭申請貸款總額(百萬)");
  const loanRequestTitle = screen.getByText("每年物業按揭申請次數");
  expect(loanTotalTitle).toBeInTheDocument();
  expect(loanRequestTitle).toBeInTheDocument();
});



