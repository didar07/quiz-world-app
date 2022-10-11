import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizeDetails = () => {

    const quize = useLoaderData()
    console.log(quize.data)
    const { name, id, total } = quize.data
    return (
        <div>
            <h1 className='text-3xl text-blue-400'>Quiz of {name}</h1>
        </div>
    );
};

export default QuizeDetails;