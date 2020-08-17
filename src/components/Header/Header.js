import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="content">
                    <h1>Hi, I'm Sam</h1>
                    <p>I'm a Full Stack Web Developer, living in London.</p>
                    <p>I work for <a href="https://nucreative.co.uk" target="_blank" rel="noopener noreferrer">NU Creative</a>, a creative agency based in Bermondsy.</p>
                    <p>My current favourite web stack to work in is, <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>, <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a>, <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a> and <a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">NGINX</a>. This site is currently built using ReactJS.</p>
                </div>
            </div>
        );
    }
}

export default Header;