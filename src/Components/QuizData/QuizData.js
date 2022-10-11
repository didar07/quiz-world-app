import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from '../Option/Option';
import './QuizData.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizData = ({ question }) => {

    const { correctAnswer } = question
    console.log(correctAnswer)

    const handleEye = () => {
        toast(correctAnswer)
    }

    return (
        <div>
            <div className='question-container'>
                <div className='answer'>
                    <h1 className='text-2xl font-bold'>{question.question}</h1>

                    {
                        question.options.map(option => <Option key={option.id} option={option} correctAnswer={correctAnswer}></Option>)
                    }

                </div>
                <div className='eye-container'>
                    <button onClick={handleEye}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>

    );
};

export default QuizData;