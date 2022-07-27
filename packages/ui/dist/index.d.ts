import * as React from 'react';
import React__default from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'lg';
    wide?: boolean;
    disabled?: true | false;
    children: React.ReactNode;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}
declare const Button: {
    ({ variant, type, size, wide, disabled, children, }: ButtonProps): JSX.Element;
    displayName: string;
};

interface HeaderProps {
    imgUrl: string;
    navMenuItems: Array<MenuItemType>;
}
interface MenuItemType {
    label: string;
    path: string;
    target?: string;
    dropdownItems: Array<{
        label?: string;
        path?: string;
        target?: string;
    }>;
}
declare const Header: {
    ({ imgUrl, navMenuItems }: HeaderProps): JSX.Element;
    displayName: string;
};

interface FooterColTypeLink {
    name: string;
    title: string;
    links: Array<{
        label: string;
        path: string;
        target: string;
        emphasize?: boolean;
    }>;
}
interface FooterColTypeContact {
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
declare type FooterColType = FooterColTypeLink | FooterColTypeContact;
interface FooterProps {
    footerCols: Array<FooterColType>;
    footerLogoUrl: string;
}
declare const Footer: {
    ({ footerCols, footerLogoUrl }: FooterProps): JSX.Element;
    displayName: string;
};
interface FooterLinkColumnProps {
    linkColumnData: FooterColTypeLink;
}
interface FooterSocialColumnProps {
    socialColumnData: FooterColTypeContact;
}

interface AppLayoutProps {
    header: React.ReactNode;
    footer: React.ReactNode;
    content: React.ReactElement;
}
declare function AppLayout({ header, footer, content }: AppLayoutProps): JSX.Element;
declare namespace AppLayout {
    var displayName: string;
}

interface CardProps {
    children: React__default.ReactNode;
}
declare const Card: {
    ({ children }: CardProps): JSX.Element;
    displayName: string;
};

interface CardHeaderProps {
    children: React__default.ReactNode;
}
declare const CardHeader: {
    ({ children }: CardHeaderProps): JSX.Element;
    displayName: string;
};

interface TextFieldProps {
    type?: string;
    value?: string;
    required?: boolean;
    name: string;
    placeholder: string;
    onChange: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    htmlFor: string;
}
declare const TextField: {
    ({ type, required, value, placeholder, name, onChange, label, htmlFor, }: TextFieldProps): JSX.Element;
    displayName: string;
};

interface FormFieldProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const FormField: {
    ({ className, children }: FormFieldProps): JSX.Element;
    displayName: string;
};

interface AppProtectedLayoutProps {
    content: React.ReactNode;
    sideMenu: React.ReactNode;
}
declare function AppProtectedLayout({ sideMenu, content, }: AppProtectedLayoutProps): JSX.Element;
declare namespace AppProtectedLayout {
    var displayName: string;
}

interface SideMenuItemType {
    title: string;
    path: string;
    icon: React.ReactNode;
}
interface SideMenuItemProps {
    item: SideMenuItemType;
    render(item: SideMenuItemType): React.ReactNode;
}
declare const SideMenuItem: {
    ({ item, render }: SideMenuItemProps): JSX.Element;
    displayName: string;
};

interface SideMenuProps {
    render(data: SideMenuItemType): React.ReactNode;
    items: Array<SideMenuItemType>;
    heading: string;
    subHeading: string;
}
declare function SideMenu({ render, items, heading, subHeading, }: SideMenuProps): JSX.Element;
declare namespace SideMenu {
    var displayName: string;
}

/**
 * References: https://codesandbox.io/s/react-table-simple-typescript-forked-66qtqf?file=/src/App.tsx
 */
interface TrackingIDType {
    id: string;
    url: string;
}
interface DataType$1 {
    amount?: string;
    date?: string;
    order?: string;
    shipTo?: string;
    shipToAddress?: string;
    tracking?: TrackingIDType;
    soldTo?: string;
    status?: string;
}
interface OrderTableProps {
    columnsList: any;
    data: Array<DataType$1>;
    title: string;
    description: string;
    sorting: boolean;
    pagination: boolean;
    totalPageCount: number;
    onPageChange: (pageNo: number) => void;
    maxVisiblePages: number;
    defaultPageSize: number;
}
declare const OrderTable: {
    ({ columnsList, data, title, description, sorting, pagination, totalPageCount, onPageChange, maxVisiblePages, defaultPageSize, }: OrderTableProps): React__default.ReactElement;
    displayName: string;
};

/**
 * References: https://codesandbox.io/s/react-table-simple-typescript-forked-66qtqf?file=/src/App.tsx
 */
interface DataType {
    amount?: string;
    date?: string;
    invoice?: string;
    shipTo?: string;
    shipToAddress?: string;
    soldTo?: string;
    status?: string;
}
interface InvoiceTableProps {
    columnsList: any;
    data: Array<DataType>;
    title: string;
    description: string;
    sorting: boolean;
    pagination: boolean;
    totalPageCount: number;
    onPageChange: (pageNo: number) => void;
    maxVisiblePages: number;
    defaultPageSize: number;
}
declare const InvoiceTable: {
    ({ columnsList, data, title, description, sorting, pagination, totalPageCount, onPageChange, maxVisiblePages, defaultPageSize, }: InvoiceTableProps): React__default.ReactElement;
    displayName: string;
};

declare const Login: {
    (): JSX.Element;
    displayName: string;
};

export { AppLayout, AppLayoutProps, AppProtectedLayout, AppProtectedLayoutProps, Button, ButtonProps, Card, CardHeader, CardHeaderProps, DataType$1 as DataType, Footer, FooterColType, FooterColTypeContact, FooterColTypeLink, FooterLinkColumnProps, FooterProps, FooterSocialColumnProps, FormField, FormFieldProps, Header, HeaderProps, InvoiceTable, InvoiceTableProps, Login, MenuItemType, OrderTable, OrderTableProps, SideMenu, SideMenuItem, SideMenuItemProps, SideMenuItemType, TextField, TextFieldProps };
