import React, { ReactElement } from 'react'
import {Row, Col} from 'reactstrap';
import FilterSelector from './FilterSelector';
import CountrySelector from './CountrySelector';

interface Props {
    
}

function SerpFilters(props): ReactElement {
    return (
        <Row>
            <Col className="d-flex justify-content-start">
                <FilterSelector regions={props.regions} />
            </Col>
            <Col className="d-flex flex-row justify-content-around align-items-center">
                <small className="font-weight-light">Showing results for...</small>
                <CountrySelector country="Germany" />
                <CountrySelector country="Brazil" />
            </Col>    
        </Row>
    )
}

export default SerpFilters
