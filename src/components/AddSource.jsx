import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { toast } from "react-toastify";

import { getDatabaseTypes } from "../services/sourceService";

export default function AddSource() {
  const { handleSubmit, control, reset } = useForm();
  const [indexes, setIndexes] = useState([]);
  const [counter, setCounter] = useState(0);
  const [databaseTypes, updateDatabaseTypes] = useState([]);

  const addConfigField = (indexes) => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeConfigField = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  // useEffect(async () => {
  //   try {
  //     const response = await getDatabaseTypes();
  //     updateDatabaseTypes(response);
  //     console.log(response);
  //   } catch (e) {
  //     toast.error("Network Error");
  //   }
  // });

  const onSubmit = (data) => {
    // try{
    //
    // }catch (e) {
    //
    // }
    console.log(data);
  };

  return (
    <Container
      style={{ marginLeft: "100px", width: "500px", marginTop: "30px" }}
    >
      <h2>Add DataSource</h2>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "30px" }}>
        <FormGroup inline>
          <Label for="exampleEmail">Database Type</Label>
          <Controller
            name="iceCreamType"
            as={Select}
            options={databaseTypes}
            control={control}
            defaultValue=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Controller
            as={Input}
            name="name"
            control={control}
            defaultValue=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Connection String</Label>
          <Controller
            as={Input}
            name="connectionString"
            control={control}
            defaultValue=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Controller
            as={Input}
            name="username"
            control={control}
            defaultValue=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password</Label>
          <Controller
            as={Input}
            name="password"
            control={control}
            defaultValue=""
          />
        </FormGroup>

        {indexes.map((index) => {
          const configName = `config_${index}`;
          return (
            <FormGroup>
              <Label for="Configuration">Configuration {index}</Label>
              <Col>
                <Controller
                  as={Input}
                  name={configName}
                  control={control}
                  className="d-inline"
                  defaultValue=""
                />
                <Button type="button" onClick={removeConfigField(index)}>
                  Remove
                </Button>
              </Col>
            </FormGroup>
          );
        })}

        <Col>
          <Button
            color={"success"}
            style={{ marginRight: "10px" }}
            className="mt-2"
            onClick={addConfigField}
          >
            Add Config
          </Button>
          <Button
            className="mt-2"
            color="primary"
            style={{ marginRight: "10px" }}
          >
            Submit
          </Button>
          <Button
            className="mt-2"
            color="warning"
            type="reset"
            onClick={() => reset()}
          >
            Reset
          </Button>
        </Col>
      </Form>
    </Container>
  );
}
