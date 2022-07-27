import React from 'react';
import { render } from '@testing-library/react';
import { Footer, FooterColTypeContact, FooterColTypeLink } from './Footer';

export const FOOTER_COLS: Array<FooterColTypeContact | FooterColTypeLink> = [
  {
    name: 'link_col',
    title: 'PCA Skin',
    links: [
      {
        label: 'PCA Skin Professional',
        path: 'https://www.pcaskinpro.com/professionals-landing',
        target: '_blank',
      },
      { label: 'Trade Shows', path: '/', target: '_blank' },
    ],
  },
  {
    name: 'link_col',
    title: 'Customer Service',
    links: [
      {
        label: 'Returns',
        path: 'https://www.pcaskinpro.com/about-pca/returns-exchanges',
        target: '_blank',
      },
    ],
  },
  {
    name: 'link_col',
    title: 'Useful Links',
    links: [
      {
        label: 'Do Not Sell My Personal Information',
        path: 'https://www.pcaskinpro.com/do-not-sell-my-personal-information',
        target: '_blank',
      },
    ],
  },
  {
    name: 'social_col',
    title: '',
    social_handles: [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/groups/PCASKINSkinCareProfessionals/',
      },
    ],
    contact: '1-800-266-5428',
    office_schedule: [{ day: 'Fri', time: '8:30 AM — 5:30 PM ET' }],
  },
];

describe('Footer', () => {
  test('Footer component coloumns extract', () => {
    const { getByText } = render(
      <Footer footerCols={FOOTER_COLS} footerLogoUrl={''} />
    );
    const foorterColoumns = getByText(/PCA Skin Professional/i);
    expect(foorterColoumns).toBeDefined();
  });

  test('All Footer ul coloumns render', () => {
    const { container } = render(
      <Footer footerCols={FOOTER_COLS} footerLogoUrl={''} />
    );
    const footerCols = container.querySelectorAll('ul');
    expect(footerCols).toHaveLength(FOOTER_COLS.length);
  });
  test('All footer li list', () => {
    const { container } = render(
      <Footer footerCols={FOOTER_COLS} footerLogoUrl={''} />
    );
    const footerCols = container.querySelectorAll('li');
    expect(footerCols).toHaveLength(8);
  });
});
