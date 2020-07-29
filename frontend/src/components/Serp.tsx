import * as React from 'react';
import { 
    Container, Row, Col
    , Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText
} from 'reactstrap';
import SerpFilters from './SerpFilters';
import Results from './Results';

export interface ISerpProps {
}
const countries = [
    {id: '1', name: 'Germany', region: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: "unlimited", visaCosts:0}
    , {id: '2', name: 'France', region: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: "unlimited", visaCosts:0}
    , {id: '3', name: 'Colombia', region: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts:0}
    , {id: '4', name: 'Brazil', region: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts:0}
    , {id: '5', name: 'Mexico', region: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 180, visaCosts: 22.14}
    , {id: '6', name: 'Argentina', region: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '7', name: 'Ecuador', region: 'Latin America', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '8', name: 'Serbia', region: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '9', name: 'Hungary', region: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: "unlimited", visaCosts: 0}
    , {id: '10', name: 'India', region: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:true, visaStay: 90, visaCosts: 68.63}
    , {id: '11', name: 'Taiwan', region: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 0}
    , {id: '12', name: 'Thailand', region: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 30, visaCosts: 0}
    , {id: '13', name: 'Indonesia', region: 'Asia', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 30, visaCosts: 0}
    , {id: '14', name: 'Australia', region: 'Oceania', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:true, visaStay: 90, visaCosts: 0}
    , {id: '15', name: 'New Zealand', region: 'Oceania', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:false, visaStay: 90, visaCosts: 26.80}
    , {id: '16', name: 'Russia', region: 'Europe', img: 'https://images.unsplash.com/photo-1571778650221-d1f5627a70ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', visaIsRequired:true, visaStay: 30, visaCosts: 100}
]

const citizenships = ['deu', 'bra']
const CARDS_PER_ROW = 4;

function filterAreasOf(countries: any) {
    let regions: any = [];
    countries.forEach((country: any) => {
        if (!regions.includes(country.region)) {
            regions.push(country.region)
        }
    });
    return regions
};

export default class Serp extends React.Component<ISerpProps> {
  public render() {
    return (
        <div>
      <Container >
          <SerpFilters regions={filterAreasOf(countries)} />              
          
          <hr className="my-6"/>

          <Results regions={filterAreasOf(countries)} cardsPerRow={CARDS_PER_ROW} countries={countries} citizenships={citizenships}/>
          
      </Container>
            </div>
    );
  }
}
