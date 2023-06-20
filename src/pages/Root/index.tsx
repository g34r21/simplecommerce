import './Root.css';

import type { FC } from 'react';
import { useOutlet, useParams } from 'react-router-dom';

import ProductsMasonry from '~/components/ProductsMasonry';

const RootPage: FC = () => {
  const { productId } = useParams();
  const outlet = useOutlet();
  return (
    <div className="root-container">
      <div className="left-side">
        <h2 className="store__heading">Store</h2>
        <hr className="hr--secondary store__rule" />
        <ProductsMasonry />
      </div>
      <div className="right-side">
        <h2 className="store__heading">{productId ? 'Product' : ''}</h2>
        <hr className="hr--secondary store__rule" />
        {outlet || <p className="placeholder">Please choose a product</p>}
      </div>
    </div>
  );
};

export default RootPage;
