import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {

  const [params] = useSearchParams();
    
  return (
    <div>
      <p>Hello, {params.get('name')}</p>
    </div>
  )
}

export default Home;