import React, {useEffect, useState} from "react";
import DataList from "./Source";
import Tabledetails from './Tabledetails';



export default function SourcesList() {


  const handleDelete = (id)=>{
    const newdatalist = datalist.filter(data => data.id !== id);
    setDataList(newdatalist);
    console.log("Deleted");
  }

  const handleEdit = (id)=>{
    console.log("Edited");
  }

  const [datalist, setDataList] = useState([]);

  useEffect(() => {

      fetch('http://localhost:8000/db_name')
      .then(res =>
           res.json()
        ).then((rawdata)=>{
          setDataList(rawdata)
        })
    },[]);

  return (
      (datalist && <DataList datalist={datalist} handleDelete={handleDelete} handleEdit={handleEdit}/>)
      );
    }
