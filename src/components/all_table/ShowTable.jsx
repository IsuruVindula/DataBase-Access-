import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

const ShowTable = () => {

    const {tablename, dbname} = useParams();
    console.log(tablename,dbname)

    useEffect(() => {
        axios.get('http://10.70.17.23:8092/v1/test/db/' + dbname + '/table/' + tablename)
        .then(res => console.log(res.data))
    }, [])

    return (
        <Container>
            <h1> </h1>
        </Container>
    )
}

export default ShowTable;

