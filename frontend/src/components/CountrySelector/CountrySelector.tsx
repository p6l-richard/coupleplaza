import React, { ChangeEvent, useState } from 'react'
import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
  , InputGroup, Input
} from 'reactstrap';
import RemoveButton from './RemoveButton'
import { Country } from '../../global';

export interface CountrySelectorProps {
  countries: Country[]
  , onCountrySelection: (event: React.MouseEvent<any, MouseEvent>, selectedCountry: Country) => void
  , onRemoveSelection: (event: React.MouseEvent<any, MouseEvent>) => void
  , nationality?: Country
  , color?: string
  , size?: string
}
const defaultProps: CountrySelectorProps = {
  color: "outline-dark"
  , countries: [] as Country[]
  , nationality: {} as Country
  , onCountrySelection: () => void (0)
  , onRemoveSelection: () => void (0)
  , size: 'default'
};

const CountrySelector: React.FC<CountrySelectorProps> = (props) => {
  const { countries
    , nationality
    , onCountrySelection
    , onRemoveSelection
    , children
    , ...args
  } = props

  const [filteredCountries, setFilteredCountries] = useState(countries);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const q = event.target.value.toLowerCase() || '';
    const filtered = countries.filter(country => country.name.toLocaleLowerCase().includes(q))
    setFilteredCountries(filtered)
  }
  return (
    <InputGroup className="d-flex justify-content-center">
      <UncontrolledDropdown >
        {nationality?.name && (
          <RemoveButton
            onRemoveSelection={e => onRemoveSelection(e)}
            {...args}
          />
        )}
        <DropdownToggle caret
          active={nationality?.hasOwnProperty('name')}
          {...args}
        >
          {nationality?.name || 'Select Country'}
        </DropdownToggle>
        <DropdownMenu>
          <Input onChange={e => handleFilterChange(e)}
            type="search"
            name="search"
            id="countrySearch"
            placeholder="Type to search"
          />
          {filteredCountries.map(country => {
            return <DropdownItem onClick={e => onCountrySelection(e, country)}>{country.name}</DropdownItem>
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    </InputGroup>
  );
}

CountrySelector.defaultProps = defaultProps

export default CountrySelector
