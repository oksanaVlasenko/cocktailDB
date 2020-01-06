import React from 'react';
import './header.css';
import logo from '../header/cocktail.png';


class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <h1 className="header ">Cocktail DB</h1>
                <img src={logo} alt="cocktail"/>
            </div>
        )
    }    
}

export default Header;