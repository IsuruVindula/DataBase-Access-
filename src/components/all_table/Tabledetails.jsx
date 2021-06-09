import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Container, Label,Table, Row, Col } from "reactstrap";

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
            <p className="ant-divider ant">
              <span sm> Filesize: {showdata.total.fileSize} || </span>
              <span sm> Last Access Time: {showdata.total.lastAccessTime} || </span>
              <span sm> Last Modified Time: {showdata.total.lastModifiedTime} || </span>
            </p>
        <Row>
           <Table className="table table-dark table-striped table-bordered table-hover table-responsive">
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


