import React from "react";
import Typewriter from "../Typewriter/Typewriter";
import './WelcomePage.css';

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <h2>Ghjattu</h2>
            <Typewriter strings={[
                '祝我好运，也祝你好运。',
                '悟已往之不谏，知来者之可追。',
            ]}/>
        </div>
    );
};

export default WelcomePage