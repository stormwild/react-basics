import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Increment from './pages/Increment';

function App() {
  return (
    <Router>
      <Home path='/' />
      <Increment path='increment' />
    </Router>
  );
}

export default App;
