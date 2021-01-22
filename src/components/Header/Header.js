import React from 'react';
import logo from '../../images/logo1.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
             <img src={logo} alt="logo photo"/>
             <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>

        </div>
    );
};

export default Header;