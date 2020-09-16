import React, { ReactElement, useEffect, useState } from 'react'
import {
    Table
    , Col
    , Form, FormGroup, Label, Input
    , Button
  } from 'reactstrap';

interface Props {
    
}

function getIdFromPath() {
    return window.location.pathname.split('/').slice(-1)[0]
}
export default function EditVisa({}: Props): ReactElement {
    const VisaForm = () => {
        useEffect(() => {
            (async () => {
                const id = getIdFromPath()
                if (id) {
                    fetch('/api/visas/' + id, {method: 'GET'})
                    .then(response => {
                        if (response.ok) {return response.json()}
                        else {
                            console.log(response.json())
                            throw new Error('Something went wrong when requesting ' + id)}
                        })
                        .then(jsonResponse => {
                            setVisaName(jsonResponse.visa.name)
                            setCosts(jsonResponse.visa.costs)
                            setValidity(jsonResponse.visa.validity)
                            setIssuingCountry(jsonResponse.visa.issuingCountry)
                            setValidCountries(jsonResponse.visa.validCountries.map(obj => obj.name))
                        })
                        .catch(error => {console.log(error); alert('ERROR')})
                        fetch('/api/countries', {method: 'GET'})
                        .then (response => {
                            if (response.ok) {return response.json()}
                            else {
                                console.log(response.json())
                                throw new Error('Something went wrong when requesting countries')
                            }
                        })
                        .then(jsonResponse => setCountries(jsonResponse['countries']))
                    }
                    
                    
                    
                })();
            }, []);
            const [visaName, setVisaName] = useState<string>();
            const [costs, setCosts] = useState<number>();
            const [validity, setValidity] = useState<number>();
            const [issuingCountry, setIssuingCountry] = useState<string>();
            const [validCountries, setValidCountries] = useState<Array<string>>();
            const [countries, setCountries] = useState<Array<string>>();
            const handleSubmit = (e) => {
                e.preventDefault();
                const visa = {
                    name: visaName
                    , costs: costs
                    , validity: validity
                    , issuingCountry: issuingCountry
                    , validCountries: validCountries
                }
                alert('submitting: ' + JSON.stringify(visa))
                const id = getIdFromPath();
                fetch('/api/visas/' + id, {
                    method: 'PATCH'
                    , headers: {'Content-Type': 'application/json'}
                    , body: JSON.stringify(visa)
                })
                .then(response => {
                    if (response.ok) {return response.json()}
                    else {console.log(response.json()); throw new Error('Something went on the server wrong when updating: ' + JSON.stringify(visa) )}
                })
                .then(jsonResponse => {
                    setVisaName(jsonResponse.updated.name)
                    setCosts(jsonResponse.updated.costs)
                    setValidity(jsonResponse.updated.validity)
                    setIssuingCountry(jsonResponse.updated.issuingCountry)
                    setValidCountries(jsonResponse.updated.validCountries.map(obj => obj.name))
                })
                .catch(error => {console.log(error); throw new Error('Something went wrong on the backend when updating visa')})
            }
            const handleChange = (e) => {
                e.preventDefault();
                const {name, value, options} = e.target
                switch (name) {
                    case 'visaName':
                        setVisaName(value)
                        break;
                    case 'validity':
                        setValidity(value)
                        break;
                    case 'costs':
                        setCosts(value)
                        break;
                    case 'issuingCountry':
                        setIssuingCountry(value)
                    break;
                    case 'validCountries':
                        let values: string[] = [];
                        for (let option of options) {
                            if (option['selected']) {values.push(option['value'])}
                        }
                        setValidCountries(values)
                        break;
                }
            }
            return (

                <Form onSubmit={e => handleSubmit(e)} key="visaForm">
                <FormGroup row key="nameInputRow">
                    <Label sm={{size: 2, offset: 2}} for="name">Visa Name</Label>
                    <Col sm={6}>
                    <Input required onChange={(e) => handleChange(e)} type="textarea" name="visaName" key="name" value={visaName || ''}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row key="nameValidityRow">
                    <Label sm={{size: 2, offset: 2}} for="validity">Validity (in days)</Label>
                    <Col sm={6} key="validityInputCol">
                    <Input required onChange={(e) => handleChange(e)} type="number" name="validity" key="validity" value={validity || ''}></Input>     
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={{size: 2, offset: 2}} for="costs">Costs (in €)</Label>
                    <Col sm={6}>
                    <Input required onChange={(e) => handleChange(e)} type="number" name="costs" key="costs" value={costs || ''}></Input>     
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={{size: 2, offset: 2}} for="issuingCountry">Select the issuing country</Label>
                    <Col sm={6}>
                    <Input required onChange={(e) => handleChange(e)} type="select" name="issuingCountry" key="issuingCountry" value={issuingCountry || ''}>
                        {countries?.map(countryObj => <option key={countryObj['name'] + 'Key'}>{countryObj['name']}</option>)}
                    </Input>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label sm={{size: 2, offset: 2}} for="validCountries">Select the applying countries</Label>
                    <Col sm={6}>
                    <Input required onChange={(e) => handleChange(e)} type="select" name="validCountries" key="validCountries" value={validCountries || []} multiple>
                        {countries?.map(countryObj => <option key={countryObj['name'] + 'Option'}>{countryObj['name']}</option>
                            )
                        }
                    </Input>
                    </Col>

                </FormGroup>
                <Button>Update Visa</Button>
            </Form>
        )}
    return (
        <div>
            <h1>Visa</h1>
            <VisaForm />
            
            
        </div>
    )
}
