import { Container, Label,Table, Row } from "reactstrap";
import { Link } from "react-router-dom";

const DataList = ({datalist}) => {

  console.log(datalist[0]);

    let attarray = [];

    if(datalist[0] !== undefined && datalist[0].detail !== undefined){
      attarray = Object.keys(datalist[0].detail)
    }

    const handleDelete = (id) => {
      console.log(id);
      // fetch('http://localhost:8000/table_name/detail/' + id,{method: 'GET'})
      // .then(res => console.log("Status:",res.status, "; Body:",res)
      // )
    }

    return(
        <Container>
       <div className="mt-3">
         <Label style={{ marginRight: "10px" }}>Data Source List</Label>
         <Link className="btn btn-secondary" to="/adddata">
           Add Source
         </Link>
       </div>
           {
            datalist.map((singledata,i) => {
            return(
                <p key={i}>
                    <span> Filesize: {singledata.total.fileSize} || </span>
                    <span> Last Access Time: {singledata.total.lastAccessTime} ||</span>
                    <span> Last Modified Time: {singledata.total.lastModifiedTime} </span>
                </p>
              )
            })
           }
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
               attarray.map((key,i) => {
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
          </Row>
        </Container>
    )
}

export default DataList;


