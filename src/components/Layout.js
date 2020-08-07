import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='container-fluid'>{children}</div>
    </>
  );
}

export default Layout;
