import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';

const QuizeDetails = () => {

    const quize = useLoaderData()

    const { name } = quize.data
    console.log(quize.data.questions)

    return (
        <div>
            <h1 className='text-3xl text-blue-400'>Quiz of {name}</h1>
            {
                quize.data.questions.map(question => <QuizData key={question.id} question={question}></QuizData>)
            }
        </div>
    );
};

export default QuizeDetails;