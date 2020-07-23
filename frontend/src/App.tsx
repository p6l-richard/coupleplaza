import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap'
import Header from './components/Header'
import Homepage from './components/Homepage'

function App() {
  return (
    <Container fluid="xs" className="App">
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Homepage />         
        </Col>
      </Row>
    </Container>
  );
}

export default App;
