import React from 'react';
import { useNavigate } from 'react-router';
import {Button} from "react-bootstrap";

const Main = () => {
  const navigate = useNavigate();
    
  const goToChild = () => navigate('child');
    
  return (
    <div>
      <p>This is detail</p>
      <Button
        onClick={goToChild}
      >
          Go To Child
      </Button>
    </div>
  )
};

export default Main;