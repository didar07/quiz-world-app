import React from 'react';

const Option = ({ id, option, correctAnswer }) => {
    console.log(correctAnswer)

    // const handleAnswer = (answer) => {
    //     const rightAnswer = option.find(selectedOption => answer === correctAnswer)

    // }
    const handleAnswer = () => {
        if (option === correctAnswer) {
            alert('ans right')
        }
    }

    return (
        <div>
            <h3> <input type="radio" name={id} onChange={handleAnswer} value={option} className="radio radio-secondary" />
                {option}
            </h3>

        </div>
    );
};

export default Option;