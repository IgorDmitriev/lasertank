import React from 'react';
import { Provider } from 'react-redux';

import Lasertank from './Lasertank';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Lasertank />
  </Provider>
);

export default Root;
