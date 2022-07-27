import React from "react";
import Typewriter from "../Typewriter/Typewriter";
import './WelcomePage.css';

const WelcomePage = (props) => {
    return (
        <div className="welcome-page">
            <h2 className="website-title">{props.websiteTitle}</h2>
            <Typewriter strings={[
                '悟已往之不谏，知来者之可追。',
                '祝你好运，也祝我好运。',
            ]}/>
            <a className="scroll-down" href="">
                <div className="arrow"></div>
            </a>
        </div>
    );
};

export default WelcomePage