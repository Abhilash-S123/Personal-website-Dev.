import React from 'react';
import './About.css';

import profileImg from '../assets/profile-uploaded.jpg';

const About = () => {
    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="grid-cols-2 flex-center">
                    <div className="about-visual">
                        <div className="about-img-container">
                            <img src={profileImg} alt="Profile" className="about-profile-img" />
                        </div>
                    </div>
                    <div className="about-content">
                        <span className="subtitle">About Me</span>
                        <h2 className="heading-lg">Committed to creating meaningful web experiences</h2>
                        <p className="body-text">
                            I am a passionate Full Stack Developer with a strong focus on the MERN stack, also have knowledge in DATA STRUCTURE & AWS
                            My journey began getting lost in the world of computers, which led me to pursue a career in web development.
                        </p>
                        <p className="body-text">
                            I love building full-stack applications that solve real-world problems and
                            I bring dedication and attention to detail to every project.
                        </p>
                        <p className='body-text'>
                            My education qualifications are plus two and a diploma ( non-it )
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
