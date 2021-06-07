import { Container, Label} from "reactstrap";
import { Link } from "react-router-dom";
import Tabledetails from './Tabledetails';
import { useState } from "react";



const DataList = ({datalist, handleDelete, handleEdit}) => {


  console.log(datalist)
  let numarray = Object.keys(datalist);
  console.log("numarray",numarray)
  let keyarray = numarray.map(i => {return(Object.keys(datalist[i]))})
  let tables = [];

  const [clicked, setclicked] = useState(false);


const databaseSelect = async (databasename) => {
  // console.log("database name",datalist[0]['ti_fact_exec_customer_tt_d']);
  setclicked(false);
  // const source = datalist.filter(data => {return (Object.keys(datalist))})
  Object.keys(datalist).forEach((data) => {if (typeof datalist[data][databasename] !== 'undefined'){tables.push(datalist[data][databasename])}})
  console.log(databasename, tables);
  setclicked(true);
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
            keyarray.map((item,i) => {return (<li key={i}><button onClick={()=>{databaseSelect(item)}}>{item}</button></li>)})
          }
        </ul>
      </div>
      {tables.length > 0 && clicked ? <Tabledetails data={tables}/> : <div></div>}
      </Container>
    )
}

export default DataList;


