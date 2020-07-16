import React from 'react';

import { Styles } from './Layout.styles';

import { Header } from './.components/Header';

export const Layout = ({ children }) => (
  <Styles.Layout>
    <Header />
    {children}
  </Styles.Layout>
);
