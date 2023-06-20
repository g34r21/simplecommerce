import './Header.css';

import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { DEFAULT_CURRENCY_FORMAT, DEFAULT_LOCALE } from '~/constants';
import { getCartTotal } from '~/store/selectors/cart';

const Header: FC = () => {
  const total = useSelector(getCartTotal);
  const { pathname } = useLocation();
  return (
    <div className="header">
      <img
        src="https://scontent.fbog11-1.fna.fbcdn.net/v/t39.30808-6/271261779_1010031022947598_7907842148056836577_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEgingRzaI2UEswMib47URu2YFoNlDMc4LZgWg2UMxzgqQArrPOPU28skOiABG1s7AQ38owww1fRLNhsR-BJ-Rv&_nc_ohc=HwRbp2hyrwIAX8jKogX&_nc_zt=23&_nc_ht=scontent.fbog11-1.fna&oh=00_AfDPjo_oQ2xi9T7nJ8XSNVutr1pknsWNl0_4XR6Ypip12w&oe=6495B295"
        alt="logo"
        className="header__logo"
      />
      <div className="header__cart">
        <Link to="/cart">
          <div
            className={`header__total ${
              pathname === '/cart' ? 'header__total--active' : ''
            }`}
          >
            <p>
              {total.toLocaleString(DEFAULT_LOCALE, DEFAULT_CURRENCY_FORMAT)}
            </p>
          </div>
        </Link>
        {pathname === '/cart' ? (
          <Link to="/">
            <div className="header__close-cart">
              <p>&times;</p>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
