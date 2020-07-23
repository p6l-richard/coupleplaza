import * as React from 'react';
import { 
    Container, Row, Col
    , Card, CardBody, CardTitle
} from 'reactstrap';

export interface ISerpProps {
}
const cities = [
    {id: '1', name: 'Berlin', area: 'Europe'}
    , {id: '2', name: 'Prague', area: 'Europe'}
    , {id: '3', name: 'Medellin', area: 'Latin America'}
    , {id: '4', name: 'Rio de Janeiro', area: 'Latin America'}
    , {id: '5', name: 'Mexico City', area: 'Latin America'}
    , {id: '6', name: 'Buenos Aires', area: 'Latin America'}
    , {id: '7', name: 'Cuenca', area: 'Latin America'}
    , {id: '8', name: 'Belgrade', area: 'Europe'}
    , {id: '9', name: 'Budapest', area: 'Europe'}
    , {id: '10', name: 'Bengaluru', area: 'Asia'}
    , {id: '11', name: 'Taipei', area: 'Asia'}
    , {id: '12', name: 'Phuket', area: 'Asia'}
    , {id: '13', name: 'Hobart', area: 'Oceania'}
    , {id: '14', name: 'Queenstown', area: 'Oceania'}
    , {id: '15', name: 'Brisbane', area: 'Oceania'}
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

export default class Serp extends React.Component<ISerpProps> {
  public render() {
    return (
      <Container fluid="xs">
          {filterAreasOf(cities).map((area: any) => {
              return (
                  <Row>
                      <Col>
                      <h2 className="text-center">
                          {area}
                      </h2>
                      <Row>

                      {citiesFor(area).map((city: any) => {
                          return (
                              <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle>{city.name}</CardTitle>
                                    </CardBody>
                                </Card>
                              </Col>
                          )
                        })}
                        </Row>
                      </Col>
                  </Row>
              )

          }
          )}
      </Container>
    );
  }
}
