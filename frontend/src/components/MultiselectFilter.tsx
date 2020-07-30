import React, { ReactElement, useState } from 'react'
import { 
    ButtonDropdown, DropdownToggle, DropdownMenu
    , Input, Form
    , Button,
    ButtonGroup
} from 'reactstrap'
import {Close} from '@material-ui/icons'

interface Props {
    selectOptions: string[]
    , selectedOptions: string[]
    , dataPoint: "region" | "stay"
    , onRemoveFilter: (event: any) => void
    , onFilterChange: (event: any) => void
    
}

function MultiselectFilter(props: Props): ReactElement {    
    const [dropdownOpen, toggleDropdownOpen] = useState(false);
    const handleToggle = () => toggleDropdownOpen(prevState => !prevState)


    
    return (
        <ButtonGroup>
            {props.selectedOptions.length < props.selectOptions.length &&
                <Button id={props.dataPoint + "-filter-remove"} size="sm" outline onClick={props.onRemoveFilter}>
                    <Close id={props.dataPoint + "-filter-remove"}/>    
                </Button>
            }
            <ButtonDropdown isOpen={dropdownOpen} toggle={handleToggle} >
                <DropdownToggle outline caret active={props.selectedOptions.length < props.selectOptions.length}>
                    {props.dataPoint[0].toUpperCase() + props.dataPoint.slice(1)}
                </DropdownToggle>
                
                <DropdownMenu>
                    <Form onChange={props.onFilterChange}>
                        <Input type="select" id={props.dataPoint + "-filter"} bsSize="sm" multiple>
                            {props.selectOptions.map((region: any) => <option selected={props.selectedOptions.includes(region)}>{region}</option>)}
                        </Input>
                    </Form>
                </DropdownMenu>
            </ButtonDropdown>
        </ButtonGroup>
    )
}

export default MultiselectFilter
