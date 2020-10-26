import React, { useState } from 'react';
import {
    Col, Row
} from 'reactstrap';
import { Visa, Country } from '../../global';
import Flag from 'react-world-flags';
import CardGroup from '../../components/Card/CardGroup'
import CountrySelector from '../../components/CountrySelector/CountrySelector';

export interface SplitSerpProps {
    visas: Visa[]
    , countries: Country[]
}

const SplitSerp: React.FC<SplitSerpProps> = ({ visas, countries }) => {
    const [nationality, setNationality] = useState({} as Country);
    const onCountrySelection = (event: React.MouseEvent<any, MouseEvent>, selectedCountry: Country) => {
        setNationality(countries.filter(country => country.name === selectedCountry.name)[0])
    }
    const onRemoveSelection = (event: React.MouseEvent<any, MouseEvent>) => setNationality({} as Country)
    return (
        <Col xs={12}>
            <Row className="my-2">
                <CountrySelector
                    onCountrySelection={onCountrySelection}
                    onRemoveSelection={onRemoveSelection}
                    nationality={nationality}
                    countries={countries}
                />
            </Row>
            {Object.keys(nationality).length > 0 &&
                <Row className="d-flex justify-content-center my-2">
                    <Flag code={nationality.isoCode3} height="70" />
                </Row>}
            <Row className="border" />
            <CardGroup visas={visas} nationality={nationality} />
        </Col>
    )
}



export default SplitSerp