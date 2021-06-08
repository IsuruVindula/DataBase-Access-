import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Container, Label,Table, Row } from "reactstrap";

function Tabledetails(){

  let showdata = {total: {
          fileSize: '',
          lastAccessTime: '',
          lastModifiedTime: ''
        }};
  const {id} = useParams();
  const [data, setdata] = useState(showdata);
  let keyarray = [];


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/db_name', {method: 'GET'})
            .then(res =>
                res.json()
                ).then((rawdata)=>{
                  // console.log("rawdata",rawdata);
                  setdata(rawdata[0]);
                })
          },500)
    }, []);


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
      console.log("Keyarray",keyarray);
      }
    }

    newfuct();


    return (
        <Container>
            <div>
                <p>
                    <span> Filesize: {showdata.total.fileSize} || </span>
                    <span> Last Access Time: {showdata.total.lastAccessTime} ||</span>
                    <span> Last Modified Time: {showdata.total.lastModifiedTime} </span>
                </p>
            </div>
        <Row>
           <Table striped>
             <thead>
               <tr>
                 <th>No</th>
                 <th>Date</th>
                 <th>fileSize</th>
                 <th>lastAccessTime</th>
                 <th>lastModifiedTime</th>
                 <th></th>
               </tr>
              </thead>
              <tbody>
            {
               keyarray.map((key,i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{key}</td>
                    <td>{showdata.detail[key].fileSize}</td>
                    <td>{showdata.detail[key].lastAccessTime}</td>
                    <td>{showdata.detail[key].lastModifiedTime}</td>
                    <td>
                      <button className="btn btn-secondary pr-2">Edit</button>
                    </td>
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


