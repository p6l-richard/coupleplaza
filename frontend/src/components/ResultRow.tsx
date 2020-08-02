import React, { ReactElement } from 'react'
import {
    Card, CardImg, CardImgOverlay, CardTitle, CardText
    , Col, Row
} from 'reactstrap'
import ComparisonTable from "./ComparisonTable";

interface Props {
    CARDS_PER_ROW: number
    rowDestinations: string[]
    , nationalities: string[]
    , metrics: string[]    
    , data: (string | number) [][]
}

const imgs = {
    germany: 'https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
    , france: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
    , brazil: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1098&q=80'
    , australia: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
}


export default function ResultRow(props: Props): ReactElement {    
    const cards = props.rowDestinations.map((destination: string) => {
        return (
            <Col xs={(12 / props.CARDS_PER_ROW).toString()}>
            <Card inverse>
                <CardImg width="auto" height="200vw" src={imgs[destination]}></CardImg>
                <CardImgOverlay>
                    <CardTitle><h4>{destination[0].toUpperCase() + destination.slice(1)}</h4></CardTitle>
                    <ComparisonTable 
                        nationalities={props.nationalities}
                        destination={destination}
                        metrics={props.metrics}
                        data={props.data}
                        />
                </CardImgOverlay>
            </Card>
            </Col>
        )
    })

    return (
        <Row>
            {cards}
        </Row>
    )
}
