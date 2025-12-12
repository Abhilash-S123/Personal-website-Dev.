import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section-padding flex-center" id="home">
            <div className="container grid-cols-2 flex-center">
                <div className="hero-content">
                    <span className="subtitle">Hello, I'm a</span>
                    <h1 className="heading-xl">
                        Full Stack  <br />
                        <span className="text-gradient">Developer</span>
                    </h1>
                    <p className="body-text note">
                        A <span className="keyword">Self-Leaner</span> in MERN stack for past 7 months
                        ( <span className="keyword">Full-time</span> ). I also have knowledge in <span className="keyword">
                            DATA STRUCTURE</span> & <span className="keyword">AWS</span>. To know my value checkout my <span className='keyword'>Projects</span>
                    </p>
                    <div className="button-group">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="code-card">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-content">
                            <pre>
                                <code>
                                    <span className="keyword">const</span> <span className="variable">developer</span> = <span className="brace">{'{'}</span>
                                    {'\n'}  <span className="key">name</span>: <span className="string">"Abhilash S"</span>,
                                    {'\n'}  <span className="key">skills</span>: [<span className="string">"DATA STRUCTURE"</span>, <span className="string">"AWS"</span>, <span className="string">"MERN"</span>],
                                    {'\n'}  <span className="key">smartWorker</span>: <span className="boolean">true</span>
                                    {'\n'}  <span className="key">hardWorker</span>: <span className="boolean">true</span>
                                    {'\n'}<span className="brace">{'}'}</span>;
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
