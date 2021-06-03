import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
// import name from 'module';

import {Button,Form,FormGroup,Input,Container,Col} from "reactstrap";
import { login } from "../services/loginService";
import { toast } from "react-toastify";


export default function Login() {

  const history = useHistory();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().min(8, "Password must be at least 8 characters.!"),
  });

  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(validationSchema), reValidateMode: 'onChange'
  });

  const onSubmit = (data) => {
    try {
      const { username, password } = data;
      login(username, password);
      // localStorage.setItem("token", jwt);
      // history.push("/sourcelist");
      // toast.success("Logged in successfully");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  };
  return (
    <Container
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        marginLeft: "300px",
      }}
    >
      <Col lg={"6"} style={{ display: "block" }}>
        <h3
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "40%",
            marginBottom: "10%",
          }}
        >
          Login
        </h3>

        {/* Login Form */}
        <Form onSubmit={handleSubmit(onSubmit)} className="form-group p-3 mt-5 bg-white shadow-lg border border-dark rounded">
          <FormGroup className="mb-3">
            <Controller
              as={Input}
              name="username"
              placeholder="Username"
              control={control}
              defaultValue=""
            />
            {errors.username?.message}
          </FormGroup>
          <FormGroup className="mb-3">
            <Controller
              as={Input}
              name="password"
              type="password"
              placeholder="Password"
              control={control}
              defaultValue=""
            />
            {errors.password?.message}
          </FormGroup>
          <Button className="btn btn-primary btn-block mt-3 shadow center" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      {/* </Row> */}
    </Container>
  );
}
