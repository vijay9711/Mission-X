import React, { Component } from 'react';
import "./Welcome.css"
import Particles from 'react-particles-js';

class Welcome extends Component {
    state = {}
    render() {
        return (
            <React.Fragment class="welcome">
                <Particles />
                <p style={{ color: "white" }}>t</p>
            </React.Fragment>
        );
    }
}

export default Welcome;