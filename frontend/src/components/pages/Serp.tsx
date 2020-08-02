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
    staysFilter: string[]
    , regionsFilter: string[]
    , regions: Array<string>
    , data: (string | number | boolean)[][]
    , CARDS_PER_ROW: number
    , metrics: string[]
    , nationalities: string[]
}
const rawData = [
    ['deu', 'europe', 'france', 'unlimited', 0, 'Visa-free']
    , ['deu', 'latin america', 'brazil', 90, 0, 'Visa-free']
    , ['deu', 'oceania', 'australia', 365, 20, 'Visa-free']
    , ['deu', 'europe', 'germany', 'unlimited', 0, 'Visa-free']
    , ['bra', 'europe', 'france', 365, 0, 'Visa-free']
    , ['bra', 'latin america', 'brazil', 'unlimited', 0, 'Visa-free']
    , ['bra', 'oceania', 'australia', 365, 20, 'Visa-free']
    , ['bra', 'europe', 'germany', 90, 0, 'Visa-free']
]

const getRegionsFrom = (data) => {
    return data
            .map(row => row[1])
            .filter((el, ix, col) => col.indexOf(el) === ix)      
};



const CARDS_PER_ROW = 4;
const metrics = ['stay', 'costs', 'visaRequirement'];
const allStays = ["Short (<90d)", "Medium (<120d)", "Long (>120d)"]
const allRegions = ['Europe', 'Latin America', 'Asia', 'Oceania'].map(region => region.toLocaleLowerCase())
const selections = {regions: allStays, staysFilter: allRegions}

function getAllSelections(option: string) {
    return selections[option]
}

export default class Serp extends React.Component<ISerpProps, ISerpState> {
  constructor(props) {
      super(props);
      this.handleStayChange = this.handleStayChange.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.handleRemoveFilter = this.handleRemoveFilter.bind(this);

      this.state = {
          staysFilter: allStays.map(stay => stay.toLowerCase())
          , regionsFilter: allRegions.map(region => region.toLowerCase())
          , regions: getRegionsFrom(rawData).map(region => region.toLowerCase())
          , data: rawData
          , CARDS_PER_ROW: CARDS_PER_ROW
          , metrics: metrics
          , nationalities: ['deu', 'bra']
    }
  }

  
  handleRemoveFilter(event){
      let node = event.target;
      if (!event.target.id) {
          node = event.target.parentNode
        }
        if (node.id === 'region-filter-remove') {
            this.setState({regionsFilter: allRegions})
        } else if (node.id === 'stay-filter-remove') {
            this.setState({staysFilter: allStays})
        }
    }
    
  handleFilterChange(event){
      if (event.target.id === 'region-filter') {
          return this.handleRegionOrStayChange(event, 'regions')
        } else if (event.target.id === 'stay-filter') {
            return this.handleRegionOrStayChange(event, 'staysFilter')
        }
    }
    
    handleStayChange(event){
        let newStays: string[] = [];
        event.target.childNodes.forEach((option: any) => {
            if (option.selected) {
                newStays.push(option.value)
            }
        })
        this.setState({staysFilter: newStays})
    }
    
    handleRegionOrStayChange(event, regionOrStay: string) {
        let newSelections: string[] = [];
        if (!event.target.value) {
            newSelections = getAllSelections(regionOrStay)
        }
        event.target.childNodes.forEach((option: any) => {
            if (option.selected) {
                newSelections.push(option.value.toLowerCase())
            }
        })
        if (regionOrStay === 'regions') {
            return this.setState({regionsFilter: newSelections})
        }
        return this.setState({staysFilter: newSelections})
        
        
    }
    
    
    public render() {
        const nationalities = this.state.nationalities;
        const regionsFilter = this.state.regionsFilter;
        const staysFilter = this.state.staysFilter
        const data = this.state.data;
        const filteredData = data
            .filter(row => nationalities.includes(row[0].toString()))
            .filter(row => regionsFilter.includes(row[1].toString()))

        const regions = getRegionsFrom(filteredData)


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
                    selectedOptions={regionsFilter}
                    onRemoveFilter={this.handleRemoveFilter}
                    
                    />     
                    <p>STAY STATE</p>         
                    <p>{staysFilter}</p>         
                <MultiselectFilter 
                    dataPoint="stay"
                    selectOptions={allStays}
                    onFilterChange={this.handleFilterChange}
                    selectedOptions={staysFilter}
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
            data={filteredData} 
            CARDS_PER_ROW={this.state.CARDS_PER_ROW}
            nationalities={nationalities}
            regions={regions}
            metrics={this.state.metrics}
            />
          
      </Container>
            </div>
    );
  }
}
