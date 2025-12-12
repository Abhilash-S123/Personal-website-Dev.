import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container flex-between footer-content">
                <p className="copyright">© 2025 Dev. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Abhilash-S123" className="social-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/abhilash-s-617130389/" className="social-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
