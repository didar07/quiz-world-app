import React from 'react';

const Quize = ({ quize }) => {
    const { name, logo } = quize
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Quize;