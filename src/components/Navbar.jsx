import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container flex-between navbar-container">
                <a href="#" className="logo">Dev<span className="dot">.</span></a>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                    <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a>
                </div>

                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
