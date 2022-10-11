
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quize from '../Quize/Quize';
import './Topics.css'
const Topics = () => {
    const quizes = useLoaderData()
    console.log(quizes.data)
    return (
        <div>
            <Header></Header>

            <div className='quize-container'>
                {
                    quizes.data.map(quize => <Quize key={quize.id} quize={quize}></Quize>)
                }
            </div>
        </div>
    );
};

export default Topics;