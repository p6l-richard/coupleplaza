import React from 'react'
import {
    Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, CardText
    , ListGroup, ListGroupItem
    , Col
} from 'reactstrap';
import Emoji from "react-emoji-render";
import { Visa, dummyImgs } from '../../global';
// TODO: store image linke somewhere (Maybe return in database?)

export interface CardProps {
    inverse?: boolean
    , visa: Visa
}
const defaultProps: CardProps = {
    inverse: false
    , visa: {} as Visa
}

const VisaCard: React.FC<CardProps> = ({ inverse, visa }) => {
    if (!visa) return <div>No Visa found</div>
    // TODO: exract classNames for sub components to make code more readable
    // TODO: define size of card & image to allow for standard flex-alignment
    return (
        <Col xs="6" >
            <Card inverse={inverse}>
                <CardImg src={dummyImgs[visa.issuingCountry.name.toLowerCase()]} />
                <CardImgOverlay className="d-flex flex-column justify-content-around">
                    <CardTitle
                        className="text-center text-capitalize text-white"
                        children={<h4>{visa.name}</h4>}
                    />
                    <CardSubtitle
                        className="text-center font-weight-bold text-white"
                        children={visa.issuingCountry.name}
                    />
                    <CardText
                        className="text-center text-light"
                        children="Data:"
                    />
                    <ListGroup flush>
                        {["💲", "⏳"].map((emoji, ix) => {
                            const key = ix === 0 ? 'costs' : 'validity';
                            return (
                                <ListGroupItem
                                    color="border border-light text-light bg-transparent"
                                    className="d-flex justify-content-around"
                                    children={CardContent(emoji, visa, key)}
                                />
                            )
                        })}
                    </ListGroup>
                </CardImgOverlay>
            </Card>
        </Col >
    )
}
const CardContent = (emoji, visa, key) => (
    <div>
        <Emoji text={emoji} />
        {visa[key]}
    </div>
)
VisaCard.defaultProps = defaultProps
export default VisaCard