import React, { ReactElement } from 'react'
import {Row, Col} from 'reactstrap';
import RegionRows from './RegionRows'

interface Props {
    
}


export default function Results(props): ReactElement {
    function countriesFor(region: any) {
        return props.countries
            .filter((country: any) =>  country.region == region)
    }
    return (
        <div>
            {props.regions.map((region: any) => {
              return (
                  <Row className="my-6">
                      <Col>
                        <h2 className="text-center">
                            {region}
                        </h2>
                        <RegionRows countries={countriesFor(region)} cardsPerRow={props.cardsPerRow} citizenships={props.citizenships} />
                        </Col>
                    </Row>
              )
            })}
            
        </div>
    )
}
