import React from "react";
import {
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

export default function AddValidation() {
  const { handleSubmit, control, reset } = useForm();

  return (
    <Container style={{ display: "inline-block", marginLeft: "100px" }}>
      <Form>
        <Col lg={"6"}>
          <Card className={"m-lg-5"}>
            <Row xs={"2"} className="m-lg-3">
              <Col lg={"6"}>
                <FormGroup>
                  <Controller
                    as={Input}
                    name="name"
                    control={control}
                    defaultValue=""
                    placeholder={"Name"}
                  />
                </FormGroup>
              </Col>
              <Col lg={"3"}>
                <FormGroup>
                  <Controller
                    as={Input}
                    name="name"
                    control={control}
                    defaultValue=""
                    placeholder={"Warning Th %"}
                  />
                </FormGroup>
              </Col>
              <Col lg={"3"}>
                <FormGroup>
                  <Controller
                    as={Input}
                    name="name"
                    control={control}
                    defaultValue=""
                    placeholder={"Ex"}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row xs={"2"} className="m-lg-3 mt-lg-1">
              <Col lg={"6"}>
                <FormGroup>
                  <Controller
                    name="iceCreamType"
                    as={Select}
                    placeholder={"Destination Type"}
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
              </Col>
              <Col lg={"6"}>
                <FormGroup>
                  <Controller
                    name="iceCreamType"
                    as={Select}
                    placeholder={"Source Type"}
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
              </Col>
            </Row>
          </Card>
          {/*source and destination selection */}
          <Card className="m-lg-5">
            <Row className="m-lg-3">
              <Col lg={"6"} className={"mt-2 mb-0"}>
                <FormGroup className={"mb-3"}>
                  <Controller
                    name="iceCreamType"
                    as={Select}
                    placeholder="Source Name"
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
                <FormGroup className={"mb-3"}>
                  <Controller
                    name="iceCreamType"
                    as={Select}
                    placeholder={"Select Schema"}
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
                <FormGroup className={"mb-3"}>
                  <Controller
                    name="iceCreamType"
                    as={Select}
                    placeholder={"Select Table"}
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
              </Col>
              <Col lg={"6"} className={"mt-2"}>
                <FormGroup className={"mb-3"}>
                  <Controller
                    name="iceCreamType"
                    as={Select}
                    placeholder="Destination"
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
                <FormGroup className={"mb-3"}>
                  <Controller
                    name="iceCreamType"
                    placeholder="Schema Name"
                    as={Select}
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
                <FormGroup>
                  <Controller
                    name="iceCreamType"
                    as={Select}
                    placeholder={"Select Table"}
                    options={[
                      { value: "chocolate", label: "Greenplam" },
                      { value: "strawberry", label: "Casandra" },
                      { value: "vanilla", label: "MySql" },
                    ]}
                    control={control}
                    defaultValue=""
                  />
                </FormGroup>
              </Col>
              <Col>
                <Button
                  style={{
                    float: "right",
                  }}
                  color="primary"
                  type="reset"
                  onClick={() => reset()}
                >
                  Get Columns
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Form>
    </Container>
  );
}
