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
    label: 'EltaMD.com',
    path: 'https://eltamd.com/',
    dropdownItems: [],
    target: '_blank',
  },
  {
    label: 'EltaMD ProCart',
    path: 'https://cart.eltamdpro.com/',
    dropdownItems: [],
    target: '_blank',
  },
  { label: 'Customer Support', path: '/', dropdownItems: [], target: '_blank' },
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
    title: 'EltaMD',
    links: [
      { label: 'EltaMD.com', path: 'https://eltamd.com/', target: '_blank' },
      {
        label: 'EltaMD ProCart',
        path: 'https://cart.eltamdpro.com/',
        target: '_blank',
      },
      { label: 'Customer Service', path: '/', target: '_blank' },
      { label: 'International', path: '/', target: '_blank' },
      {
        label: 'Careers',
        path: 'https://eltamd.com/pages/careers',
        target: '_blank',
      },
      {
        label: 'Our Story',
        path: 'https://eltamd.com/pages/our-story-new-visid',
        target: '_blank',
      },
      { label: 'Science', path: '/', target: '_blank' },
    ],
  },
  {
    name: 'link_col',
    title: 'Customer Service',
    links: [
      {
        label: 'Contact Us',
        path: 'https://eltamd.com/pages/contact-us',
        target: '_blank',
      },
      { label: 'FAQ', path: 'https://eltamd.com/pages/faqs', target: '_blank' },
      {
        label: 'Shipping',
        path: 'https://eltamd.com/policies/shipping-policy',
        target: '_blank',
      },
      {
        label: 'Returns',
        path: 'https://eltamd.com/policies/refund-policy',
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
        path: 'https://eltamd.com/pages/terms-of-use',
        target: '_blank',
      },
      {
        label: 'Privacy Policy',
        path: 'https://eltamd.com/policies/privacy-policy',
        target: '_blank',
      },
      { label: 'Cookie Consent Tool', path: '/', target: '_blank' },
      {
        label: 'Do Not Sell My Personal Information',
        path: 'https://eltamd.com/pages/do-not-sell-my-personal-information',
        target: '_blank',
      },
    ],
  },
  {
    name: 'social_col',
    title: '',
    social_handles: [
      { name: 'facebook', url: 'https://www.facebook.com/EltaMD/' },
      { name: 'instagram', url: 'https://www.instagram.com/eltamdskincare/' },
      { name: 'linkedin', url: 'https://www.linkedin.com/company/eltamd/' },
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
