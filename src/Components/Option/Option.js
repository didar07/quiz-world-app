import React from 'react';

const Option = ({ id, option }) => {
    console.log(option)
    return (
        <div>
            <h3> <input type="radio" name={id} value={option} className="radio radio-secondary" checked />
                {option}
            </h3>

        </div>
    );
};

export default Option;