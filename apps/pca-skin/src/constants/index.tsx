// Todos: Seperate the Types:

import type { SideMenuItemType } from 'ui';
import { Orders, Invoice } from 'ui/dist/icons';
import { ORDER_TABLE_COLUMNS, INVOICES_TABLE_COLUMNS } from './COLUMNS';
export interface MenuItemType {
  label: string;
  path: string;
  target?: string;
  dropdownItems: Array<{
    label?: string;
    path?: string;
    target?: string;
  }>;
}

export interface FooterColTypeLink {
  name: string;
  title: string;
  links: Array<{
    label: string;
    path: string;
    target: string;
    emphasize?: boolean;
  }>;
}

export interface FooterColTypeContact {
  name: string;
  title: string;
  contact: string;
  social_handles: Array<{
    name: string;
    url: string;
  }>;
  office_schedule: Array<{
    day: string;
    time: string;
  }>;
}

export interface SideMenuHeaders {
  heading: string;
  subHeading: string;
}

export const NAV_ITEMS: Array<MenuItemType> = [
  {
    label: 'PCA Skin Pro',
    path: 'https://www.pcaskinpro.com/professionals-landing',
    dropdownItems: [],
    target: '_blank',
  },
  {
    label: 'PCA Skin Academy',
    path: 'https://pcaskinacademy.com/?_ga=2.30708984.619320982.1656426678-396132660.1654721324',
    dropdownItems: [],
    target: '_blank',
  },
  {
    label: 'Customer Support',
    path: 'https://www.pcaskinpro.com/customer-support',
    dropdownItems: [],
    target: '_blank',
  },
  {
    label: 'Marketing Material',
    path: '/',
    dropdownItems: [
      { label: '#Link 1', path: '/', target: '_self' },
      { label: '#Link 2', path: '/', target: '_self' },
      { label: '#Link 3', path: '/', target: '_self' },
    ],
  },
];

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
      {
        label: 'PCA Skin Academy',
        path: 'https://pcaskinacademy.com/?_ga=2.30708984.619320982.1656426678-396132660.1654721324',
        target: '_blank',
      },
      {
        label: 'Customer Service',
        path: 'https://www.pcaskinpro.com/customer-support',
        target: '_blank',
      },
      {
        label: 'International',
        path: 'https://www.pcaskinpro.com/about-pca/pca-international',
        target: '_blank',
      },
      {
        label: 'Careers',
        path: 'https://www.pcaskinpro.com/about-pca/careers',
        target: '_blank',
      },
      {
        label: 'Our Story',
        path: 'https://www.pcaskinpro.com/product-excellence',
        target: '_blank',
      },
      {
        label: 'Science',
        path: 'https://www.pcaskinpro.com/about-pca/science',
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
        label: 'Contact Us',
        path: 'https://www.pcaskinpro.com/about-pca/contact-us',
        target: '_blank',
      },
      {
        label: 'FAQ',
        path: 'https://www.pcaskinpro.com/about-pca/faqs',
        target: '_blank',
      },
      {
        label: 'Shipping',
        path: 'https://www.pcaskinpro.com/about-pca/shipping-terms',
        target: '_blank',
      },
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
        label: 'Terms of Use',
        path: 'https://www.pcaskinpro.com/terms-and-conditions',
        target: '_blank',
      },
      {
        label: 'Privacy Policy',
        path: 'https://www.pcaskinpro.com/privacy_policy',
        target: '_blank',
      },
      {
        label: 'Cookie Consent Tool',
        path: 'https://www.pcaskinpro.com/cookie-policy',
        target: '_blank',
      },
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
      { name: 'instagram', url: 'https://www.instagram.com/pcaskin' },
      { name: 'linkedin', url: 'https://www.linkedin.com/company/pca-skin/' },
    ],
    contact: '1-800-266-5428',
    office_schedule: [
      { day: 'Mon — Thu', time: '8:30 AM — 6:30 PM ET' },
      { day: 'Fri', time: '8:30 AM — 5:30 PM ET' },
    ],
  },
];
export interface TableLabelType {
  title: string;
  description: string;
}

export interface TableConfigType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any;
  sorting: boolean;
  pagination: boolean;
}

export const ORDER_TABLE_LABELS: TableLabelType = {
  title: 'Order History',
  description: 'View and track your orders from the last 6 months',
};

export const ORDER_TABLE_CONFIG: TableConfigType = {
  columns: ORDER_TABLE_COLUMNS,
  sorting: false,
  pagination: true,
};

export const INVOICE_TABLE_LABELS: TableLabelType = {
  title: 'Invoice History',
  description: 'Select the invoices to view PDF',
};

export const INVOICE_TABLE_CONFIG: TableConfigType = {
  columns: INVOICES_TABLE_COLUMNS,
  sorting: false,
  pagination: true,
};

export const SIDEMENU_ITEMS: Array<SideMenuItemType> = [
  {
    title: 'Invoices',
    path: '/invoices',
    icon: <Invoice className="h-4 w-4" />,
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <Orders className="h-4 w-4" />,
  },
];

export const SIDEMENU_HEADERS = {
  heading: 'Account',
  subHeading: 'Hi Dr. Patricia Long!',
};
