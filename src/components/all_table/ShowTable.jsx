import React from 'react';
import { Container, Spinner } from 'reactstrap';

const ShowTable = ({data}) => {
    console.log(data);
    return (
        <Container>
            <Spinner/><Spinner/><Spinner/>
        </Container>
    )
}

export default ShowTable;

