import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Serp from './components/Serp'
import Error from './components/Error'
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route path='/cities' component={Serp} exact />
          <Route component={Error}/>
        </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
