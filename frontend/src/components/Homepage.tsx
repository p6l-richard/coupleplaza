import React, {Component} from 'react';
import {
    Container
    , Jumbotron
    , Button
} from 'reactstrap';
import './Homepage.css'

export interface IAppProps {
}

export default class Homepage extends React.Component<IAppProps> {
  public render() {
    return (
        <Container fluid className="App mx-0 px-0">
            
            
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
  
            <Container fluid className="first mx-0 px-0">
                <h2 className="mt-3 mb-5">Why?</h2>
                <p>You know how nomad couples struggle to find common destinations?</p>
                <p className="lead">Well, CouplePlaza finds their next destination by analyzing visa policies &amp; personal preferences.</p>         
            </Container>
            
            <Container fluid className="second mx-0 px-0">
                <h2 className="mt-5 mb-5">Aha, a bit more concrete, please.</h2>
                <p>
                For example, a couple with a Brazilian and German citizenship will get a list of hassle-free destinations to enter and stay.
                </p>
            </Container>


        </Container>
    );
  }
}
