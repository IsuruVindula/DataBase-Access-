import { Container, Label, ListGroup, ListGroupItem, InputGroupAddon, InputGroupText, Input, InputGroup} from "reactstrap";
import { Link } from "react-router-dom";


const DataList = ({datalist, handleDelete, handleEdit, handleSearch}) => {


  // console.log(datalist)
  let numarray = Object.keys(datalist);
  // console.log("numarray",numarray)
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
        <InputGroup style={{margin: "10px 0"}}>
        <Input className='text-center' placeholder="Search Here" type='searchinput' onChange={handleSearch} />
          <InputGroupAddon addonType="append"><InputGroupText>Search</InputGroupText></InputGroupAddon>
        </InputGroup>
      </div>
      <div>
        <ListGroup>
            {
              keyarray.map((item,i) => {return (<ListGroupItem style={{borderColor: 'Green', padding: '15px'}} key={i}><Link to={`/tabledetails/${i}`}>{item}</Link></ListGroupItem>)})
            }
        </ListGroup>
      </div>
      </Container>
    )
}

export default DataList;


