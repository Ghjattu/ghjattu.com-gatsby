import React from "react";
import Typewriter from "../Typewriter/Typewriter";
import './WelcomePage.css';

const WelcomePage = (props) => {
    return (
        <div className="welcome-page">
            <h2>{props.websiteTitle}</h2>
            <Typewriter strings={[
                '悟已往之不谏，知来者之可追。',
                '祝你好运，也祝我好运。',
            ]}/>
        </div>
    );
};

export default WelcomePage