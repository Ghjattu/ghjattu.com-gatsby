import React from "react";
import Typewriter from "../Typewriter/Typewriter";
import './WelcomePage.css';

const WelcomePage = (props) => {
    const handleClick = (e) => {
        const welcomePage = document.querySelector("#welcome-page");
        if (window.scrollTo) {
            e.preventDefault();
            window.scrollTo({"behavior": "smooth", "top": welcomePage.offsetHeight});
        }
    };

    return (
        <div className="welcome-page" id="welcome-page">
            <h2 className="website-title">{props.websiteTitle}</h2>
            <Typewriter strings={[
                '悟已往之不谏，知来者之可追。',
                '祝你好运，也祝我好运。',
            ]}/>
            <button className="scroll-down" onClick={handleClick} onKeyDown={handleClick}>
                <div className="arrow"></div>
            </button>
        </div>
    );
};

export default WelcomePage