import React from 'react';
import Option from '../Option/Option';
import './QuizData.css'
const QuizData = ({ question, id, options }) => {
    // console.log(correctAnswer)
    const { correctAnswer } = question
    console.log(correctAnswer)



    return (
        <div>
            <div className='question-container'>
                <h1 className='text-2xl font-bold'>{question.question}</h1>
                <div className='answer'>

                    {
                        question.options.map(option => <Option key={option.id} option={option} correctAnswer={correctAnswer}></Option>)
                    }

                </div>
            </div>
        </div>
    );
};

export default QuizData;