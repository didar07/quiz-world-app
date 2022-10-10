import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quize from '../Quize/Quize';

const Topics = () => {
    const quizes = useLoaderData()
    console.log(quizes.data)
    return (
        <div>
            <Header></Header>
            <h2>quiz: {quizes.data.length}</h2>

            {
                quizes.data.map(quize => <Quize key={quize.id} quize={quize}></Quize>)
            }
        </div>
    );
};

export default Topics;