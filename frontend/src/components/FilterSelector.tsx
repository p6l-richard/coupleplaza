import React, { ReactElement } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { 
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
    , InputGroup
    , Row, Col
    , FormGroup, Form, Label, CustomInput
} from 'reactstrap';

interface Props {
    
}
const stayOptions = ["Short (<90d)", "Medium (<120d)", "Long (>120d)"]

export default function FilterSelector(props): ReactElement {
    return (
        <div>
            <InputGroup>
                <UncontrolledDropdown >
                  <DropdownToggle  outline color="secondary">
                    Add filter <AddIcon />
                  </DropdownToggle>
                  <DropdownMenu >
                    <Form>
                        <DropdownItem header>Stay</DropdownItem>
                        <FormGroup className="d-flex flex-inline align-items-stretch">
                            {stayOptions.map((stayOption: any) => {
                                return <Col><CustomInput type="checkbox" id="some-id" label={stayOption} /></Col>
                                
                            })}
                        </FormGroup>
                    </Form>
                    <Form>
                        <DropdownItem header>Regions</DropdownItem>
                        <FormGroup className="d-flex flex-inline align-items-stretch">
                                {props.regions.map((region: any) => {
                                    return <Col><CustomInput type="checkbox" id="some-id" label={region}  /></Col>
                                })}
                        </FormGroup>
                    </Form>
                    <Form>
                        <DropdownItem header>Costs</DropdownItem>
                        <FormGroup className="d-flex flex-inline align-items-stretch">
                                <Col><CustomInput type="checkbox" id="exampleCustomCheckbox" label="Free"  /></Col>
                        </FormGroup>
                    </Form>
                    <Form>
                        <DropdownItem header>Visa Required</DropdownItem>
                        <FormGroup className="d-flex flex-inline align-items-stretch">
                                <Col><CustomInput type="checkbox" id="exampleCustomCheckbox" label="Visa-free &amp; on-arrival only"  /></Col>
                        </FormGroup>
                    </Form>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </InputGroup>
        </div>
    )
}
