import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { ChildrenProps } from '../types/interfaces';
import React, { useState } from 'react';
import '../styles/main.scss';

const Layout = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
