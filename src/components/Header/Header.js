import React from 'react';
import logo from '../../images/manush-tech.jpg';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div >
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink exact activeClassName="active" to="/" className="navbar-brand nav-logo"><img style={{width:'50px'}} src={logo} alt="" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mono-text">
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" to="/shop" className="nav-link navigation-item px-3">Home<span className="sr-only"></span></NavLink>
                    </li>
                
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" to="/review" className="nav-link navigation-item px-3">Order review<span className="sr-only"></span></NavLink>
                    </li>
                   
                </ul>
            </div>
        </nav>

    </div>
    );
};

export default Header;