import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({ id, option, correctAnswer }) => {
    console.log(correctAnswer)

    // const handleAnswer = (answer) => {
    //     const rightAnswer = option.find(selectedOption => answer === correctAnswer)

    // }
    const handleAnswer = () => {
        if (option === correctAnswer) {
            toast("Wow your answer is correct!!")

        }
    }

    return (
        <div>
            <h3> <input type="radio" name={id} onChange={handleAnswer} value={option} className="radio radio-secondary" />
                {option}
            </h3>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;