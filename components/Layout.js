import React from 'react';
import Navbar from '../pages/navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
