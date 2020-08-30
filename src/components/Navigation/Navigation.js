import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="logo-wrapper">
                    <h1 className="logo">&#60;<span>SR</span>/&#62;</h1>
                </div>
                <div className="nav-items">
                    {/* <div className="theme-picker">
                        <div className="current-theme">
                            <div className="theme-color"></div>
                            <div className="dropdown-link"></div>
                        </div>
                    </div> */}
                    <div className="nav-links">
                        <a href="#about-me">About me</a>
                        <a href="#timeline">Timeline</a>
                        <a href="#projects">Projects</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact-me">Contact Me</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;