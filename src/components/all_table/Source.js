import { Container, Label} from "reactstrap";
import { Link } from "react-router-dom";
import Tabledetails from './Tabledetails';

const DataList = ({datalist, handleDelete, handleEdit}) => {

  console.log(datalist)
  let numarray = Object.keys(datalist);
  console.log(numarray)
  let keyarray = numarray.map(i => {return(Object.keys(datalist[i]))})

  return(
       <Container>
      <div className="mt-3">
        <Label style={{ marginRight: "10px" }}>Data Source List</Label>
        <Link className="btn btn-secondary" to="/datasources/addsource">
          Add Source
        </Link>
      </div>
      <div>
        <ul>
          {
            keyarray.map((item,i) => {return (<li key={i}><Link to={`/tabledetails/${item}`}>{item}</Link></li>)})
          }
        </ul>
      </div>
      </Container>,
      <Tabledetails tabledetails={datalist}/>
    )
}

export default DataList;


