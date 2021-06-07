import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Container, Label,Table, Row } from "reactstrap";

function Tabledetails(){

    const {id} = useParams();
    const [data, setdata] = useState([]);
    let selectData = {};


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/db_name', {method: 'GET'})
            .then(res =>
                res.json()
                ).then((rawdata)=>{
                    setdata(rawdata)
                    console.log(data)
                })
            },1000)
        }, [id]);

        console.log(data)

        if(data !== undefined){
            console.log("if condition enterd");
            // convert to array
            let t = JSON.stringify(data)
            let p = JSON.parse(t).map(d => d)

            p.map(item => {
                if(item[id] !== undefined){
                    return (selectData = item[id])
                }
            })
        }

        // console.log(selectData.detail);
        // (selectData.detail).map(key => console.log(key))

    return (
        <Container>
        {/* <div>
            <p>
                <span> Filesize: {selectData.total.fileSize} || </span>}
                <span> Last Access Time: {selectData.total.lastAccessTime} ||</span>
                <span> Last Modified Time: {selectData.total.lastModifiedTime} </span>
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
               selectData.map((key,i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{key}</td>
                    <td>{datalist[0].detail[key].fileSize}</td>
                    <td>{datalist[0].detail[key].lastAccessTime}</td>
                    <td>{datalist[0].detail[key].lastModifiedTime}</td>
                    <td>
                      <button className="btn btn-secondary pr-2">Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(key)}>Delete</button>
                    </td>
                  </tr>
                 )
              })
             }
              </tbody>
            </Table>
          </Row> */}
        </Container>
    )
}

export default Tabledetails;


