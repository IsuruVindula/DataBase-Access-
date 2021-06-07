import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function Tabledetails(){

    const {id} = useParams();
    const [data, setdata] = useState([]);
    let selectData = {};


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/db_name')
            .then(res =>
                res.json()
                ).then((rawdata)=>{
                    setdata(rawdata)
                    console.log(data)
                })
            },1000)
        }, []);




        console.log(typeof(data));
        let t = JSON.stringify(data)
        let p = JSON.parse(t).map(d => d)

        p.map(item => {
            if(item[id] !== undefined){
                return (selectData = item[id])
            }
        })
        console.log(selectData);


    return (
        <div>
            <p>
                <span> Filesize: {selectData.total.fileSize} || </span>
                {/* <span> Last Access Time: {selectData.total.lastAccessTime} ||</span> */}
                {/* <span> Last Modified Time: {selectData.total.lastModifiedTime} </span> */}
            </p>
        </div>
    )
}

export default Tabledetails;


