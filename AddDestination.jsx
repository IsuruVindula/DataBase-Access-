import React from "react";
import {Controller, useForm} from "react-hook-form";
import Select from "react-select";
import {Button, Form, FormGroup, Input, Label, Row} from "reactstrap";

export default function AddDestination() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log("example"); // watch input value by passing the name of it

  return (
    <div className="container">
      <div className="raw mt-2">
        <h2>Configure Source DB</h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
              <Label for="exampleEmail">Database Type</Label>
              <Controller
                  name="iceCreamType"
                  as={Select}
                  options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" }
                  ]}
                  control={control}
                  defaultValue=""/>
          </FormGroup>

          <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Controller as={Input} name="name" control={control} defaultValue=""/>
          </FormGroup>

          <FormGroup>
              <Label for="exampleEmail">Connection String</Label>
              <Controller as={Input} name="connectionString" control={control} defaultValue=""/>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Controller as={Input} name="username" control={control} defaultValue=""/>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Controller as={Input} name="password" control={control} defaultValue=""/>
          </FormGroup>

          <FormGroup>
              <Label for="exampleEmail">Conf :</Label>
              <Controller as={Input} name="username" control={control} defaultValue=""/>
          </FormGroup>
              <Button className="mt-2" color="primary">Submit</Button>
              <Button className="mt-2" color="warning">Reset</Button>
      </Form>
    </div>

    // </div>
  );
}
