import React, {Component} from 'react';
import {
    Navbar, Nav, NavbarBrand, NavItem, Button //,NavLink
    , Container, Row, Col
} from 'reactstrap';
import { useAuth0, withAuth0 } from "@auth0/auth0-react";

import logo from '../logo.png';


export interface IAppProps {
    auth0: any
}

class Header extends Component<IAppProps> {
  
    public render() {
        const {user, isAuthenticated, loginWithRedirect, logout} = this.props.auth0;
        const LoginButton = () => !isAuthenticated && (<Button onClick={loginWithRedirect}>Login</Button>);
        const LogoutButton = () => isAuthenticated && (<Button color="danger" onClick={logout}>Logout</Button>);
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
                        
                        {isAuthenticated && (<NavItem><Button href="/admin">{user.name}</Button></NavItem>)}
                        
                    </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default withAuth0(Header);
