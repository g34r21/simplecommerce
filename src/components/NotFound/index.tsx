import './NotFound.css';

import type { FC } from 'react';

const NotFound: FC = () => (
  <div className="not-found__container">
    <div>
      <h1>404</h1>
      <p>We could not find what you are searching for</p>
    </div>
  </div>
);

export default NotFound;
