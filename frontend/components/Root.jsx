import React from 'react';
import { Provider } from 'react-redux';

import Lasertank from './LasertankContainer';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Lasertank />
  </Provider>
);

export default Root;
