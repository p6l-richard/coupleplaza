import React, { ReactElement } from 'react'
import {
    Container, Row, Col
    , Card, CardImg, CardImgOverlay, CardTitle, CardText
} from 'reactstrap';
import Flag from 'react-world-flags'

interface Props {
    
}
const visas = [
    // {
    //     duration: 90
    //     , costs: 0
    //     , applicationRequired: false
    //     , issuerCountry: 'Colombia'
    //     , issuerIsoCode: 'COL'
    //     , appliesToCountries: ['deu', 'bra']
    //     , visaType: 'Visa-free'
    // },
    // {
    //     duration: 90
    //     , costs: 0
    //     , applicationRequired: false
    //     , issuerCountry: 'Thailand'
    //     , issuerIsoCode: 'THA'
    //     , appliesToCountries: ['deu', 'bra']
    //     , visaType: 'Visa-free'
    // },
    // {
    //     duration: 90
    //     , costs: 0
    //     , applicationRequired: true
    //     , issuerCountry: 'Syria'
    //     , issuerIsoCode: 'SYR'
    //     , appliesToCountries: ['deu', 'bra']
    //     , visaType: 'Tourist Visa'
    // },
    // {
    //     duration: 90
    //     , costs: 0
    //     , applicationRequired: false
    //     , issuerCountry: 'Turkey'
    //     , issuerIsoCode: 'THA'
    //     , appliesToCountries: ['deu', 'bra']
    //     , visaType: 'Visa-free'
    // },
    // {
    //     duration: 90
    //     , costs: 0
    //     , applicationRequired: false
    //     , issuerCountry: 'Czech Republic'
    //     , issuerIsoCode: 'CZE'
    //     , appliesToCountries: ['Germany', 'France', 'Brazil']
    //     , visaType: 'Visa-free'
    // },
    // {
    //     duration: 90
    //     , costs: 0
    //     , applicationRequired: false
    //     , issuerCountry: 'Brazil'
    //     , issuerIsoCode: 'BRA'
    //     , appliesToCountries: ['Germany', 'France']
    //     , visaType: 'Visa-free'
    // },
    {
        duration: 365
        , costs: 99
        , applicationRequired: true
        , issuerCountry: 'France'
        , issuerIsoCode: 'FRA'
        , appliesToCountries: ['deu', 'bra']
        , visaType: 'Residential Visa'
    }
    // {
    //     duration: 1460
    //     , costs: 34.12
    //     , applicationRequired: true
    //     , issuerCountry: 'Mexico'
    //     , issuerIsoCode: 'MEX'
    //     , appliesToCountries: ['deu', 'bra']
    //     , visaType: 'Toursim Visa'
    //     , requiredIncome: 1750
    // }
]
export default function RegionRows(props): ReactElement {
    const rowIxs = Array.from({length:Math.ceil(props.countries.length / props.cardsPerRow)}, (x, i) => i);
    const dataToShow = ['applicationRequired', 'costs', 'duration']
    function show(node: string, citizenship: string, country: string ) {
        const relevantVisas =  visas.filter(visa => {
            return (visa.issuerCountry === country && visa.appliesToCountries.includes(citizenship))
        })
        if (relevantVisas.length < 1) {
            return 'n.a'
        } else if (relevantVisas.length > 1) {
            return 'too many options'
        }
        return relevantVisas[0][node].toString()
    }

    return (
        <div>
            { rowIxs.map(function (rowIx: any) {
                          const start = rowIx * props.cardsPerRow;
                          const end = start + props.cardsPerRow;
                          const countriesByRow = props.countries.slice(start, end)
                          return (
                              <Row className="my-3">
        
                                    {countriesByRow.map((country: any) => {
                                        return (
                                            <Col xs="3">
                                                <Card inverse>
                                                    <CardImg width="auto" height="200vw" src={country.img}></CardImg>
                                                    <CardImgOverlay>
                                                        <Container>
                                                            <Row>
                                                            <CardTitle><h4>{country.name}</h4></CardTitle>

                                                            </Row>
                                                            <Row>
                                                                <Col xs="1"/>
                                                                {props.citizenships.map((citizenship: string) => {
                                                                    return <Col className="text-center"><Flag code={citizenship} height="11" /></Col>
                                                                })}
                                                            </Row>
                                                            <Row>
                                                                <Col xs="1" >
                                                                    <Row >🛂</Row>
                                                                    <Row >💲</Row>
                                                                    <Row >⌛</Row>
                                                                </Col>
                                                                {props.citizenships.map((citizenship: string, ix) => {
                                                                    let divider;
                                                                    if (ix === 0) {
                                                                        divider = <Col xs="1" className="border-left" />
                                                                    }
                                                                    return (
                                                                        <Col>
                                                                            {dataToShow.map((dataPoint: string) => {
                                                                                return (
                                                                                    <Row className="d-flex justify-content-center text-center">
                                                                                        <CardText><small>{show(dataPoint, citizenship, country.name)}</small></CardText>
                                                                                    </Row>
                                                                                )
                                                                            })}
                                                                        </Col>
                                                                    )
                                                                })}
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
        </div>
    )
}
