import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup';

const App: React.FC = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Signup />
    </Container>
  );
};

export default App;
