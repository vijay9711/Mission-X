import React, { Component } from 'react';
import "./NavBar.css"
class NavBar extends Component {
    state = {}
    render() {
        // snow strom package is there
        return (
            <div>
                <div class="container">
                    <button class="linkButton">HOME</button>
                    <button class="linkButton">ARTICLES</button>
                    <button class="linkButton">PORTFOLIO</button>
                    <button class="linkButton">ABOUT</button>
                    <button class="linkButton">CONTACT</button>
                </div>
            </div>
        );
    }
}

export default NavBar;