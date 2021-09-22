import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="/shop">shop</a></li>
                    <li><a href="/order review">order review</a></li>
                    <li><a href="/manage inventory here">manage inventory here</a></li>
                </ul>
            </nav>
            <div className="search-area">
                <input type="text" placeholder="type here to search" />
                <p><FontAwesomeIcon icon={faShoppingCart} /><span>0</span></p>
            </div>
        </div>
    );
};

export default Header;