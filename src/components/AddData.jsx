
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {Container,Form, FormGroup, Input, Label,Col, Button, Alert} from "reactstrap";

import {getDatabaseTypes} from '../services/sourceService';

const AddData = () =>{

  let formData = {};

  const { handleSubmit, control, reset } = useForm({mode: 'onSubmit'});
  const [databaseTypes, updateDatabaseTypes] = useState([]);
  let databasekeys = [];

    useEffect(() => {
    try {
      const response =  getDatabaseTypes();
      updateDatabaseTypes(response);
    } catch (e) {
      // toast.error("Network Error");
      <Alert color="danger">Error</Alert>
    }
  },[]);

  databasekeys = databaseTypes.map(i => {return(i.label)});
  console.log(databasekeys);

  return(
    <Container
    style={{ marginLeft: "100px", width: "80%", marginTop: "30px" }}>
    <h2 style={{fontFamily: 'fantasy'}}>Add DataSource</h2>

    <Form>
    <FormGroup row style={{margin: '20px'}}>
      <Label sm={2}>ID</Label>
      <Col sm={10}>
        <Input type="number" name="ID" id="ID" placeholder="Enter ID Here" style={{borderColor: 'yellowgreen'}}/>
      </Col>
    </FormGroup>
    <FormGroup row style={{margin: '20px'}}>
      <Label sm={2}>Name</Label>
      <Col sm={10}>
        <Input type="text" name="name" id="name" placeholder="Enter Name Here" style={{borderColor: 'yellowgreen'}}/>
      </Col>
    </FormGroup>
    <FormGroup row style={{margin: '20px'}}>
      <Label sm={2}>Type</Label>
      <Col sm={10}>
        <Input type="text" name="type" id="type" placeholder="Enter Type Here" style={{borderColor: 'yellowgreen'}}/>
      </Col>
    </FormGroup>
    <FormGroup row style={{margin: '20px'}}>
      <Label sm={2}>Access</Label>
      <Col sm={10}>
        <Input type="select" name="access" id="access" style={{borderColor: 'yellowgreen'}}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row style={{margin: '20px'}}>
      <Label sm={2}>Database Type</Label>
      <Col sm={10}>
        <Input type="select" name="DB_type" id="db_type" style={{borderColor: 'yellowgreen'}}>
        {
          databasekeys.map((key,i) => {
            return(
              <option key={i}>{key}</option>
            )
          })
        }
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row style={{margin: '10px'}}>
      <Label for="examplePassword" sm={2}><h4 style={{fontSize: '20px', fontFamily: 'cursive'}}> Creadentials </h4></Label>
      <Col sm={10}/>
      <Label for="examplePassword" sm={2}>User</Label>
      <Col sm={10}>
        <Input type="text" name="password" id="examplePassword" style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
      </Col>
      <Label for="examplePassword" sm={2}>Password</Label>
      <Col sm={10}>
        <Input type="text" name="password" id="examplePassword" style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
      </Col>
      <Label for="examplePassword" sm={2}>URL</Label>
      <Col sm={10}>
        <Input type="text" name="password" id="examplePassword" style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
      </Col>
      <Label for="examplePassword" sm={2}>Driver</Label>
      <Col sm={10}>
        <Input type="text" name="password" id="examplePassword" style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
      </Col>
      <Label for="examplePassword" sm={2}>Version</Label>
      <Col sm={10}>
        <Input type="text" name="password" id="examplePassword" style={{borderColor: 'yellowgreen'}}/>
      </Col>
    </FormGroup>
    <FormGroup check row style={{margin: '20px'}}>
      <Col sm={{ size: 10, offset: 2 }}>
        <Button>Submit</Button>
      </Col>
    </FormGroup>
  </Form>
    </Container>
  )
}


export default AddData;