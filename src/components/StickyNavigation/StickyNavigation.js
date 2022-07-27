import React from "react";
import {Link} from "gatsby";
import './StickyNavigation.css';

const StickyNavigation = (props) => {
    return (
        <nav className="nav-container">
            <div className="nav-info">
                <h2 className="nav-title">{props.navTitle}</h2>
            </div>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
};

export default StickyNavigation