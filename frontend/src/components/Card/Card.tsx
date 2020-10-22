import React from 'react'
import {
    Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, CardText
    , ListGroup, ListGroupItem
    , Col
} from 'reactstrap';
import Emoji from "react-emoji-render";
import Flag from 'react-world-flags'
import { Visa, Country, dummyImgs } from '../../global';
// TODO: store image linke somewhere (Maybe return in database?)

export interface CardProps {
    inverse: boolean
    , visa: Visa
    , nationality: Country
}
const defaultProps: CardProps = {
    inverse: false
    , visa: {} as Visa
    , nationality: {} as Country
}

const VisaCard: React.FC<CardProps> = ({ inverse, visa, nationality }) => {
    if (!visa) return <div>No Visa found</div>
    // TODO: exract classNames for sub components to make code more readable

    return (
        <Col xs="6" >
            <Card inverse={inverse}>
                <CardImg src={dummyImgs[visa.issuingCountry.toLowerCase()]}></CardImg>
                <CardImgOverlay className="d-flex flex-column justify-content-around">
                    <CardTitle className="text-center text-capitalize text-white"><h4>{visa.name}</h4></CardTitle>
                    <CardSubtitle className="text-center font-weight-bold text-white">{visa.issuingCountry}</CardSubtitle>
                    <br />
                    <CardText className="text-center text-light">
                        <span>Data: </span>
                        {nationality && <Flag className="align-self-center" code={nationality.isoCode3} height="20" />}
                    </CardText>

                    <ListGroup flush>
                        {["💲", "⏳"].map((emoji, ix) => {
                            return (
                                <ListGroupItem
                                    color="border border-light text-light bg-transparent"
                                    className="d-flex justify-content-around"
                                >
                                    <Emoji text={emoji} />
                                    {ix === 0 ? visa.costs : visa.validity}
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                </CardImgOverlay>
            </Card>
        </Col >
    )
}
VisaCard.defaultProps = defaultProps
export default VisaCard