import React from 'react';

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div className='row'>
        <Sidebar />
        <Main />
      </div>
    </Layout>
  );
}

export default Home;
