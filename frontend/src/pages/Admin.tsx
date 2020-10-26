import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import jwt_decode from 'jwt-decode';
import {
  Table
  , Col
  , Form, FormGroup, Label, Input
  , Button
} from 'reactstrap';
import { Edit, DeleteForever } from '@material-ui/icons';



function Admin() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [visas, setVisas] = useState([{}]);
  const [countries, setCountries] = useState([]);
  
  const { user, getAccessTokenWithPopup } = useAuth0();
  // console.log('USR:',user);
  
  function handleClick(visaId, e) {
    console.log('EVENT:', e)
    e.preventDefault();
    fetch('/api/visas/' + visaId, {method: 'DELETE'})
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {throw new Error('Something went wrong: ' + JSON.stringify(response.json()))}
    })
    .then(jsonResponse => {
      alert('successfully deleted: ' + JSON.stringify(jsonResponse['deleted']));
      alert(JSON.stringify(jsonResponse['visas']))
      setVisas(jsonResponse['visas'])
    })
    .catch(error => alert(error))
  }

  
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenWithPopup({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE!,
          scope: 'read:visas',
        });
        const payload = jwt_decode(token);
        console.log('PAYLOAD:', payload)
        if (payload.permissions.includes('read:visas')) {
          setIsAuthorized(true)
          fetch('/api/visas')
          .then(response => response.json())  
          .then(data => {
            setVisas(data.visas)
          })
          fetch('/api/countries')
          .then(response => response.json())  
          .then(data => {
            setCountries(data.countries)
          })
        };
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  
  const rowDataFor = (row) => Object.keys(row).sort((a, b) => a.length - b.length).map(key => {
    if (key === 'validCountries') {
        return <td>{row[key].map(countryObj => countryObj['name']).join(',')}</td> // we only need the country name for this overview
      }
      
      return <td>{row[key]}</td>
    });
  const editLinkFor = (visa) => <td><a href={'admin/visas/' + visa['id']}><Edit /></a></td>;
  const deleteResource = (visaId) => <td><DeleteForever onClick={(e) => handleClick(visaId, e)} /></td>;
  const rows = visas.map(visa => {
    return (
      <tr id={visa['id']}>
        {deleteResource(visa['id'])}
        {editLinkFor(visa)}
        {rowDataFor(visa)}
      </tr>
    ) 
  });
  const tblHeaders = ['', '','id', 'name', 'costs', 'issuingCountry', 'validCountries', 'issuingCountryId'].map(header => <th>{header}</th>);
  const TableHeader = () => <thead><tr>{tblHeaders}</tr></thead>
  const tbl = <Table><TableHeader /><tbody>{rows}</tbody></Table>
  
  const VisaForm = () => {
    const [visaName, setVisaName] = useState<string>();
    const [validity, setValidity] = useState<number>();
    const [costs, setCosts] = useState<number>();
    const [issuingCountry, setIssuingCountry] = useState<string>();
    const [validCountries, setValidCountries] = useState<any[]>();

    const handleChange = (e) => {
      e.preventDefault();
      console.log(e)
      const {name, value, options} = e.target
      console.log('HANDLING CHANGE:',  name, value, options)
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
      console.log(visaName)
    } 
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('EVENT:', e)
      const jsonBody = JSON.stringify({
        name: visaName
        , validity: validity
        , costs: costs
        , issuingCountry: issuingCountry
        , validCountries: validCountries
      })
      console.log('SEE THE BODY:', jsonBody)
      fetch('/api/visas', {
        method: 'POST'
        , headers: {'Content-Type': 'application/json'}
        , body: jsonBody
      })
        .then(response => {
          if (response.ok) {return response.json()}
          else { console.log(response.json());throw new Error('Error')}
        })
        .then(jsonResponse => {
          alert('successfully added: ' + visaName)
          setVisas(jsonResponse['visas'])
        })
        .catch(error => {
          console.log(error);
          alert('Something went wrong: ' + error.toString())
        })
  
      
    }
    
    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup row>
        <Label sm={{size: 2, offset: 2}} for="name">Visa Name</Label>
        <Col sm={6}>
          <Input required onChange={(e) => handleChange(e)} type="textarea" name="visaName" id="name"></Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={{size: 2, offset: 2}} for="validity">Validity (in days)</Label>
        <Col sm={6}>
          <Input required onChange={(e) => handleChange(e)} type="number" name="validity" id="validity"></Input>     
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={{size: 2, offset: 2}} for="costs">Costs (in €)</Label>
        <Col sm={6}>
          <Input required onChange={(e) => handleChange(e)} type="number" name="costs" id="costs"></Input>     
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={{size: 2, offset: 2}} for="issuingCountry">Select the issuing country</Label>
        <Col sm={6}>
          <Input required onChange={(e) => handleChange(e)} type="select" name="issuingCountry" id="issuingCountry">
            {countries.map(countryObj => <option>{countryObj['name']}</option>)}
          </Input>
        </Col>

      </FormGroup>
      <FormGroup row>
        <Label sm={{size: 2, offset: 2}} for="validCountries">Select the applying countries</Label>
        <Col sm={6}>
          <Input required onChange={(e) => handleChange(e)} type="select" name="validCountries" id="validCountries" multiple>
            {countries.map(countryObj => <option>{countryObj['name']}</option>)}
          </Input>
        </Col>

      </FormGroup>
      <Button>Add Visa</Button>
    </Form>
  )}
  return (
    <div>
      <div>Hello {user.nickname}</div>
      {/* <Button onClick={getToken}>Show Visas</Button> */}
      {isAuthorized && (<div><h1>Add Visa</h1><div>{<VisaForm />}</div></div>)}
      {isAuthorized && (<div><h1>Visas</h1><div>{tbl}</div></div>)}
    </div>
  )
  }


export default Admin;