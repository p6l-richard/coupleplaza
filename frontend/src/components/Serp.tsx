import * as React from 'react';
import { 
    Container, Row, Col
    , Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText
} from 'reactstrap';

export interface ISerpProps {
}
const cities = [
    {id: '1', name: 'Germany', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: "unlimited", visaCosts:0}
    , {id: '2', name: 'Czech Republic', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: "unlimited", visaCosts:0}
    , {id: '3', name: 'Colombia', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts:0}
    , {id: '4', name: 'Brazil', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts:0}
    , {id: '5', name: 'Mexico', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 180, visaCosts: 22.14}
    , {id: '6', name: 'Argentina', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '7', name: 'Ecuador', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '8', name: 'Serbia', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '9', name: 'Hungary', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: "unlimited", visaCosts: 0}
    , {id: '10', name: 'India', area: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:true, visaStay: 90, visaCosts: 68.63}
    , {id: '11', name: 'Taiwan', area: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '12', name: 'Thailand', area: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 30, visaCosts: 0}
    , {id: '13', name: 'Indonesia', area: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 30, visaCosts: 0}
    , {id: '14', name: 'Australia', area: 'Oceania', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:true, visaStay: 90, visaCosts: 0}
    , {id: '15', name: 'New Zealand', area: 'Oceania', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 26.80}
    , {id: '16', name: 'Russia', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:true, visaStay: 30, visaCosts: 100}
]


function filterAreasOf(cities: any) {
    let areas: any = [];
    cities.forEach((city: any) => {
        if (!areas.includes(city.area)) {
            areas.push(city.area)
        }
    });
    return areas
};

function citiesFor(area: any) {
    return cities
        .filter((city: any) =>  city.area == area)
}

function showVisaRequirement(visaIsRequired: boolean) {
    if (!visaIsRequired) {
        return "No Visa"
    }
    return "Visa"
}

function showVisaCosts(costs: number) {
    return costs + " EUR"
}
function showStayLength(stay: number) {
    return stay
}
const CARDS_PER_ROW = 4;

export default class Serp extends React.Component<ISerpProps> {
  public render() {
    return (
      <Container fluid="xs">
          {filterAreasOf(cities).map((area: any) => {
              return (
                  <Row className="my-6">
                      <Col>
                      <h2 className="text-center">
                          {area}
                      </h2>
                      { Array.from({length: Math.ceil(citiesFor(area).length / CARDS_PER_ROW)}, (x, i) => i).map(function (rowIx: any) {
                            const start = rowIx * CARDS_PER_ROW;
                            const end = start + CARDS_PER_ROW;
                            const citiesByRow = citiesFor(area).slice(start, end)
                            return (
                                    <Row className="my-3">
        
                                    {citiesByRow.map((city: any) => {
                                        return (
                                            <Col xs="3">
                                                <Card inverse>
                                                    <CardImg width="auto" height="200vw" src={city.img}></CardImg>
                                                    <CardImgOverlay>
                                                        <Container>
                                                            <Row>
                                                            <CardTitle><h4>{city.name}</h4></CardTitle>

                                                            </Row>
                                                            <Row>
                                                                <Col xs="1"></Col>
                                                                <Col className="text-center"><h4>🇩🇪</h4></Col>
                                                                <Col className="text-center"><h4>🇧🇷</h4></Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="1" >
                                                                    <Row >🛂</Row>
                                                                    <Row >💲</Row>
                                                                    <Row >⌛</Row>
                                                                </Col>

                                                                <Col >
                                                                    <Row className="d-flex justify-content-center text-center"><CardText><small>{showVisaRequirement(city.visaIsRequired)}</small></CardText></Row>
                                                                    <Row className="d-flex justify-content-center text-center"><CardText><small>{showVisaCosts(city.visaCosts)}</small></CardText></Row>
                                                                    <Row className="d-flex justify-content-center text-center"><CardText ><small>{showStayLength(city.visaStay)}</small></CardText></Row>
                                                                </Col>
                                                                <Col xs="1" className="border-left">
                                                                </Col>
                                                                <Col >
                                                                    <Row className="d-flex justify-content-center text-center"><CardText className="font-weight-light"><small>{showVisaRequirement(city.visaIsRequired)}</small></CardText></Row>
                                                                    <Row className="d-flex justify-content-center text-center"><CardText className="font-weight-light"><small>{showVisaCosts(city.visaCosts)}</small></CardText></Row>
                                                                    <Row className="d-flex justify-content-center text-center"><CardText  className="font-weight-light"><small>{showStayLength(city.visaStay)}</small></CardText></Row>
                                                                </Col>
                                                            </Row>

                                                        </Container>
                                                    </CardImgOverlay>
                                                </Card>
                                            </Col>
                                        )
                                    })}
                                    
                                    </Row>
                            )      
                    })}
                        </Col>
                    </Row>
              )
          })}
      </Container>
    );
  }
}
