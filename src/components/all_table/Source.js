import { Container, Label} from "reactstrap";
import { Link } from "react-router-dom";
import Tabledetails from './Tabledetails';


const DataList = ({datalist, handleDelete, handleEdit}) => {


  console.log(datalist)
  let numarray = Object.keys(datalist);
  console.log(numarray)
  let keyarray = numarray.map(i => {return(Object.keys(datalist[i]))})


const databaseSelect = (databasename) => {
  <Tabledetails/>
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
            keyarray.map((item,i) => {return (<li key={i}><button>{item}</button></li>)})
            {/* keyarray.map((item,i) => {return (<li key={i}><Link onClick={()=>{databaseSelect()}} to=''>{item}</Link></li>)}) */}

          }
        </ul>
      </div>
      </Container>
    )
}

export default DataList;


