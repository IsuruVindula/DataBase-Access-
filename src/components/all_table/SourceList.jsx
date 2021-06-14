import React, {useEffect, useState} from "react";
import DataList from "./Source";



export default function SourcesList() {

  const [datalist, setDataList] = useState([]);
  let searchinput = " ";


  const handleDelete = (id)=>{
    const newdatalist = datalist.filter(data => data.id !== id);
    setDataList(newdatalist);
    console.log("Deleted");
  }

  const handleEdit = (id)=>{
    console.log("Edited");
  }

  const handleSearch = (e) => {
    searchinput = e.target.value;
    if(searchinput){
      const newdatalist = datalist.filter(data => {return (Object.keys(data)[0].includes(searchinput))});
      setDataList(newdatalist);
    }else{
      setDataList(datalist);
    }
  }

  useEffect(() => {

      fetch('http://localhost:8000/db_name')
      .then(res =>
           res.json()
        ).then((rawdata)=>{
          setDataList(rawdata)
        })
    },[]);

  return (
      (datalist && <DataList datalist={datalist} handleDelete={handleDelete} handleEdit={handleEdit} handleSearch={handleSearch} />)
      );
    }
