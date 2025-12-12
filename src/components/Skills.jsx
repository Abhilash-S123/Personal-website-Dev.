import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Data Structure', category: 'DSA', level: '55%' },
        { name: 'AWS', category: 'cloud-platform', level: '55%' },
        { name: 'React', category: 'Frontend', level: '80%' },
        { name: 'Node.js', category: 'Backend', level: '85%' },
        { name: 'MongoDB', category: 'Backend', level: '70%' },
        { name: 'Express.js', category: 'Backend', level: '85%' },
        { name: 'JavaScript', category: 'Language', level: '80%' },
        { name: 'Tailwind CSS', category: 'Frontend', level: '65%' },
        { name: 'Git', category: 'Version Control', level: '85%' },
        { name: 'HTML', category: 'Frontend', level: '85%' },
        { name: 'CSS ', category: 'Frontend', level: '70%' },
    ];

    return (
        <section className="skills section-padding" id="skills">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">My Arsenal</span>
                    <h2 className="heading-lg">Technical <span className="text-gradient">Skills</span></h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-info">
                                <h3 className="skill-name">{skill.name}</h3>
                                <span className="skill-category">{skill.category}</span>
                            </div>
                            <div className="skill-bar-bg">
                                <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
