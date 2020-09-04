import React, {Component} from 'react';
import {
    Navbar, Nav, NavbarBrand, NavItem, Button //,NavLink
    , Container, Row, Col
} from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";

import logo from '../logo.png';


export interface IAppProps {
}

export default class Header extends Component<IAppProps> {
    readonly LoginOrLogoutLink = () => {
        const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
        // const loginOrLogoutLink = !isAuthenticated ? '/login' : '/logout';
        const loginOrLogoutString = !isAuthenticated ? 'Login' : 'Logout';
        const logoutWithRedirect = () => 
            logout({
                returnTo: window.location.origin,
            });

        const loginOrLogoutWithRedirect = !isAuthenticated ? loginWithRedirect : logoutWithRedirect;
        return <Button onClick={()=> loginOrLogoutWithRedirect()}>{loginOrLogoutString}</Button>;
    }
  
    public render() {
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
                            <this.LoginOrLogoutLink />
                        </NavItem>
                    </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
  }
}
