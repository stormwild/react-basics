import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {

  return (
    <>
    <Header />
    <div className="container-fluid">
        <div className="row">
          <Sidebar/>
          <Main/>
        </div>
      </div>
    </>
  );
}

export default App;
