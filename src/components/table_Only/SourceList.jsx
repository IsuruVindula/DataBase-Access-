import React, {useEffect, useState} from "react";
import { Spinner } from "reactstrap";
import DataList from "./Source";
import axios from 'axios';


export default function SourcesList() {

  const handleDelete = (id)=>{
    // const newdatalist = datalist.filter((data) => (Object.keys(datalist[0].detail).map(key => key !== id))); //(data.id !== id)
    const newdatalist = (datalist[0].detail).filter((data) => console.log(data)); //(data.id !== id)
    setDataList(newdatalist);
    console.log("Deleted", id);
  }

  const handleEdit = (id)=>{
    console.log("Edited");
  }

  const [datalist, setDataList] = useState([]);
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("hook runs")
        axios.get('http://10.70.17.23:8092/v1/test/db/dma/table/ti_fact_exec_dash_customer_center')
        .then(res =>
             res.json()
          ).then((rawdata)=>{
            setDataList(rawdata);
            setisPending(false);
          })
      }, 1000);
    },[]);

    return (
      <div>
        {isPending && <div style={{alignContent:'center'}}><Spinner color="danger"/></div>}
        {datalist && <DataList datalist={datalist} handleDelete={handleDelete} handleEdit={handleEdit} />}
      </div>
      );
    }
