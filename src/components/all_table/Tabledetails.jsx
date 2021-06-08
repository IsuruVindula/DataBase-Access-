import ColumnGroup from 'antd/lib/table/ColumnGroup';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Container, Label,Table, Row } from "reactstrap";
import ShowTable from './ShowTable';

function Tabledetails(){

    const {id} = useParams();
    const [data, setdata] = useState({});
    let p = [];
    let keyarray = {};
    let showdata = {};


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/db_name', {method: 'GET'})
            .then(res =>
                res.json()
                ).then((rawdata)=>{
                  setdata(rawdata)
                })
              },1000)
            }, []);

            console.log("data",data);
            if(data.length){
              console.log("if condition enterd");
              p = Object.keys(data).map(i => data[i][id])
              console.log("pdata",p);
              showdata = p.filter(i => {return i !== undefined})
              console.log("showdata", showdata[0].detail);

              //get the keys into an array
              keyarray = Object.keys(showdata[0].detail)
              console.log("Keyarray",keyarray)

              // convert to array
              // let t = JSON.stringify(showdata[0].detail);
              // let b = JSON.parse(t).map(d => d)

              // p.map(item => {
              //       if(item[id] !== undefined){
              //             return (selectData = item[id])
              //         }
              //     })
          }



    return (
        <Container>
            {/* <div>
                <p>
                    <span> Filesize: {showdata[0].total.fileSize} || </span>
                    <span> Last Access Time: {showdata[0].total.lastAccessTime} ||</span>
                    <span> Last Modified Time: {showdata[0].total.lastModifiedTime} </span>
                </p>
            </div> */}
        {/* <Row>
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
                    <td>{showdata[0].detail[key].fileSize}</td>
                    <td>{showdata[0].detail[key].lastAccessTime}</td>
                    <td>{showdata[0].detail[key].lastModifiedTime}</td>
                    <td>
                      <button className="btn btn-secondary pr-2">Edit</button>
                    </td>
                  </tr>
                 )
              })
             }
              </tbody>
            </Table>
          </Row> */}
        </Container>
        // <ShowTable showdata={showdata[0]}/>
    )
}

export default Tabledetails;


