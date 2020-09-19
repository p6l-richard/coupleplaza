import React, {Component} from 'react';
import {
    Navbar, Nav, NavbarBrand, NavItem, Button //,NavLink
    , Container, Row, Col
} from 'reactstrap';
import { withAuth0 } from "@auth0/auth0-react";
import jwt_decode from 'jwt-decode'
import logo from '../logo.png';


export interface IAppProps {
    auth0: any
}

interface State {
    permissions: Array<string>;
  }
  

class Header extends Component<IAppProps, State> {
    constructor(props) {
        super(props);
        this.state = { permissions:  []};
        this.setPath = this.setPath.bind(this)
      };
      
      async setPath (getAccessTokenSilently) {
          const token = await getAccessTokenSilently({
              audience: process.env.REACT_APP_AUTH0_AUDIENCE
          })
          this.setState({permissions: jwt_decode(token).permissions })
      }
      public render() {
          
          const {user, isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently, isLoading} = this?.props?.auth0;
          const LoginButton = () => !isAuthenticated && (<Button onClick={loginWithRedirect}>Login</Button>);
          const LogoutButton = () => isAuthenticated && (<Button color="danger" onClick={logout}>Logout</Button>);
          if (!this.state.permissions.length && !isLoading && isAuthenticated) {
              this.setPath(getAccessTokenSilently)
          }
          const path = this.state.permissions.length && (this.state.permissions.includes('write:visas') ? '/admin' : '/profile')          
    return (
        <Container fluid="xs">
            <Row>
                <Col xs="12">
                    <Navbar >
                    <NavbarBrand href="/">
                        <img src={logo} height="60em" alt="CouplePlaza"></img>
                        </NavbarBrand>
                    <Nav>
                        <NavItem>
                            {!isAuthenticated ? LoginButton() : LogoutButton()}
                        </NavItem>
                        
                        {isAuthenticated && (<NavItem><Button href={path || ''}>{user.name}</Button></NavItem>)}
                        
                    </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default withAuth0(Header);
