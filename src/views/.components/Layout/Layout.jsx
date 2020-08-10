import React from 'react';

import { Styles } from './Layout.styles';

import { Footer } from './.components/Footer';
import { Header } from './.components/Header';

export const Layout = ({ children }) => (
  <Styles.Layout>
    <Header />
    <Styles.Main>{children}</Styles.Main>
    <Footer />
  </Styles.Layout>
);
