import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('App component should have header Element', () => {
    const { getByRole } = render(<App />, { wrapper: BrowserRouter });
    const headerElement = getByRole('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('App component should have  Footer Element', () => {
    const { getByRole } = render(<App />, { wrapper: BrowserRouter });
    const footerElement = getByRole('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('App component navigate to order route', () => {
    const route = '/orders';
    const { getByText } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    const orderContent = getByText('Order History');
    expect(orderContent).toBeInTheDocument();
  });
});
