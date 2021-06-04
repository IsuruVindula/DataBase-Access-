import React from 'react'
import { useParams } from 'react-router';

const Tabledetails = ({tabledetails}) => {

    const {tablename} = useParams();

    return (
        <div>
            <h2>HElloooooooo {tablename}</h2>
        </div>
    )
}

export default Tabledetails;


