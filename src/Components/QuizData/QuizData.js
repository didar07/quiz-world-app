import React from 'react';

const QuizData = ({ question }) => {
    console.log(question.options)
    return (
        <div>
            <div className='question-container'>
                <h1 className='text-2xl font-bold'>{question.question}</h1>
                <div className='answer'>
                    <h3>{question.options[0]}</h3>
                    <h3>{question.options[1]}</h3>
                    <h3>{question.options[2]}</h3>
                    <h3>{question.options[3]}</h3>
                </div>
            </div>
        </div>
    );
};

export default QuizData;