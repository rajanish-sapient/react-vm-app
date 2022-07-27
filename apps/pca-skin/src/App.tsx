import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AppLayout, Header, Footer, SideMenu, AppProtectedLayout } from 'ui';
import Home from './components/Home';
import OrdersPage from './components/Orders';
import InvoicesPage from './components/Invoices';
import SignIn from './components/SignIn';
import { CustomNavLink } from './components/CustomNavLink/CustomNavLink';
import PCAlogo from './icons/pca-logo.svg';
import PCASkinHero from './images/pcaSkinHero.png';
import FooterLogo from './images/SH_Footer_logo.png';
import {
  NAV_ITEMS,
  FOOTER_COLS,
  SIDEMENU_ITEMS,
  SIDEMENU_HEADERS,
} from './constants';

function App() {
  return (
    <div className="App font-new-hero">
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              header={<Header imgUrl={PCAlogo} navMenuItems={NAV_ITEMS} />}
              footer={
                <Footer footerCols={FOOTER_COLS} footerLogoUrl={FooterLogo} />
              }
              content={<Outlet />}
            />
          }
        >
          <Route
            index
            element={<Home heroImgUrl={PCASkinHero} Login={<SignIn />} />}
          />
          <Route
            path="orders"
            element={
              <AppProtectedLayout
                sideMenu={
                  <SideMenu
                    items={SIDEMENU_ITEMS}
                    render={(menuItem) => <CustomNavLink linkItem={menuItem} />}
                    heading={SIDEMENU_HEADERS.heading}
                    subHeading={SIDEMENU_HEADERS.subHeading}
                  />
                }
                content={<OrdersPage />}
              />
            }
          />
          <Route
            path="invoices"
            element={
              <AppProtectedLayout
                sideMenu={
                  <SideMenu
                    items={SIDEMENU_ITEMS}
                    render={(menuItem) => <CustomNavLink linkItem={menuItem} />}
                    heading={SIDEMENU_HEADERS.heading}
                    subHeading={SIDEMENU_HEADERS.subHeading}
                  />
                }
                content={<InvoicesPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
