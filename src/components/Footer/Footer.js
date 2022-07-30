import React from "react";
import {Icon} from '@iconify/react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="technology">
                <nav>
                    <span>powered by</span>
                    <section className="tech-links">
                        <a href="https://reactjs.org/" target="_blank" title="React" rel="noopener noreferrer">
                            <span>React</span>
                            <Icon icon="logos:react" width="20" height="20" inline={true}/>
                        </a>
                        <a href="https://www.gatsbyjs.com/" target="_blank" title="Gatsby" rel="noopener noreferrer">
                            <span>Gatsby</span>
                            <Icon icon="logos:gatsby" width="20" height="20" inline={true}/>
                        </a>
                    </section>
                </nav>
            </div>
        </footer>
    )
};

export default Footer
