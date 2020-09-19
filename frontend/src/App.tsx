import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Homepage from './components/pages/Homepage'
import Serp from './components/pages/Serp'
import Admin from './components/pages/Admin'
import Profile from './components/pages/Profile'
import Error from './components/pages/Error'
import EditVisa from './components/pages/EditVisa'
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
          <PrivateRoute path='/admin' component={Admin} exact />
          <PrivateRoute path='/admin/visas/:id' component={EditVisa} exact />
          <PrivateRoute path='/profile' component={Profile} exact />
          <Route component={Error}/>
        </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
