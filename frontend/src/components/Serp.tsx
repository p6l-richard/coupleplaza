import * as React from 'react';
import { 
    Container, Row, Col
    , Card, CardBody, CardTitle
} from 'reactstrap';

export interface ISerpProps {
}
const cities = [
    {id: '1', name: 'Berlin', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '2', name: 'Prague', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '3', name: 'Medellin', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '4', name: 'Rio de Janeiro', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '5', name: 'Mexico City', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '6', name: 'Buenos Aires', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '7', name: 'Cuenca', area: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '8', name: 'Belgrade', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '9', name: 'Budapest', area: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '10', name: 'Bengaluru', area: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '11', name: 'Taipei', area: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '12', name: 'Phuket', area: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '13', name: 'Hobart', area: 'Oceania', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '14', name: 'Queenstown', area: 'Oceania', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
    , {id: '15', name: 'Brisbane', area: 'Oceania', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
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
                                                <Card>
                                                    <CardBody>
                                                        <CardTitle>{city.name}</CardTitle>
                                                    </CardBody>
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
