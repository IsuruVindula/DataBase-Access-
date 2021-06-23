import axios from 'axios';
import React, { Component } from 'react';
import DataList from "./Source";

 class Sourcelistnew extends Component {
    state = {}

    componentDidMount(){
        axios.get('http://10.70.17.23:8092/v1/test/db/dma/table/ti_fact_exec_dash_customer_center')
        .then(res => this.setState(res.data))
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {Object.keys(this.state).length !== 0 && <DataList datalist={this.state} />}
            </div>
        )
    }
}

export default Sourcelistnew;
