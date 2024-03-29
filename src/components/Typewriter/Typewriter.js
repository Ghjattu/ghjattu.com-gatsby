import React from "react";
import Typed from "typed.js";

const style = {
    'height': '1.5em',
    'color': '#999',
};

class Typewriter extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const {strings} = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 120,
            backSpeed: 40,
            loop: true,
            loopCount: Infinity,
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return (
            <div className="wrap">
                <div className="type-wrap" style={style}>
                  <span
                      style={{whiteSpace: 'pre'}}
                      ref={(el) => {
                          this.el = el;
                      }}
                  ></span>
                </div>
            </div>
        );
    }
}

export default Typewriter