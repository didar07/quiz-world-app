import React from 'react';
import './Quize.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Quize = ({ quize }) => {
    const { id, name, logo, total } = quize
    return (

        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100">Total quiz: {total}</p>
                    </div>
                    <button className='quize-btn  bg-slate-200'>
                        <Link to={`/quize/${id}`}> Start This <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quize;