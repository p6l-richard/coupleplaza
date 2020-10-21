import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import Header, { HeaderProps } from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute'
import Homepage from './components/pages/Homepage'
import Serp from './components/pages/Serp'
import Admin from './components/pages/Admin'
import Error from './components/pages/Error'
import EditVisa from './components/pages/EditVisa'
import { Switch, Route } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const handlePrivateAreaClick = (event) => {
    event.preventDefault();
    window.location.href = adminOrProfilePath
  }
  const { user, loginWithRedirect, logout, isLoading } = useAuth0();
  // !TODO: Make path dynamic based on being ``admin`` or ``user``
  const adminOrProfilePath = '/profile';

  const headerArgs = { handlePrivateAreaClick, user, loginWithRedirect, logout, isLoading }

  return (
    <Container fluid="xs" className="App">
      <Row>
        <Col>
          <Header {...headerArgs} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Switch>
            <Route path='/' component={Homepage} exact />
            <Route path='/cities' component={Serp} exact />
            <PrivateRoute path='/admin' component={Admin} exact />
            <PrivateRoute path='/admin/visas/:id' component={EditVisa} exact />
            <Route component={Error} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
