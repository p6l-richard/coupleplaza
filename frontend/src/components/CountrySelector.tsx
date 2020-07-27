import React, { Component } from 'react'
import { 
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
    , InputGroup, Input
} from 'reactstrap';


interface Props {
    
}
interface State {
    
}

export default function CountrySelector(props: any) {
    // state = {}

    
        return (
            <div>
              <InputGroup>
                <UncontrolledDropdown >
                  <DropdownToggle caret size="lg"  color="primary">
                    {props.country}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Input 
                      type="search"
                      name="search"
                      id="countrySearch"
                      placeholder="Type to search country"
                    />
                    <DropdownItem active>Germany</DropdownItem>
                    <DropdownItem>Brazil</DropdownItem>
                    <DropdownItem>USA</DropdownItem>
                    <DropdownItem>France</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </InputGroup>
            </div>
          );
}
