import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-name'>
                <h1 className='text-sky-600 text-4xl font-bold'>Quiz world</h1>
            </div>

            <div className='nav-link'>
                <Link className='link' to='/topics'>Topics</Link>
                <Link className='link' to='/statistics'>Statistics</Link>
                <Link className='link' to='/blogs'>blogs</Link>
            </div>
        </div>
    );
};

export default Navbar;