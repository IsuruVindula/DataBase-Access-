import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import {Container,Form} from "reactstrap";

import {getDatabaseTypes} from '../services/sourceService';

const AddData = () =>{

  const { handleSubmit, control, reset } = useForm();
  const [databaseTypes, updateDatabaseTypes] = useState([]);

    useEffect(() => {
    try {
      const response =  getDatabaseTypes();
      updateDatabaseTypes(response);
      console.log(response);
    } catch (e) {
      // toast.error("Network Error");
    }
  },[]);



    return(
        <Container
      style={{ marginLeft: "100px", width: "500px", marginTop: "30px" }}>
      <h2>Add DataSource</h2>
      <Form style={{ marginTop: "30px" }} onSubmit={handleSubmit}>
        <lable></lable>
      </Form>
    </Container>
    )
}


export default AddData;