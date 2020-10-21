import React from 'react';
import {
    Navbar, Nav, NavbarBrand, NavItem, Button
} from 'reactstrap';
import logo from '../../logo.png';



export interface HeaderProps {
    user: any
    , isLoading: boolean
    , loginWithRedirect: () => void
    , logout: () => void
    , handlePrivateAreaClick: (event: any) => void
}

const Header: React.FC<HeaderProps> = ({ user, loginWithRedirect, logout, isLoading, handlePrivateAreaClick }) => {
    if (isLoading) {
        return (<Navbar>
            <NavbarBrand href="/">
                <img src={logo} height="60em" alt="CouplePlaza"></img>
            </NavbarBrand>
            <Nav>Logging you in...</Nav>
        </Navbar>)
    }
    return (
        <Navbar>
            <NavbarBrand href="/">
                <img src={logo} height="60em" alt="CouplePlaza"></img>
            </NavbarBrand>
            {user ? (
                <Nav>
                    <NavItem>
                        <Button color="primary" onClick={handlePrivateAreaClick}>{user.email}</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="danger" onClick={logout}>Logout</Button>
                    </NavItem>
                </Nav>
            ) : (
                    <Nav>
                        <NavItem>
                            <Button color="link" onClick={loginWithRedirect}>Sign In</Button>
                        </NavItem>
                        <NavItem>
                            <Button color="primary" onClick={loginWithRedirect}>Sign Up</Button>
                        </NavItem>
                    </Nav>
                )}
        </Navbar >
    )
}

export default Header
