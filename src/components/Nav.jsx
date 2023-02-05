import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";
function Nav () {
    return (
        <div className="nav-container">
            <div className="logo-image">
            <img src="../assets/my-beer-my-work.jpg" alt="logo" />
            </div>
            <ul>
                <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/beers">Beers</Link>
            </li>
            </ul>
        </div>
    )
};

export default Nav;