import React, { Component } from 'react';
import { Form, Label,FormGroup,Col,Input,Button, Container } from 'reactstrap';
import {getDatabaseTypes} from '../services/sourceService';

export default class NewDataForm extends Component {

    state = {
        formdata:{
            ID: null,
            Name: null,
            type: null,
            access: null,
            db_type: null,
            User: null,
            Password: null,
            URL: null,
            Driver: null,
            Version: null,
        },
        databaseTypes: getDatabaseTypes()
    }

    handleChange = (e)=>{
        this.setState({formdata:{
            [e.target.id]: e.target.value
        }})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:8000/env/' + this.state.formdata, {method: 'POST'})
        .then(console.log("data added"));
    }

    componentDidMount(){
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row style={{margin: '20px'}}>
                    <Label sm={2}>ID</Label>
                    <Col sm={10}>
                        <Input type="number" name="ID" id="ID" placeholder="Enter ID Here" onChange={this.handleChange} style={{borderColor: 'yellowgreen'}}/>
                    </Col>
                    </FormGroup>
                    <FormGroup row style={{margin: '20px'}}>
                    <Label sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="name" placeholder="Enter Name Here" onChange={this.handleChange} style={{borderColor: 'yellowgreen'}}/>
                    </Col>
                    </FormGroup>
                    <FormGroup row style={{margin: '20px'}}>
                    <Label sm={2}>Type</Label>
                    <Col sm={10}>
                        <Input type="text" name="type" id="type" placeholder="Enter Type Here" onChange={this.handleChange} style={{borderColor: 'yellowgreen'}}/>
                    </Col>
                    </FormGroup>
                    <FormGroup row style={{margin: '20px'}}>
                    <Label sm={2}>Access</Label>
                    <Col sm={10}>
                        <Input type="select" name="access" id="access" onChange={this.handleChange} style={{borderColor: 'yellowgreen'}}>
                        <option>read-only</option>
                        <option>read-write</option>
                        </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row style={{margin: '20px'}}>
                    <Label sm={2}>Database Type</Label>
                    <Col sm={10}>
                        <Input type="select" name="DB_type" id="db_type" onChange={this.handleChange} style={{borderColor: 'yellowgreen'}}>
                        {
                            this.state.databaseTypes.map((obj) => {
                                return(
                                <option key={obj.value}>{obj.label}</option>
                                )
                            })
                        }
                        </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row style={{margin: '10px'}}>
                    <Label sm={2}><h4 style={{fontSize: '20px', fontFamily: 'cursive'}}> Credentials </h4></Label>
                    <Col sm={10}/>
                    <Label sm={2}>User</Label>
                    <Col sm={10}>
                        <Input type="text" name="password" id="User" onChange={this.handleChange} style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
                    </Col>
                    <Label sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="text" name="password" id="Password" onChange={this.handleChange} style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
                    </Col>
                    <Label for="examplePassword" sm={2}>URL</Label>
                    <Col sm={10}>
                        <Input type="text" name="password" id="URL" onChange={this.handleChange} style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
                    </Col>
                    <Label for="examplePassword" sm={2}>Driver</Label>
                    <Col sm={10}>
                        <Input type="text" name="password" id="Driver" onChange={this.handleChange} style={{borderColor: 'yellowgreen', marginBottom: '10px'}}/>
                    </Col>
                    <Label for="examplePassword" sm={2}>Version</Label>
                    <Col sm={10}>
                        <Input type="text" name="password" id="Version" onChange={this.handleChange} style={{borderColor: 'yellowgreen'}}/>
                    </Col>
                    </FormGroup>
                    <FormGroup check row style={{margin: '20px'}}>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button size="lg">Submit</Button>
                    </Col>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}
