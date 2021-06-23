import React, { Component} from "react";
import DataList from "./Source";
import axios from 'axios';


class SourcesList extends Component {
  state = {}

  // let searchinput = " ";


  // const handleDelete = (id)=>{
  //   const newdatalist = datalist.filter(data => data.id !== id);
  //   setDataList(newdatalist);
  //   console.log("Deleted");
  // }

  // const handleEdit = (id)=>{
  //   console.log("Edited");
  // }

  // const handleSearch = (e) => {
  //   searchinput = e.target.value;
  //   if(searchinput){
  //     const newdatalist = datalist.filter(data => {return (Object.keys(data)[0].includes(searchinput))});
  //     setDataList(newdatalist);
  //   }else{
  //     setDataList(datalist);
  //   }
  // }

  componentDidMount(){
    axios.get('http://10.70.17.23:8092/v1/test/get-all-db-names')
    .then(res =>{
      this.setState(res.data)
    })
    }

  render() {
    console.log(this.state)
    return (
      <div>
        {Object.keys(this.state).length !== 0 && <DataList datalist={this.state} /> }
        {/* handleDelete={handleDelete} handleEdit={handleEdit} handleSearch={handleSearch} */}
      </div>
        );
  }
}

export default SourcesList;