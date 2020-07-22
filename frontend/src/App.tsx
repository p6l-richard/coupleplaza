import React from 'react';
import {
  Navbar, Nav, NavbarBrand, NavItem, NavLink, 
  Jumbotron,
  Container, Row,
  Button
} from 'reactstrap';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="content">
      <Navbar>
        <NavbarBrand href="/">
          <img src={logo} height="80vh" alt="CouplePlaza"></img>
          </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Jumbotron fluid>        
          <h1 className="display-2">
            Hello, CouplePlaza
          </h1>
          <p className="lead">
          Find your next nomad destination
          </p>
          <p className="lead">
            <Button size="lg" color="info">Tell us your citizenships</Button>
          </p>
          <p>Designed for international couple with different citizenships.</p>
      </Jumbotron>

      <section className="first">
        <h2 className="mt-3">Why?</h2>
        <p>You know how nomad couples struggle to find common destinations?</p>
        <p className="lead">Well, CouplePlaza finds their next destination by analyzing visa policies &amp; personal preferences.</p>         
      </section>
      
      <section className="second">
        <h2 className="mt-5">Aha, a bit more concrete, please.</h2>
        <p>
          For example, a couple with a Brazilian and German citizenship will get a list of hassle-free destinations to enter and stay.
        </p>
      </section>

       
    </div>
  );
}

export default App;
