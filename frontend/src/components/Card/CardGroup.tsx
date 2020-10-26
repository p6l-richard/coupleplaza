import React from 'react'
import { Visa, Country } from '../../global'
import Card from './Card'
import { Row } from 'reactstrap'

export interface CardGroupProps {
    visas: Visa[]
    , nationality: Country
}
const CardGroup: React.FC<CardGroupProps> = ({ visas }) => {
    let composedCards: JSX.Element[] = [];//will contain composed regionVisaCards region by region
    // Each regionVisaCards[*1] element contains:
    //  - regionHeader[*2]
    //  - regionCards[*3]
    //      - regionCard1
    //      - regionCard2
    //      - ...

    const regions = visas
        .map(visa => visa.issuingCountry.region.name) // get only the region names
        .filter((visa, ix, arr) => arr.indexOf(visa) === ix); //work with unique values to avoid duplication

    regions.forEach(region => {
        const regionVisas = visas.filter(visa => visa.issuingCountry.region.name === region)

        let regionCards: JSX.Element[] = []; // [*3]
        regionVisas.forEach(visa => {
            regionCards.push(
                <Card visa={visa} />
            )
        });
        const regionHeader = <h2>{regionVisas[0].issuingCountry.region.name}</h2>// [*2]
        const regionVisaCards = (// [*1]
            <div>
                <Row className="d-flex justify-content-around my-4">{regionHeader}</Row>
                <Row className="d-flex justify-content-around">{regionCards}</Row>
            </div>
        )
        composedCards.push(regionVisaCards)
    })
    return <div>{composedCards}</div>
}

export default CardGroup