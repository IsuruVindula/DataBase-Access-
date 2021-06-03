import { Container, Label,Table, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

const DataList = ({datalist, handleDelete, handleEdit}) => {
    return(
       <Container>
      <div className="mt-3">
        <Label style={{ marginRight: "10px" }}>Data Source List</Label>
        <Link className="btn btn-secondary" to="/datasources/addsource">
          Add Source
        </Link>
      </div>
      {datalist.map((singledata) => {
        return(
            <p>
                <span> Filesize: {singledata.total.fileSize} </span>
                <span> Last Acess Time: {singledata.total.lastAccessTime} </span>
                <span> Last Modified Time: {singledata.total.lastModifiedTime} </span>
            </p>
        )
      })}
       <Row lg={"4"}>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          {/* {Object.keys(datalist.total).map((key,i) => {
            return (<tbody>
                <p key={i}>
                    <span>keyt name: {key}</span>
                    <span>Value: {datalist.}</span>
                </p> */}
              {/* <tr>
                <th scope="row">1</th>
                <td>{singledata.name.FirstName}</td>
                <td>{singledata.age}</td>
                <td>{singledata.address}</td>
                <td>{singledata.country}</td>
                <td>
                  <button className="btn btn-secondary pr-2" onClick={()=>handleEdit()}>Edit</button>
                  <Button className="btn btn-danger" onClick={() => handleDelete()}>Delete</Button>
                </td>
              </tr> */}
            {/* </tbody>)
          })} */}
        </Table>
      </Row>
      </Container>
    )
}

export default DataList;


