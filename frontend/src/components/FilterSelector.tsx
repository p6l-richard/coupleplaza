import React, { ReactElement } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { 
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
    , InputGroup, FormGroup, Form, Label, Input, CustomInput
    , Row, Col
    , 
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
                        <FormGroup className="d-flex flex-inline">
                            {stayOptions.map((stayOption: any) => {
                                return <Label className="pl-5"><Input type="checkbox" id="some-id"  />{stayOption}</Label>
                                
                            })}
                        </FormGroup>
                    </Form>
                    <Form>
                        <DropdownItem header>Regions</DropdownItem>
                        <FormGroup className="d-flex flex-inline" >
                                {props.regions.map((region: any) => {
                                    return <Label className="pl-5" ><Input  type="checkbox" id="some-id" />{region}</Label> 
                                })}
                        </FormGroup>
                    </Form>
                    <Form>
                        <DropdownItem header>Costs</DropdownItem>
                        <FormGroup className="d-flex flex-inline">
                                <Label className="pl-5"><Input type="checkbox" id="exampleCustomCheckbox" />Free</Label>
                        </FormGroup>
                    </Form>
                    <Form>
                        <DropdownItem header>Visa Required</DropdownItem>
                        <FormGroup className="d-flex flex-inline">
                                <Label className="pl-5"><Input type="checkbox" id="exampleCustomCheckbox" />No Visa or on-arrival</Label>
                        </FormGroup>
                    </Form>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </InputGroup>
        </div>
    )
}
