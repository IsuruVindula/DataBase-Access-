import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Container, Table, Row, Col, CardTitle, Card, CardText } from "reactstrap";

function Tabledetails(){

  let showdata = {total: {
          fileSize: '',
          lastAccessTime: '',
          lastModifiedTime: ''
        }};
  const {id} = useParams();
  console.log("id",id);
  const [data, setdata] = useState(showdata);
  let keyarray = [];


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/db_name', {method: 'GET'}) //should add the table name and get data
            .then(res =>
                res.json()
                ).then((rawdata)=>{
                  console.log("rawdata",rawdata[id]);
                  setdata(rawdata[id]);
                  console.log(rawdata);
                })
          },500)
    }, [id]);


    const newfuct = () => {
      const  objectkey = Object.keys(data);

      if(objectkey[0] !== 'total'){

        console.log("if condition enterd");

        console.log(objectkey);

        showdata = data[objectkey[0]]
        console.log("showdata",showdata);

      // console.log("showdata", showdata);

      //get the keys into an array
      keyarray = Object.keys(showdata.detail)
      // console.log("Keyarray",keyarray);
      }
    }

    // have to do some optimizations
    newfuct();


    return (
        <Container className="mt-3">
              <Row style={{borderColor:'black', margin:'2% 0% 0% 5%', fontSize:'19px'}}>
              <Col>
                <Card body style={{backgroundColor: '#808000'}}>
                  <CardTitle>Filesize:</CardTitle>  {showdata.total.fileSize}</Card>
              </Col>
              <Col>
                <Card body style={{backgroundColor: '#808000'}}>
                  <CardTitle>Last Access Time:</CardTitle><CardText>{showdata.total.lastAccessTime}</CardText></Card>
              </Col>
              <Col>
                <Card body style={{backgroundColor: '#808000'}}><CardTitle>Last Modified Time:</CardTitle>
                  <CardText>{showdata.total.lastModifiedTime}</CardText>
                </Card>
              </Col>
            </Row>
        <Row>
           <Table className="table table-dark table-striped table-bordered table-hover table-responsive" style={{margin:'2% 3%'}}>
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
            {
               keyarray.map((key,i) => {
                return (
                  <tr key={i} className="text-center">
                    <td>{i}</td>
                    <td>{key}</td>
                    <td>{showdata.detail[key].fileSize}</td>
                    <td>{showdata.detail[key].lastAccessTime}</td>
                    <td>{showdata.detail[key].lastModifiedTime}</td>
                  </tr>
                 )
              })
             }
              </tbody>
            </Table>
          </Row>
        </Container>
        // <ShowTable showdata={showdata[0]}/>
    )
}

export default Tabledetails;


