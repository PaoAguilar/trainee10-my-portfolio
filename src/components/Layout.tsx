import Navbar from './Navbar';
import Footer from './Footer';
import { ChildrenProps } from '../types/interfaces';
import React from 'react';
import '../styles/main.scss';

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
