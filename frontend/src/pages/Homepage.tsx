import React, {Component} from 'react';
import {
    Container, Row, Col
    , Jumbotron
    , Button
} from 'reactstrap';

export interface IAppProps {
}


// Custom styles for the Homepage component are applied because Bootstrap has no Utilities for them.
const jumbotronWrapperStyle = {
    height: "100vh"
}
const jumbotronBackgroundStyle = {
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),url('https://images.unsplash.com/photo-1509728471135-2d3b72d6e05f')  center center / cover no-repeat"
}


export default class Homepage extends React.Component<IAppProps> {
  public render() {
    return (
        <Container fluid="xs" className="hp">
        
        
            <Row>
                <Col style={jumbotronWrapperStyle}>
                    <Jumbotron style={jumbotronBackgroundStyle} className="d-flex flex-column justify-content-center h-100 text-white">        
                        <h1 className="display-2">
                        Hello, CouplePlaza
                        </h1>
                        <p className="lead">
                        Find your next nomad destination
                        </p>
                        <p className="lead">
                        <Button size="lg" color="info" href="/cities">Tell us your citizenships</Button>
                        </p>
                        <p>Designed for international couple with different citizenships.</p>
                    </Jumbotron>
                </Col>
            </Row>
  
            <Row>
                <Col >
                    <h2 className="mt-5 mb-5">Why?</h2>
                    <p>You know how nomad couples struggle to find common destinations?</p>
                    <p className="lead">Well, CouplePlaza finds their next destination by analyzing visa policies &amp; personal preferences.</p>         
                </Col>
            </Row>
            
            <Row className="bg-light">
                <Col >
                    <h2 className="mt-5 mb-5">Aha, a bit more concrete, please.</h2>
                    <p>
                    For example, a couple with a Brazilian and German citizenship will get a list of hassle-free destinations to enter and stay.
                    </p>
                </Col>
            </Row>


        </Container>
    );
  }
}
