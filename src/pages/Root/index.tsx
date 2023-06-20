import './Root.css';

import type { FC } from 'react';
import { useLocation, useOutlet, useParams } from 'react-router-dom';

import Header from '~/components/Header';
import ProductsMasonry from '~/components/ProductsMasonry';

const RootPage: FC = () => {
  const { productId } = useParams();
  const { pathname } = useLocation();
  const outlet = useOutlet();
  return (
    <div className="root-container">
      <Header />
      <div className="root-container__grid">
        <div className="left-side">
          <h2 className="store__heading">Store</h2>
          <hr className="hr--secondary store__rule" />
          <ProductsMasonry />
        </div>
        <div className="right-side">
          <h2 className="store__heading">
            {productId ? 'Product' : ''}
            {pathname === '/cart' ? 'Shopping Cart' : ''}
          </h2>
          <hr className="hr--secondary store__rule" />
          {outlet || <p className="placeholder">Please choose a product</p>}
        </div>
      </div>
    </div>
  );
};

export default RootPage;
