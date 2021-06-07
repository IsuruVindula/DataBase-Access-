import { Container, Label} from "reactstrap";
import { Link } from "react-router-dom";


const DataList = ({datalist, handleDelete, handleEdit}) => {


  // console.log(datalist)
  let numarray = Object.keys(datalist);
  // console.log("numarray",numarray)
  let keyarray = numarray.map(i => {return(Object.keys(datalist[i]))})
  let tables = {};

const databaseSelect = (databasename) => {
  Object.keys(datalist).forEach((data) => {if (typeof datalist[data][databasename] !== 'undefined'){tables = (datalist[data][databasename])}})
  // console.log("onclick",databasename, tables);
}


  return(
       <Container>
      <div className="mt-3">
        <Label style={{ marginRight: "10px" }}>Data Source List</Label>
        <Link className="btn btn-secondary" to="/adddata">
          Add Source
        </Link>
      </div>
      <div>
        <ul>
          {
            keyarray.map((item,i) => {return (<li key={i}><Link onClick={()=>{databaseSelect(item)}} to={`/tabledetails/${item}`}>{item}</Link></li>)})
          }
        </ul>
      </div>
      {/* {tables.length > 0 && clicked ? <Tabledetails data={tables}/> : <div></div>} */}
      </Container>
    )
}

export default DataList;


