import * as React from 'react';
import { 
    Container, Row, Col
    , Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText
} from 'reactstrap';
// import SerpFilters from './SerpFilters';
import Results from '../Results';
import MultiselectFilter from '../MultiselectFilter';
import CountrySelector from '../CountrySelector'

export interface ISerpProps {
}
export interface ISerpState {
    stays: Array<string>
    , regions: Array<string>
    , costs: boolean
    , visaRequirements: boolean
    , dropdownOpen: boolean
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
const allStays = ["Short (<90d)", "Medium (<120d)", "Long (>120d)"]
const allRegions = ['Europe', 'Latin America', 'Asia', 'Oceania']
const selections = {regions: allStays, stays: allRegions}
const COUNTRY_SELECTOR_SIZE = 6

function getAllSelections(option: string) {
    return selections[option]
}
function filterAreasOf(countries: any) {
    let regions: any = [];
    countries.forEach((country: any) => {
        if (!regions.includes(country.region)) {
            regions.push(country.region)
        }
    });
    return regions
};

export default class Serp extends React.Component<ISerpProps, ISerpState> {
  constructor(props) {
      super(props);
      this.handleStayChange = this.handleStayChange.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.handleCostsChange = this.handleCostsChange.bind(this);
      this.handleVisaRequirementsChange = this.handleVisaRequirementsChange.bind(this);
      this.handleRemoveFilter = this.handleRemoveFilter.bind(this);

      this.state = {
          stays: allStays
          , regions: filterAreasOf(countries)
          , costs: false
          , visaRequirements: false 
          , dropdownOpen: false
    }
  }


  handleRemoveFilter(event){
      let node = event.target;
      if (!event.target.id) {
          console.log(event.target.parendNode)
          node = event.target.parentNode
        }
        console.log(node)
    if (node.id === 'region-filter-remove') {
        this.setState({regions: allRegions})
    } else if (node.id === 'stay-filter-remove') {
        this.setState({stays: allStays})
    }
  }

  handleFilterChange(event){
      if (event.target.id === 'region-filter') {
          return this.handleRegionOrStayChange(event, 'regions')
      } else if (event.target.id === 'stay-filter') {
          return this.handleRegionOrStayChange(event, 'stays')
      } else if (event.target.id === 'cost-filter') {
          return this.handleCostsChange(event)
      } else if (event.target.id === 'visaRequirement-filter') {
          return this.handleVisaRequirementsChange(event)
      }
  }

  handleStayChange(event){
    let newStays: string[] = [];
    event.target.childNodes.forEach((option: any) => {
        if (option.selected) {
            newStays.push(option.value)
        }
    })
      this.setState({stays: newStays})
    }

    handleRegionOrStayChange(event, regionOrStay: string) {
        let newSelections: string[] = [];
        if (!event.target.value) {
            newSelections = getAllSelections(regionOrStay)
        }
        event.target.childNodes.forEach((option: any) => {
            if (option.selected) {
                newSelections.push(option.value)
            }
        })
        if (regionOrStay === 'regions') {
            return this.setState({regions: newSelections})
        }
        return this.setState({stays: newSelections})


    }

    handleCostsChange(event){
        this.setState({costs: event.target.checked.toString()})      
    }
    handleVisaRequirementsChange(event){
        this.setState({visaRequirements: event.target.checked.toString()})
  }

    public render() {
    return (
        <div>
      <Container >
        <Row>
            <Col className="d-flex flex-row justify-content-around">
                <small className="font-weight-light d-flex align-items-center">Showing results for...</small>
                <MultiselectFilter 
                    dataPoint="region"
                    selectOptions={allRegions}
                    onFilterChange={this.handleFilterChange}
                    selectedOptions={this.state.regions}
                    onRemoveFilter={this.handleRemoveFilter}

                    />              
                <MultiselectFilter 
                    dataPoint="stay"
                    selectOptions={allStays}
                    onFilterChange={this.handleFilterChange}
                    selectedOptions={this.state.stays}
                    onRemoveFilter={this.handleRemoveFilter}

                    />              
            </Col>
            <Col className="d-flex flex-row justify-content-around align-items-center">
                <small className="font-weight-light">Choose your nationalities</small>
                <CountrySelector country="Germany" />
                <CountrySelector country="Brazil" />
            </Col>
        </Row>
          
          <hr className="my-6"/>

          <Results 
            cardsPerRow={CARDS_PER_ROW}
            countries={countries}
            citizenships={citizenships}
            stays={this.state.stays}
            regions={this.state.regions}
            costs={this.state.costs}
            visaRequirements={this.state.visaRequirements}
            />
          
      </Container>
            </div>
    );
  }
}
