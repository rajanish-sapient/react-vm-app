import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import {
  AppLayout,
  Header,
  Footer,
  Login,
  AppProtectedLayout,
  SideMenu,
} from 'ui';
import Home from './components/Home';
import OrdersPage from './components/Orders';
import InvoicesPage from './components/Invoices';
import { CustomNavLink } from './components/CustomNavLink/CustomNavLink';
import EltaMDlogo from './icons/eltamd-logo.svg';
import EltaMdHero from './images/eltamd-hero.png';
import FooterLogo from './images/SH_Footer_logo.png';
import {
  NAV_ITEMS,
  FOOTER_COLS,
  SIDEMENU_ITEMS,
  SIDEMENU_HEADERS,
} from './constants';
import TermAndCondition from './components/TermAndCondition/TermsAndCondition';

function App() {
  return (
    <div className="App font-open-sans">
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              header={<Header imgUrl={EltaMDlogo} navMenuItems={NAV_ITEMS} />}
              footer={
                <Footer footerCols={FOOTER_COLS} footerLogoUrl={FooterLogo} />
              }
              content={<Outlet />}
            />
          }
        >
          <Route
            index
            element={<Home heroImgUrl={EltaMdHero} Login={<Login />} />}
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
          <Route path="terms-and-condition" element={<TermAndCondition />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
