import React, {Component} from 'react';
import {
    Navbar, Nav, NavbarBrand, NavItem, NavLink
    , Container, Row, Col
} from 'reactstrap';
import logo from '../logo.png';


export interface IAppProps {
}

export default class Header extends Component<IAppProps> {
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
                        <NavLink href="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
  }
}
