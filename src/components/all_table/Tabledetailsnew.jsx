import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Container, ListGroup} from "reactstrap";


class Tabledetailsnew extends Component {
    state = {
        keys: [],
        data: {}
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


    render() {
        // (Object.keys(this.state.data[i]))
        const tables = this.state.data ? (
            this.state.keys.map(i => (
                <ListGroupItem><Link style={{color: 'black'}}>{Object.keys(this.state.data[i])}</Link></ListGroupItem>
            ))
        ): ( <h1> NO data</h1> )


        return(
            <Container style={{padding: '0%', borderLeftStyle: 'none'}}>

                    <ListGroup className="list-group-item">
                        {tables}
                    </ListGroup>

            </Container>
        )
    }
}

export default Tabledetailsnew;
