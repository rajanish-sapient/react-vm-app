import * as React from 'react';
import { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export interface NavMenuProps {
  menuItems: Array<{
    label: string;
    path: string;
    target?: string;
    dropdownItems: Array<{
      label?: string;
      path?: string;
      target?: string;
    }>;
  }>;
}

const NavMenu = ({ menuItems }: NavMenuProps) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleMobileMenuDropdown = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <NavigationMenu.Root className="lg:ml-16">
      <NavigationMenu.List
        className={`${
          isMobileMenuVisible ? 'flex lg:hidden' : 'hidden lg:block'
        } text-brand-primary fixed left-0 top-12 flex w-full flex-col items-start bg-white py-8 px-6 shadow-xl shadow-gray-300 lg:relative lg:top-0 lg:flex-row lg:items-center lg:py-0 lg:px-0 lg:shadow-none`}
      >
        {menuItems.map((nav, index) => {
          return (
            <NavigationMenu.Item
              key={index}
              className={`relative m-0 block w-full lg:mx-6 lg:inline-block lg:w-auto ${
                index === 0 ? 'lg:ml-0' : ''
              }`}
            >
              {nav.dropdownItems.length > 0 ? (
                <>
                  <NavigationMenu.Trigger className="before:bg-brand-primary relative block w-full py-3 text-left text-base font-medium tracking-wide before:absolute before:bottom-2  before:h-1 before:w-full before:opacity-0 hover:before:opacity-100 lg:inline-block lg:w-auto lg:py-5">
                    {nav.label}
                  </NavigationMenu.Trigger>

                  <NavigationMenu.Content className="relative top-0 z-20 bg-white lg:absolute lg:top-full lg:w-44 lg:drop-shadow-lg">
                    <NavigationMenu.List>
                      {nav.dropdownItems?.map((menuItem, index) => {
                        return (
                          <NavigationMenu.Item key={index}>
                            <NavigationMenu.Link
                              key={index}
                              className="block w-full cursor-pointer py-3 px-6 text-base font-medium tracking-wide"
                              title={menuItem.label}
                              href={menuItem.path}
                              target={menuItem.target}
                            >
                              {menuItem.label}
                            </NavigationMenu.Link>
                          </NavigationMenu.Item>
                        );
                      })}
                    </NavigationMenu.List>
                  </NavigationMenu.Content>
                </>
              ) : (
                <NavigationMenu.Link
                  href={nav.path}
                  title={nav.label}
                  className="before:bg-brand-primary relative block w-full py-3 text-left text-base font-medium tracking-wide before:absolute before:bottom-2 before:h-1 before:w-full before:opacity-0 hover:before:opacity-100 lg:inline-block lg:w-auto lg:py-5"
                  target={nav.target}
                >
                  {nav.label}
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>

      <div
        className={`mobile-menu-toggle block cursor-pointer lg:hidden`}
        onClick={handleMobileMenuDropdown}
      >
        {!isMobileMenuVisible ? (
          <svg
            width={22}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.5 1.25A.75.75 0 0 1 1.25.5h19.5a.75.75 0 0 1 0 1.5H1.25a.75.75 0 0 1-.75-.75Zm0 7.5A.75.75 0 0 1 1.25 8h19.5a.75.75 0 0 1 0 1.5H1.25a.75.75 0 0 1-.75-.75Zm.75 6.75a.75.75 0 0 0 0 1.5h19.5a.75.75 0 0 0 0-1.5H1.25Z"
              fill="#555859"
            />
          </svg>
        ) : (
          <svg
            width={16}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.53 1.53A.75.75 0 0 0 14.47.47L8 6.94 1.53.47A.75.75 0 0 0 .47 1.53L6.94 8 .47 14.47a.75.75 0 1 0 1.06 1.06L8 9.06l6.47 6.47a.75.75 0 1 0 1.06-1.06L9.06 8l6.47-6.47Z"
              fill="#555859"
            />
          </svg>
        )}
      </div>
    </NavigationMenu.Root>
  );
};

export default NavMenu;
