import './Root.css';

import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import ProductsMasonry from '~/components/ProductsMasonry';

const RootPage: FC = () => (
  <div className="root-container">
    <div className="left-side">
      <h2 className="store__heading">Store</h2>
      <hr className="hr-secondary store__rule" />
      <ProductsMasonry />
    </div>
    <div className="right-side">
      <Outlet />
    </div>
  </div>
);

export default RootPage;
