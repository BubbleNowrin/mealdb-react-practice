import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h2>Header</h2>
            <div>
                <a href="#">Home</a>
                <a href="#">Meals</a>
                <a href="#">Cart</a>
                <a href="#">LogIn</a>
            </div>
        </nav>
    );
};

export default Header;