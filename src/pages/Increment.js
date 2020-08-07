import React, { useState } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import Layout from '../components/Layout';

function Increment() {
  const [count, setCount] = useState(0);
  const increment = (step = 1) => setCount(count + step);

  return (
    <Layout>
      <div className='row'>
        <div className='col'>
          <Display message={count} />
          <div>
            <Button onClick={increment} increment={1} /> &nbsp;
            <Button onClick={increment} increment={5} /> &nbsp;
            <Button onClick={increment} increment={10} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Increment;
