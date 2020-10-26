import React, { ReactElement } from 'react'
import {
    Row, Col
} from "reactstrap";
import Flag from 'react-world-flags'
import Emoji from "react-emoji-render";

interface Props {
    nationalities: string[]
    , destination: string
    , metrics: string[]
    , data: (number | string)[][]

}

const metricHeaders = {
    visaRequirement: <Emoji text="🛂" />
    , costs: <Emoji text="💲" />
    , stay: <Emoji text="⏳" />
}


const parseVisaDataFrom = (data) => {
    let obj = {};
    data.forEach(row => {
        console.log(row)
        const nationality = row[0]
        const destination = row[2]
        if (!obj[nationality]) {
            obj[nationality] = {}
        }
        if (!obj[nationality][destination]) {
            obj[nationality][destination] = {}
        }
        obj[nationality][destination] = {
            stay: row[3]
            , costs: row[4]
            , visaRequirement: row[5]
            , img: row[6]
        }
    });
    return obj

}

export default function ComparisonTable(props: Props): ReactElement {
    const visaData = parseVisaDataFrom(props.data)

    const comparisonTableHeader = (
        <Row>
            <Col xs="1" />
            {props.nationalities.map((nationality: string) => {
                return (
                    <Col className="text-center"><Flag code={nationality} height="11" /></Col>
                )
            })}
        </Row>
    )
    const metricDataRow = (metric: string, nationalities: string[], destination: string) => {
        return (
            <Row>
                <Col xs="1">{metricHeaders[metric]}</Col>
                {nationalities.map((nationality: string) => {
                    return <Col><small>{visaData[nationality][destination][metric]}</small></Col>
                })}
            </Row>
        )
    }


    return (
        <div>
            {comparisonTableHeader}
            {props.metrics.map((metric: string, ix: number) => {
                return metricDataRow(metric, props.nationalities, props.destination)
            })}
        </div>
    )
}
