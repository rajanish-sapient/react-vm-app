"use strict";

// src/components/Button/Button.tsx
import * as React from "react";
var Button = ({
  variant = "primary",
  type = "button",
  size = "lg",
  wide = false,
  disabled = false,
  children
}) => {
  return /* @__PURE__ */ React.createElement("button", {
    type,
    className: `
                border-2 ${wide ? "px-20" : null}
                ${size === "sm" ? "px-2 py-1" : "px-6 py-2.5"}
                 ${variant === "secondary" ? "bg-brand-secondary hover:bg-brand-primary text-brand-primary hover:text-brand-secondary border-brand-primary hover:border-brand-primary disabled:bg-brand-secondary disabled:text-brand-accent-gray-light disabled:border-brand-accent-gray-light" : variant === "tertiary" ? "bg-brand-accent-gray-light border-brand-accent-gray-light text-brand-primary hover:bg-brand-accent-gray-light hover:border-brand-accent-gray-light hover:text-brand-accent-default disabled:bg-brand-accent-gray-light disabled:text-brand-accent-gray-dark" : "bg-brand-primary border-brand-primary hover:bg-brand-accent-default hover:border-brand-accent-default disabled:bg-brand-accent-gray-dark disabled:text-brand-accent-gray-light disabled:border-brand-accent-gray-dark text-white"}
                rounded-md font-semibold
                disabled:cursor-not-allowed`,
    disabled
  }, children);
};
Button.displayName = "Button";

// src/components/Header/Header.tsx
import * as React4 from "react";

// src/components/Logo/Logo.tsx
import * as React2 from "react";
var Logo = ({ imageUrl }) => {
  return /* @__PURE__ */ React2.createElement("a", {
    href: "/",
    title: "Logo"
  }, /* @__PURE__ */ React2.createElement("img", {
    src: imageUrl,
    className: "h-14 w-36 lg:w-40",
    alt: "logo"
  }));
};
var Logo_default = Logo;

// src/components/Navigation/NavMenu.tsx
import * as React3 from "react";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
var NavMenu = ({ menuItems }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const handleMobileMenuDropdown = () => {
    document.body.classList.toggle("overflow-hidden");
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };
  return /* @__PURE__ */ React3.createElement(NavigationMenu.Root, {
    className: "lg:ml-16"
  }, /* @__PURE__ */ React3.createElement(NavigationMenu.List, {
    className: `${isMobileMenuVisible ? "flex lg:hidden" : "hidden lg:block"} text-brand-primary fixed left-0 top-12 flex w-full flex-col items-start bg-white py-8 px-6 shadow-xl shadow-gray-300 lg:relative lg:top-0 lg:flex-row lg:items-center lg:py-0 lg:px-0 lg:shadow-none`
  }, menuItems.map((nav, index) => {
    var _a;
    return /* @__PURE__ */ React3.createElement(NavigationMenu.Item, {
      key: index,
      className: `relative m-0 block w-full lg:mx-6 lg:inline-block lg:w-auto ${index === 0 ? "lg:ml-0" : ""}`
    }, nav.dropdownItems.length > 0 ? /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(NavigationMenu.Trigger, {
      className: "before:bg-brand-primary relative block w-full py-3 text-left text-base font-medium tracking-wide before:absolute before:bottom-2  before:h-1 before:w-full before:opacity-0 hover:before:opacity-100 lg:inline-block lg:w-auto lg:py-5"
    }, nav.label), /* @__PURE__ */ React3.createElement(NavigationMenu.Content, {
      className: "relative top-0 z-20 bg-white lg:absolute lg:top-full lg:w-44 lg:drop-shadow-lg"
    }, /* @__PURE__ */ React3.createElement(NavigationMenu.List, null, (_a = nav.dropdownItems) == null ? void 0 : _a.map((menuItem, index2) => {
      return /* @__PURE__ */ React3.createElement(NavigationMenu.Item, {
        key: index2
      }, /* @__PURE__ */ React3.createElement(NavigationMenu.Link, {
        key: index2,
        className: "block w-full cursor-pointer py-3 px-6 text-base font-medium tracking-wide",
        title: menuItem.label,
        href: menuItem.path,
        target: menuItem.target
      }, menuItem.label));
    })))) : /* @__PURE__ */ React3.createElement(NavigationMenu.Link, {
      href: nav.path,
      title: nav.label,
      className: "before:bg-brand-primary relative block w-full py-3 text-left text-base font-medium tracking-wide before:absolute before:bottom-2 before:h-1 before:w-full before:opacity-0 hover:before:opacity-100 lg:inline-block lg:w-auto lg:py-5",
      target: nav.target
    }, nav.label));
  })), /* @__PURE__ */ React3.createElement("div", {
    className: `mobile-menu-toggle block cursor-pointer lg:hidden`,
    onClick: handleMobileMenuDropdown
  }, !isMobileMenuVisible ? /* @__PURE__ */ React3.createElement("svg", {
    width: 22,
    height: 17,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.5 1.25A.75.75 0 0 1 1.25.5h19.5a.75.75 0 0 1 0 1.5H1.25a.75.75 0 0 1-.75-.75Zm0 7.5A.75.75 0 0 1 1.25 8h19.5a.75.75 0 0 1 0 1.5H1.25a.75.75 0 0 1-.75-.75Zm.75 6.75a.75.75 0 0 0 0 1.5h19.5a.75.75 0 0 0 0-1.5H1.25Z",
    fill: "#555859"
  })) : /* @__PURE__ */ React3.createElement("svg", {
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.53 1.53A.75.75 0 0 0 14.47.47L8 6.94 1.53.47A.75.75 0 0 0 .47 1.53L6.94 8 .47 14.47a.75.75 0 1 0 1.06 1.06L8 9.06l6.47 6.47a.75.75 0 1 0 1.06-1.06L9.06 8l6.47-6.47Z",
    fill: "#555859"
  }))));
};
var NavMenu_default = NavMenu;

// src/components/Header/Header.tsx
var Header = ({ imgUrl, navMenuItems }) => {
  return /* @__PURE__ */ React4.createElement("header", {
    id: "site-header",
    className: "z-10 bg-white shadow-xl shadow-gray-300",
    role: "header"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "container relative flex items-center justify-between lg:justify-start"
  }, /* @__PURE__ */ React4.createElement(Logo_default, {
    imageUrl: imgUrl
  }), /* @__PURE__ */ React4.createElement(NavMenu_default, {
    menuItems: navMenuItems
  })));
};
Header.displayName = "Header";

// src/components/Footer/Footer.tsx
import * as React8 from "react";

// src/icons/SocialFacebook.tsx
import * as React5 from "react";
var SvgSocialFacebook = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React5.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-labelledby": titleId,
  ...props
}, title ? /* @__PURE__ */ React5.createElement("title", {
  id: titleId
}, title) : null, /* @__PURE__ */ React5.createElement("path", {
  d: "M9.5 8.667H7V12h2.5v10h4.167V12h3L17 8.667h-3.333V7.25c0-.75.166-1.083.916-1.083H17V2h-3.167c-3 0-4.333 1.333-4.333 3.833v2.834Z",
  fill: "currentColor"
}));
var SocialFacebook_default = SvgSocialFacebook;

// src/icons/SocialInstagram.tsx
import * as React6 from "react";
var SvgSocialInstagram = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React6.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-labelledby": titleId,
  ...props
}, title ? /* @__PURE__ */ React6.createElement("title", {
  id: titleId
}, title) : null, /* @__PURE__ */ React6.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7ZM1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7Zm11.483 1.989a3 3 0 1 0-.88 5.935 3 3 0 0 0 .88-5.935ZM9.74 7.519a5 5 0 1 1 4.606 8.876A5 5 0 0 1 9.74 7.518ZM17.5 5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01Z",
  fill: "currentColor"
}));
var SocialInstagram_default = SvgSocialInstagram;

// src/icons/SocialLinkedIn.tsx
import * as React7 from "react";
var SvgSocialLinkedIn = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React7.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-labelledby": titleId,
  ...props
}, title ? /* @__PURE__ */ React7.createElement("title", {
  id: titleId
}, title) : null, /* @__PURE__ */ React7.createElement("path", {
  d: "M6.375 4.174a2.16 2.16 0 0 1-2.188 2.174A2.16 2.16 0 0 1 2 4.174 2.16 2.16 0 0 1 4.188 2a2.16 2.16 0 0 1 2.187 2.174Zm0 3.913H2V22h4.375V8.087Zm7 0H9V22h4.375v-7.304c0-4.087 5.25-4.435 5.25 0V22H23v-8.783c0-6.87-7.787-6.608-9.625-3.217V8.087Z",
  fill: "currentColor"
}));
var SocialLinkedIn_default = SvgSocialLinkedIn;

// src/components/Footer/Footer.tsx
var Footer = ({ footerCols, footerLogoUrl }) => {
  const totalCols = footerCols.length;
  const getFooterLinks = (col) => {
    return "links" in col;
  };
  const getFooterSocial = (col) => {
    return "social_handles" in col;
  };
  const linksData = footerCols.filter(getFooterLinks);
  const socialData = footerCols.filter(getFooterSocial)[0];
  let gridClass;
  if (totalCols === 4) {
    gridClass = "grid-cols-1 grid lg:grid-cols-4 gap-4";
  } else if (totalCols === 3) {
    gridClass = "grid-cols-1 grid lg:grid-cols-3 gap-4";
  } else {
    gridClass = "grid-cols-1 grid lg:grid-cols-4 gap-4";
  }
  return /* @__PURE__ */ React8.createElement("footer", {
    id: "site-footer",
    className: "relative bg-black",
    role: "footer"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "footer-inner container py-5 text-center text-white lg:py-12 lg:text-left"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: `${gridClass}`
  }, linksData.map((linkCol, index) => /* @__PURE__ */ React8.createElement(FooterLinkColumn, {
    key: index,
    linkColumnData: linkCol
  })), /* @__PURE__ */ React8.createElement(FooterSocialColumn, {
    socialColumnData: socialData
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "mt-16 flex flex-col items-center justify-center text-center lg:flex-row lg:justify-start lg:text-left"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "logo mr-0 mb-6 lg:mb-0 lg:mr-14"
  }, /* @__PURE__ */ React8.createElement("img", {
    src: footerLogoUrl,
    className: "w-52",
    alt: "footer logo"
  })), /* @__PURE__ */ React8.createElement("p", {
    className: "text-[12px]"
  }, "\xA9 2022 CP Skin Health. All Rights Reserved.", " "))));
};
Footer.displayName = "Footer";
var FooterLinkColumn = ({ linkColumnData }) => {
  var _a;
  return /* @__PURE__ */ React8.createElement("div", {
    className: "mb-3 lg:mb-0"
  }, /* @__PURE__ */ React8.createElement("ul", null, /* @__PURE__ */ React8.createElement("li", {
    className: "block"
  }, /* @__PURE__ */ React8.createElement("span", {
    className: "block py-2 font-bold lg:py-3"
  }, linkColumnData.title)), (_a = linkColumnData.links) == null ? void 0 : _a.map((link) => {
    return /* @__PURE__ */ React8.createElement("li", {
      key: link.label,
      className: `block ${link.emphasize ? "font-bold" : ""}`
    }, /* @__PURE__ */ React8.createElement("a", {
      className: "block py-2 lg:py-3",
      href: link.path,
      title: link.label,
      target: link.target
    }, link.label));
  })));
};
var FooterSocialColumn = ({ socialColumnData }) => {
  var _a;
  return /* @__PURE__ */ React8.createElement("div", {
    className: "mt-4 lg:mt-0"
  }, /* @__PURE__ */ React8.createElement("ul", {
    className: "social_group flex justify-center py-2 lg:justify-start lg:py-3"
  }, socialColumnData.social_handles.map((handle, index) => {
    return /* @__PURE__ */ React8.createElement("li", {
      key: index,
      className: "mx-6 basis-0 lg:mx-0 lg:basis-20"
    }, /* @__PURE__ */ React8.createElement("a", {
      href: handle.url,
      title: handle.name,
      target: "_blank",
      rel: "noreferrer"
    }, handle.name === "facebook" ? /* @__PURE__ */ React8.createElement(SocialFacebook_default, {
      className: "h-6 w-6"
    }) : handle.name === "instagram" ? /* @__PURE__ */ React8.createElement(SocialInstagram_default, {
      className: "h-6 w-6"
    }) : handle.name === "linkedin" ? /* @__PURE__ */ React8.createElement(SocialLinkedIn_default, {
      className: "h-6 w-6"
    }) : null));
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "help mt-12"
  }, /* @__PURE__ */ React8.createElement("a", {
    href: "/",
    className: "font-bold"
  }, "Need Help?"), /* @__PURE__ */ React8.createElement("p", {
    className: "contact mt-4"
  }, "Call ", /* @__PURE__ */ React8.createElement("span", null, socialColumnData.contact))), /* @__PURE__ */ React8.createElement("div", {
    className: "mt-6"
  }, (_a = socialColumnData.office_schedule) == null ? void 0 : _a.map((schedule, index) => {
    return /* @__PURE__ */ React8.createElement("p", {
      key: index
    }, /* @__PURE__ */ React8.createElement("span", {
      className: "font-bold"
    }, schedule.day), ":", /* @__PURE__ */ React8.createElement("span", null, " ", schedule.time));
  })));
};

// src/components/AppLayout/AppLayout.tsx
import * as React9 from "react";
function AppLayout({ header, footer, content }) {
  return /* @__PURE__ */ React9.createElement("div", {
    className: "flex flex-col bg-gray-100"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "sticky top-0 z-10"
  }, header), /* @__PURE__ */ React9.createElement("div", {
    className: "container py-5 lg:py-12"
  }, content), /* @__PURE__ */ React9.createElement("div", {
    className: "w-full"
  }, footer));
}
AppLayout.displayName = "AppLayout";

// src/components/Card/Card.tsx
import React10 from "react";
var Card = ({ children }) => {
  return /* @__PURE__ */ React10.createElement("div", {
    className: "rounded-br-[48px] bg-white p-12 text-left"
  }, children);
};
Card.displayName = "Card";
var Card_default = Card;

// src/components/Card/CardHeader.tsx
import React11 from "react";
var CardHeader = ({ children }) => {
  return /* @__PURE__ */ React11.createElement("h1", {
    className: "text-brand-primary mb-10 text-4xl font-black leading-10"
  }, children);
};
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// src/components/TextField/TextField.tsx
import React12 from "react";
var TextField = ({
  type = "text",
  required = false,
  value = "",
  placeholder,
  name,
  onChange = () => void 0,
  label,
  htmlFor
}) => {
  return /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement("label", {
    htmlFor,
    className: !label ? `sr-only` : `mb-3 block text-xs  font-normal text-neutral-600`
  }, label ? label : null), /* @__PURE__ */ React12.createElement("input", {
    type,
    placeholder,
    name,
    onChange: (event) => onChange(event),
    className: "w-full rounded-full border border-neutral-300 px-6 py-3 text-neutral-800 outline-neutral-800 placeholder:font-light placeholder:text-stone-400 focus:outline",
    value,
    required,
    id: htmlFor
  }));
};
TextField.displayName = "TextField";

// src/components/FormField/FormField.tsx
import React13 from "react";
var FormField = ({ className = "", children }) => {
  return /* @__PURE__ */ React13.createElement("div", {
    className
  }, children);
};
FormField.displayName = "FormField";

// src/components/AppProtectedLayout/AppProtectedLayout.tsx
import * as React14 from "react";
function AppProtectedLayout({
  sideMenu,
  content
}) {
  return /* @__PURE__ */ React14.createElement("div", {
    className: "my-12 flex flex-col	items-start gap-8 lg:flex-row"
  }, /* @__PURE__ */ React14.createElement("aside", {
    className: "w-full lg:w-1/5"
  }, sideMenu), /* @__PURE__ */ React14.createElement("main", {
    className: "w-full lg:w-4/5"
  }, content));
}
AppProtectedLayout.displayName = "AppProtectedLayout";

// src/components/SideMenu/SideMenu.tsx
import * as React16 from "react";

// src/components/SideMenuItem/SideMenuItem.tsx
import * as React15 from "react";
var SideMenuItem = ({ item, render }) => {
  return /* @__PURE__ */ React15.createElement("li", {
    className: "mb-3 text-sm font-bold"
  }, render(item));
};
SideMenuItem.displayName = "SideMenuItem";

// src/components/SideMenu/SideMenu.tsx
function SideMenu({
  render,
  items,
  heading,
  subHeading
}) {
  return /* @__PURE__ */ React16.createElement("div", {
    className: "flex flex-col py-7"
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React16.createElement("h1", {
    className: "text-4xl font-bold"
  }, heading), /* @__PURE__ */ React16.createElement("p", {
    className: "mt-2 font-light"
  }, subHeading)), /* @__PURE__ */ React16.createElement("ul", {
    className: "mt-6"
  }, items.map((item, index) => {
    return /* @__PURE__ */ React16.createElement(SideMenuItem, {
      key: index,
      item,
      render
    });
  })));
}
SideMenu.displayName = "SideMenu";

// src/components/Table/OrderTable/OrderTable.tsx
import React18, { useState as useState2, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";

// src/icons/ChevronDown.tsx
import * as React17 from "react";
var SvgChevronDown = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React17.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-labelledby": titleId,
  ...props
}, title ? /* @__PURE__ */ React17.createElement("title", {
  id: titleId
}, title) : null, /* @__PURE__ */ React17.createElement("path", {
  d: "M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
}));
var ChevronDown_default = SvgChevronDown;

// src/components/Table/OrderTable/OrderTable.tsx
var OrderTable = ({
  columnsList,
  data,
  title,
  description,
  sorting,
  pagination,
  totalPageCount,
  onPageChange,
  maxVisiblePages,
  defaultPageSize
}) => {
  const columns = useMemo(() => [...columnsList], [columnsList]);
  const orders = useMemo(() => [...data], [data]);
  const [totalPagesCount] = useState2(totalPageCount);
  const tableInstance = useTable({
    columns,
    data: orders,
    initialState: {
      pageSize: defaultPageSize,
      sortBy: [
        {
          id: "date",
          desc: true
        }
      ]
    },
    disableSortRemove: true,
    disableSortBy: sorting,
    manualPagination: !pagination
  }, useSortBy, usePagination);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canNextPage,
    canPreviousPage,
    state,
    prepareRow
  } = tableInstance;
  const { pageIndex } = state;
  const currentPage = pageIndex + 1;
  const pages = Array.from({
    length: totalPagesCount < maxVisiblePages + 1 ? totalPagesCount : maxVisiblePages
  }, (_, index) => index + 1);
  const showOrderDate = (isoDate) => {
    const date = new Date(isoDate).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
    return date;
  };
  return /* @__PURE__ */ React18.createElement("div", {
    className: "bg-white p-8 px-0 text-left lg:p-8"
  }, /* @__PURE__ */ React18.createElement("h2", {
    className: "border-brand-primary border-b pb-2 text-xl font-bold"
  }, title), /* @__PURE__ */ React18.createElement("p", {
    className: "mt-3 mb-5 text-base font-light"
  }, description), /* @__PURE__ */ React18.createElement("div", {
    className: "overflow-auto"
  }, /* @__PURE__ */ React18.createElement("table", {
    className: "w-[1000px] text-left lg:w-full",
    ...getTableProps()
  }, /* @__PURE__ */ React18.createElement("thead", {
    className: "border-brand-accent-gray-light border-b-2"
  }, headerGroups.map((headerGroup) => /* @__PURE__ */ React18.createElement("tr", {
    ...headerGroup.getHeaderGroupProps()
  }, headerGroup.headers.map((column) => /* @__PURE__ */ React18.createElement("th", {
    className: "header pb-2 text-base",
    ...column.getHeaderProps(column.getSortByToggleProps())
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React18.createElement("span", {
    className: "mr-1"
  }, column.render("Header")), column.isSorted ? column.isSortedDesc ? /* @__PURE__ */ React18.createElement(ChevronDown_default, {
    className: "h-5 w-5"
  }) : /* @__PURE__ */ React18.createElement(ChevronDown_default, {
    className: "h-5 w-5 rotate-180"
  }) : null)))))), /* @__PURE__ */ React18.createElement("tbody", {
    ...getTableBodyProps()
  }, page.map((row) => {
    prepareRow(row);
    return /* @__PURE__ */ React18.createElement("tr", {
      className: "border-brand-accent-gray-light  border-b",
      ...row.getRowProps()
    }, row.cells.map((cell) => {
      const isDateField = cell.column.Header === "Date";
      return /* @__PURE__ */ React18.createElement("td", {
        className: "py-4 font-light",
        ...cell.getCellProps()
      }, isDateField ? showOrderDate(cell.value) : cell.render("Cell"));
    }));
  })))), /* @__PURE__ */ React18.createElement("div", {
    className: "mt-12 flex justify-center"
  }, /* @__PURE__ */ React18.createElement("ul", {
    className: "flex items-end"
  }, /* @__PURE__ */ React18.createElement("li", {
    className: "mr-2 text-sm"
  }, /* @__PURE__ */ React18.createElement(Button, {
    type: "button",
    variant: "primary",
    size: "sm",
    disabled: !canPreviousPage,
    onClick: () => onPageChange(currentPage - 1)
  }, "Prev")), pages.map((page2) => {
    return /* @__PURE__ */ React18.createElement("li", {
      key: page2,
      className: `
                ${page2 === currentPage ? "active bg-brand-primary text-white" : null}
                border-brand-primary hover:bg-brand-primary mx-2 flex h-8 w-auto cursor-pointer items-center justify-center border py-2 px-3 text-sm transition duration-100 ease-in hover:text-white`,
      onClick: () => page2 !== currentPage && onPageChange(page2)
    }, page2);
  }), totalPagesCount >= maxVisiblePages + 1 ? /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement("li", {
    className: "mx-3"
  }, "..."), /* @__PURE__ */ React18.createElement("li", {
    className: "border-brand-primary hover:bg-brand-primary mx-2 flex h-8 w-auto cursor-pointer items-center justify-center border py-2 px-3 text-sm transition duration-100 ease-in hover:text-white",
    onClick: () => totalPagesCount !== currentPage && onPageChange(totalPagesCount)
  }, totalPagesCount)) : null, /* @__PURE__ */ React18.createElement("li", {
    className: "ml-2 text-sm"
  }, /* @__PURE__ */ React18.createElement(Button, {
    type: "button",
    variant: "primary",
    size: "sm",
    disabled: !canNextPage,
    onClick: () => onPageChange(currentPage + 1)
  }, "Next")))));
};
OrderTable.displayName = "OrderTable";

// src/components/Table/InvoiceTable/InvoiceTable.tsx
import React19, { useState as useState3, useMemo as useMemo2 } from "react";
import { useTable as useTable2, useSortBy as useSortBy2, usePagination as usePagination2 } from "react-table";
var InvoiceTable = ({
  columnsList,
  data,
  title,
  description,
  sorting,
  pagination,
  totalPageCount,
  onPageChange,
  maxVisiblePages,
  defaultPageSize
}) => {
  const columns = useMemo2(() => [...columnsList], [columnsList]);
  const invoices = useMemo2(() => [...data], [data]);
  const [totalPagesCount] = useState3(totalPageCount);
  const tableInstance = useTable2({
    columns,
    data: invoices,
    initialState: {
      pageSize: defaultPageSize,
      sortBy: [
        {
          id: "date",
          desc: true
        }
      ]
    },
    disableSortRemove: true,
    disableSortBy: sorting,
    manualPagination: !pagination
  }, useSortBy2, usePagination2);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canNextPage,
    canPreviousPage,
    state,
    prepareRow
  } = tableInstance;
  const { pageIndex } = state;
  const currentPage = pageIndex + 1;
  const pages = Array.from({
    length: totalPagesCount < maxVisiblePages + 1 ? totalPagesCount : maxVisiblePages
  }, (_, index) => index + 1);
  const showInvoiceDate = (isoDate) => {
    const date = new Date(isoDate).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
    return date;
  };
  return /* @__PURE__ */ React19.createElement("div", {
    className: "bg-white p-8 px-0 text-left lg:p-8"
  }, /* @__PURE__ */ React19.createElement("h2", {
    className: "border-brand-primary border-b pb-2 text-xl font-bold"
  }, title), /* @__PURE__ */ React19.createElement("p", {
    className: "mt-3 mb-5 text-base font-light"
  }, description), /* @__PURE__ */ React19.createElement("div", {
    className: "overflow-auto"
  }, /* @__PURE__ */ React19.createElement("table", {
    className: "w-[1000px] text-left lg:w-full",
    ...getTableProps()
  }, /* @__PURE__ */ React19.createElement("thead", {
    className: "border-brand-accent-gray-light border-b-2"
  }, headerGroups.map((headerGroup) => /* @__PURE__ */ React19.createElement("tr", {
    ...headerGroup.getHeaderGroupProps()
  }, headerGroup.headers.map((column) => /* @__PURE__ */ React19.createElement("th", {
    className: "header pb-2 text-base",
    ...column.getHeaderProps(column.getSortByToggleProps())
  }, /* @__PURE__ */ React19.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React19.createElement("span", {
    className: "mr-1"
  }, column.render("Header")), column.isSorted ? column.isSortedDesc ? /* @__PURE__ */ React19.createElement(ChevronDown_default, {
    className: "h-5 w-5"
  }) : /* @__PURE__ */ React19.createElement(ChevronDown_default, {
    className: "h-5 w-5 rotate-180"
  }) : null)))))), /* @__PURE__ */ React19.createElement("tbody", {
    ...getTableBodyProps()
  }, page.map((row) => {
    prepareRow(row);
    return /* @__PURE__ */ React19.createElement("tr", {
      className: "border-brand-accent-gray-light  border-b",
      ...row.getRowProps()
    }, row.cells.map((cell) => {
      const isDateField = cell.column.Header === "Date";
      return /* @__PURE__ */ React19.createElement("td", {
        className: "py-4 font-light",
        ...cell.getCellProps()
      }, isDateField ? showInvoiceDate(cell.value) : cell.render("Cell"));
    }));
  })))), /* @__PURE__ */ React19.createElement("div", {
    className: "mt-12 flex justify-center"
  }, /* @__PURE__ */ React19.createElement("ul", {
    className: "flex items-end"
  }, /* @__PURE__ */ React19.createElement("li", {
    className: "mr-2 text-sm"
  }, /* @__PURE__ */ React19.createElement(Button, {
    type: "button",
    variant: "primary",
    size: "sm",
    disabled: !canPreviousPage,
    onClick: () => onPageChange(currentPage - 1)
  }, "Prev")), pages.map((page2) => {
    return /* @__PURE__ */ React19.createElement("li", {
      key: page2,
      className: `
                ${page2 === currentPage ? "active bg-brand-primary text-white" : null}
                border-brand-primary hover:bg-brand-primary mx-2 flex h-8 w-auto cursor-pointer items-center justify-center border py-2 px-3 text-sm transition duration-100 ease-in hover:text-white`,
      onClick: () => page2 !== currentPage && onPageChange(page2)
    }, page2);
  }), totalPagesCount >= maxVisiblePages + 1 ? /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("li", {
    className: "mx-3"
  }, "..."), /* @__PURE__ */ React19.createElement("li", {
    className: "border-brand-primary hover:bg-brand-primary mx-2 flex h-8 w-auto cursor-pointer items-center justify-center border py-2 px-3 text-sm transition duration-100 ease-in hover:text-white",
    onClick: () => totalPagesCount !== currentPage && onPageChange(totalPagesCount)
  }, totalPagesCount)) : null, /* @__PURE__ */ React19.createElement("li", {
    className: "ml-2 text-sm"
  }, /* @__PURE__ */ React19.createElement(Button, {
    type: "button",
    variant: "primary",
    size: "sm",
    disabled: !canNextPage,
    onClick: () => onPageChange(currentPage + 1)
  }, "Next")))));
};
InvoiceTable.displayName = "InvoiceTable";

// src/components/Pages/Login.tsx
import React20, { useState as useState4 } from "react";
var Login = () => {
  const [formData, setFormData] = useState4({ password: "", email: "" });
  return /* @__PURE__ */ React20.createElement("div", {
    className: "drop-shadow-xl"
  }, /* @__PURE__ */ React20.createElement(Card_default, null, /* @__PURE__ */ React20.createElement("div", {
    className: "divide-y"
  }, /* @__PURE__ */ React20.createElement("div", {
    className: "mb-10"
  }, /* @__PURE__ */ React20.createElement(CardHeader_default, null, "Sign In"), /* @__PURE__ */ React20.createElement(FormField, {
    className: "mt-10"
  }, /* @__PURE__ */ React20.createElement(TextField, {
    type: "email",
    htmlFor: "email",
    label: " Email*",
    onChange: (e) => setFormData({ ...formData, email: e.target.value }),
    value: formData.email,
    placeholder: "Email",
    name: "email"
  })), /* @__PURE__ */ React20.createElement("label", {
    htmlFor: "password",
    className: "mb-3 mt-10 block text-xs  text-neutral-600"
  }, "Password*"), /* @__PURE__ */ React20.createElement("div", {
    className: "relative w-full"
  }, /* @__PURE__ */ React20.createElement("input", {
    type: "password",
    className: "focus:outlineSign w-full rounded-full border border-neutral-300 py-3 pl-6 pr-16 text-neutral-800 outline-neutral-800 placeholder:font-light placeholder:text-stone-400",
    placeholder: "Password",
    value: formData.password,
    onChange: (e) => setFormData({ ...formData, password: e.target.value })
  }), /* @__PURE__ */ React20.createElement("button", {
    className: "absolute top-4 right-4 text-xs font-bold text-blue-700"
  }, "show")), /* @__PURE__ */ React20.createElement("a", {
    href: "#",
    className: "mt-4 inline-block text-xs font-bold text-blue-700"
  }, "Forget password?"), /* @__PURE__ */ React20.createElement("div", {
    className: "mt-10 flex items-center gap-8"
  }, /* @__PURE__ */ React20.createElement(Button, {
    type: "submit"
  }, "Sign In"))), /* @__PURE__ */ React20.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React20.createElement("h1", {
    className: "mt-10 mb-2 text-2xl font-black leading-7 text-neutral-600"
  }, "Don\u2019t Have An Account?"), /* @__PURE__ */ React20.createElement("p", {
    className: "mb-10 text-base font-light leading-6 text-neutral-600"
  }, "Create your account today to easily manage past and upcoming orders, subscriptions, and invoices."), /* @__PURE__ */ React20.createElement(Button, null, "Create Your Account")))));
};
Login.displayName = "Login";
export {
  AppLayout,
  AppProtectedLayout,
  Button,
  Card_default as Card,
  CardHeader_default as CardHeader,
  Footer,
  FormField,
  Header,
  InvoiceTable,
  Login,
  OrderTable,
  SideMenu,
  SideMenuItem,
  TextField
};
