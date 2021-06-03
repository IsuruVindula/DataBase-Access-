import React from "react";
import { Link } from "react-router-dom";
import { Button, Table, Row } from "reactstrap";

export default function DestinationList() {
  // const [source,]

  return (
      <Container>
        <div className="raw mt-3 clearfix">
          <h2 className="float-left mr-2">Destination Sources</h2>
          <Link className="btn btn-primary" to="/addsource">
            Add Source
          </Link>
        </div>

        <Row lg={"4"}>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>DB Type</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <Link
                    to={`/edit/4`}
                    color="warning"
                    className="btn btn-warning mr-3"
                  >
                    Edit
                  </Link>
                  <Button color="danger" className="ml-1">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <Link
                    //   to={`/edit/${user.id}`}
                    color="warning"
                    className="btn btn-warning mr-2"
                  >
                    Edit
                  </Link>
                  <Button color="danger">Delete</Button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
  );
}
