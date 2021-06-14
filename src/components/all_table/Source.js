import { Container, Label, ListGroup, ListGroupItem, InputGroupAddon, InputGroupText, Input, InputGroup} from "reactstrap";
import { Link } from "react-router-dom";


const DataList = ({datalist, handleDelete, handleEdit, handleSearch}) => {


  let numarray = Object.keys(datalist);
  let keyarray = numarray.map(i => {return(Object.keys(datalist[i]))})

// const databaseSelect = (databasename) => {
//   Object.keys(datalist).forEach((data) => {if (typeof datalist[data][databasename] !== 'undefined'){tables = (datalist[data][databasename])}})
//   // console.log("onclick",databasename, tables);
// }


  return(
       <Container style={{margin: '0 7%'}}>
      <div className="mt-3">
        <Label style={{ marginRight: "10px" }}>Data Source List</Label>
        <Link className="btn btn-secondary" to="/AddData">
          Add Source
        </Link>
        <InputGroup style={{margin: "20px 0"}}>
        <Input className='text-center' style={{borderColor: "green"}} placeholder="Search Here" type='searchinput' onChange={handleSearch} />
          <InputGroupAddon addonType="append"><InputGroupText>Search</InputGroupText></InputGroupAddon>
        </InputGroup>
      </div>
      <div>
        <ListGroup >
            {
              keyarray.map((item,i) => {return (<ListGroupItem className="list-group-item" key={i}><Link style={{padding: "10px", margin: "5px", color: "black"}} to={`/tabledetails/${i}`}>{item}</Link></ListGroupItem>)})
            }
        </ListGroup>
      </div>
      </Container>
    )
}

export default DataList;


