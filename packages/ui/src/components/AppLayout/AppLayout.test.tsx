import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppLayout } from './AppLayout';

describe('AppLayout', () => {
  let Header: any;
  let Footer: any;
  let Content: any;
  beforeEach(() => {
    Header = React.createElement('div', {}, <>header element</>);
    Footer = React.createElement('div', {}, <>Footer element</>);
    Content = React.createElement('div', {}, <>Content element</>);
  });

  it('should initially render header and footer', () => {
    const { getByText } = render(
      <AppLayout header={Header} footer={Footer} content={Content} />
    );
    const headerContent = getByText(/header/i);
    const footerContent = getByText(/Footer/i);
    expect(headerContent).toBeDefined();
    expect(footerContent).toBeDefined();
  });
});
