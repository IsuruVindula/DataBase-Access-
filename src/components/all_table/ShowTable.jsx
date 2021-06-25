import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Label,Table, Row, Card, Col, CardTitle, CardText, Spinner } from "reactstrap";


const ShowTable = () => {

    const {tablename, dbname} = useParams();
    const [data, setdata] = useState({});
    let attarray = [];


    useEffect(() => {
        axios.get('http://10.70.17.23:8092/v1/test/db/' + dbname + '/table/' + tablename)
        .then(res => setdata(res.data))
    }, [])

     if(data !== undefined && data.detail !== undefined){
            attarray = Object.keys(data.detail)
    }

    const metadata = data.total ? (
      <Row style={{borderColor:'black', margin:'2% 0 5% 0'}}>
              <Col>
                <Card className="Card" body>
                  <CardTitle>Filesize:</CardTitle>  {data.total.fileSize}
                </Card>
              </Col>
              <Col>
                <Card body className="Card">
                  <CardTitle>Last Access Time:</CardTitle><CardText>{data.total.lastAccessTime}</CardText>
                </Card>
              </Col>
              <Col>
                <Card body className="Card"><CardTitle>Last Modified Time:</CardTitle>
                  <CardText>{data.total.lastModifiedTime}</CardText>
                </Card>
              </Col>
            </Row>
    ) : (<h1>loading</h1>);

    const tableData = data.detail ? (

           attarray.map((key,i) => {
            return (
              <tr key={i} className="tableRow">
                <td>{i}</td>
                <td>{key.split('=')[1]}</td>
                <td>{data.detail[key].fileSize}</td>
                <td>{data.detail[key].lastAccessTime}</td>
                <td>{data.detail[key].lastModifiedTime}</td>
              </tr>
              )
            })
    ) : (<h1>loading</h1>);

    return (
        <Container>
        <div className='mt-3'>
      <Container style={{maxWidth: '85%', margin:'0 0 0 8%'}}>
        <div className="mt-3">
          <Label style={{ marginRight: "7px" }}>Data Source List</Label>
          <Link className="btn btn-secondary" to="/adddata">
            Add Source
          </Link>
        </div>
        <div>{metadata}</div>
        <Row>
        <Table className="table table-dark table-striped table-bordered table-hover table-responsive" style={{margin:'0px 0px'}}>
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>fileSize</th>
              <th>lastAccessTime</th>
              <th>lastModifiedTime</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </Table>
      </Row>
      </Container>
      </div>
        </Container>
    )
}

export default ShowTable;

