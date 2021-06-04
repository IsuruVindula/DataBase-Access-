import { Container, Label,Table, Row } from "reactstrap";
import { Link } from "react-router-dom";

const DataList = ({datalist, handleDelete, handleEdit}) => {
    console.log(datalist[0])
    // let attarray = Object.keys(datalist[0].detail)
    // console.log(attarray)

    return(
        <Container>
       <div className="mt-3">
         <Label style={{ marginRight: "10px" }}>Data Source List</Label>
         <Link className="btn btn-secondary" to="/datasources/addsource">
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
        <Row lg={"4"}>
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
      // //      Object.keys(datalist[0].detail).map((key,i) => {
      // //       return (
      // //         <tr>
      // //           <th scope="row" key={i}>{i}</th>
      // //           <td>{key}</td>
      // //           <td>{datalist[0].detail[key].fileSize}</td>
      // //           <td>{datalist[0].detail[key].lastAccessTime}</td>
      // //           <td>{datalist[0].detail[key].lastModifiedTime}</td>
      // //           <td>
      // //             <button className="btn btn-secondary pr-2" onClick={()=>handleEdit()}>Edit</button>
      // //             <button className="btn btn-danger" onClick={() => handleDelete()}>Delete</button>
      // //           </td>
      // //         </tr>
      // //        )
      // //     })
            }
            </tbody>
          </Table>
        </Row>
        </Container>

    )
}

export default DataList;


