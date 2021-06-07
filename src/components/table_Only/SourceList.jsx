import React, {useEffect, useState} from "react";
import DataList from "./Source";


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
        fetch('http://localhost:8000/table_name')
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
        {isPending && <div>Loding........</div>}
        {datalist && <DataList datalist={datalist} handleDelete={handleDelete} handleEdit={handleEdit} />}
      </div>
      );
    }
