import React from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
// import name from 'module';
import axios from "axios";

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


  //onSubumit Data Handle
  const onSubmit = (data) => {
    try {
      // const { username, password } = data;
      // login(username, password);
      console.log('clickedSubmit');

      let config = {"headers": {'Content-Type': 'application/json'}};
      let temp = {user: 'admin', password: 'admin'};


      axios.post('http://10.70.17.23:8092/v1/auth/login', temp, config)
      .then((res)=>{
        console.log("RES",res.data);
      },
      (error)=>{console.log("ERROR",error);
      })
      // localStorage.setItem("token", jwt);
      history.push("/tableonlysourcelist");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  };
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100%",
        backgroundImage: `url("https://www.axiatadigitallabs.com/wp-content/uploads/2020/03/ADL-logo-1-e1592384526388.png")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
      }}
    >
      <Col lg={"6"} style={{ display: "block"}}>
        <h3
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "40%",
            fontFamily: 'fantasy',
            fontSize: '40px'
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
          <Button className="btn btn-info btn-lg btn-block mt-3 shadow center" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Container>
  );
}
