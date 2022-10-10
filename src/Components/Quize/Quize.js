import React from 'react';
import './Quize.css'
const Quize = ({ quize }) => {
    const { name, logo, total } = quize
    return (
        <div className='quize-container'>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100">Total question: {total}</p>
                    </div>
                    <button type="button" className="quize-btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-slate-200">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Quize;