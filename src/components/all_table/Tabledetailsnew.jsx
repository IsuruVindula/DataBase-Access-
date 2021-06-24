import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Container, ListGroup, Spinner} from "reactstrap";
import ShowTable from './ShowTable';

class Tabledetailsnew extends Component {
    state = {
        keys: [],
        data: {},
        database: ''
    }

    componentDidMount(){
        const {dbname} = this.props.match.params;
        this.setState({database: dbname})

        axios.get('http://10.70.17.23:8092/v1/test/db/' + dbname )
        .then(res => {
            this.setState({data: res.data, keys: Object.keys(res.data)})
        })
        .catch(err => console.log(err))
    }


    render() {
        const tablenames = this.state.keys.map((key) => {return (Object.keys(this.state.data[key]))})
        console.log(this.state)

        const tables = this.state.data ? (
            tablenames.map((tablename,key) => (
                <ListGroupItem key={key}><Link style={{color: 'black'}} to={`/showtable/${this.state.database}/${tablename}/`} >{tablename}</Link></ListGroupItem>
            ))
        ): ( <Spinner/> )


        return(
            <Container style={{padding: '0%', borderLeftStyle: 'none'}}>
                    <ListGroup className="list-group-item">
                        {tables}
                    </ListGroup>
                    {/* {Object.keys(this.state.selecteddata).length !== 0 &&  <ShowTable/>} */}
            </Container>
        )
    }
}

export default Tabledetailsnew;
