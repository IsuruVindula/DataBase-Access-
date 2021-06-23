import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Container, ListGroup, Spinner} from "reactstrap";
import ShowTable from './ShowTable';

class Tabledetailsnew extends Component {
    state = {
        keys: [],
        data: {},
        selecteddata: {}
    }

    componentDidMount(){
        const {dbname} = this.props.match.params;
        console.log(dbname);
        axios.get('http://10.70.17.23:8092/v1/test/db/' + dbname )
        .then(res => {
            this.setState({data: res.data, keys: Object.keys(res.data)})
        })
        .catch(err => console.log(err))
    }


     handleClick(key){
        console.log(this.state.data[key]);
        this.setState({selecteddata: this.state.data[key]})
     }


    render() {
        const tablenames = this.state.keys.map((key) => {return (Object.keys(this.state.data[key]))})

        const tables = this.state.data ? (
            tablenames.map((tablename,key) => (
                <ListGroupItem key={key}><Link style={{color: 'black'}} to="/showtable" onClick={()=>this.handleClick(key)}>{tablename}</Link></ListGroupItem>
            ))
        ): ( <Spinner/> )


        return(
            <Container style={{padding: '0%', borderLeftStyle: 'none'}}>
                    <ListGroup className="list-group-item">
                        {tables}
                    </ListGroup>
                    {Object.keys(this.state.selecteddata).length !== 0 &&  <ShowTable data={this.state.selecteddata} />}
            </Container>
        )
    }
}

export default Tabledetailsnew;
