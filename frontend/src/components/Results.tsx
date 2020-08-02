import React, { ReactElement } from 'react'
import {Row, Container} from 'reactstrap';
import ResultRow from './ResultRow';

interface Props {
    
}


export default function Results(props): ReactElement {
    function getDestinationsFor(region: string) {
        return props.data
            .filter(row => row[1] === region)
            .map(row => row[2])
            .filter((destination, ix, col) =>  col.indexOf(destination) === ix)
    }

    const results = props.regions.map((region: string) => {
        const rowIxs = Array.from({length:Math.ceil(getDestinationsFor(region).length / props.CARDS_PER_ROW)}, (x, i) => i);
        
        return (
            <Container fluid>
                <h2>{region}</h2>
                {rowIxs.map((rowIx: number) => {
                    const start = rowIx * props.CARDS_PER_ROW
                    const end = start + props.CARDS_PER_ROW
                    const rowDestinations = getDestinationsFor(region).slice(start, end)
                    return (
                        <Row>
                            <ResultRow 
                                CARDS_PER_ROW={props.CARDS_PER_ROW}
                                rowDestinations={rowDestinations}
                                metrics={props.metrics}
                                nationalities={props.nationalities}
                                data={props.data}
                                />
                        </Row>
                    )
                })
                }
            </Container>
        )
    })

    return (
        <div>
            {results}
        </div>
    )
}
