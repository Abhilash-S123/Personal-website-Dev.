import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Quickchat',
            aws: true,
            description: (
                <>
                    <p>A responsive <span className='keyword'>Real-time chatting </span>platform built with MERN stack and Tailwind CSS.</p>
                    <ul className="project-features">
                        <li>User account creation & Sign in (JWT Authentication)</li>
                        <li><span className='keyword'>Password hashing</span>  using Bcrypt</li>
                        <li>Protected routes with middlewares</li>
                        <li>Real-time messaging & <span className='keyword'>Image sharing</span> (Cloudinary)</li>
                        <li>Profile updates & live <span className='keyword'>Typing status/Message seen</span> indicators</li>
                        <li><span className='keyword'>Online/Offline</span> status tracking via Socket.IO</li>
                        <li><span className='keyword'>Git</span> version controller is used and code uploaded in <span className='keyword'>GitHub</span></li>
                    </ul>
                    <p className="project-note"><strong>Frontend:</strong> Vercel | <strong>Backend:</strong> <span className='keyword'>AWS ElasticBeanstalk </span> & Render</p>
                    <h5 className="note">Note: Backend with socket.IO required https, for that domain purchase is needed so I hosted in Render</h5>
                    <p className="project-tip note"><em>Tip: Use different browsers/devices and create two accounts to test real-time features.</em></p>
                </>
            ),
            tags: ['Amazon Web Services (AWS)', 'Git', 'Socket.IO', 'REST APIs', 'MERN', 'JWT', 'Bcrypt', 'Cloudinary', 'mongoose', 'Tailwind'],
            link: 'https://chat-application-avpq.vercel.app',
            github: 'https://github.com/Abhilash-S123/Chat-Application'
        },
        {
            title: 'Quickblog',
            description: (
                <>
                    <p>A web application where <span className='keyword'>Admin</span> can create blogs using <span className='keyword'>AI</span> (Responsive too using tailwind CSS).</p>
                    <ul className="project-features">
                        <li>Admin can create blogs using <span className='keyword'>AI (Google Gemini)</span></li>
                        <li>Admin can <span className='keyword'>Publish</span> and <span className='keyword'>Unpublish</span> blogs</li>
                        <li><span className='keyword'>JWT Authentication</span> is used for Admin verification</li>
                        <li>Used middlewares to protect routes</li>
                        <li><span className='keyword'>User</span> can read blogs and <span className='keyword'>add comments</span></li>
                        <li>Admin can <span className='keyword'>verify</span> or delete comments</li>
                        <li>Images are saved using <span className='keyword'>ImageKit API</span></li>
                        <li><span className='keyword'>Git</span> version controller is used and code uploaded in <span className='keyword'>GitHub</span></li>
                    </ul>
                    <div className="project-tip note" style={{ background: 'rgba(236, 72, 153, 0.1)', borderLeftColor: 'var(--accent-secondary)' }}>
                        <p style={{ color: '#f9a8d4', marginBottom: '5px' }}><strong>Admin Login Credentials:</strong></p>
                        <p>Email: admin@example.com</p>
                        <p>Password: greatstack</p>
                    </div>
                </>
            ),
            tags: ['AI (Gemini)', 'Tailwind', 'MERN', 'ImageKit', 'Git'],
            link: 'https://blog-app-smu7.vercel.app',
            github: 'https://github.com/Abhilash-S123/Blog-App'
        },
        {
            title: 'Personal Website',
            description: (<p>A responsive personal website built with <span className="keyword">Antigravity IDE</span> by Google ( This website ).</p>),
            tags: ['Antigravity IDE', 'React', 'Git'],
            link: '#',
            github: 'https://github.com/Abhilash-S123/Personal-website-Dev.'
        }
    ];

    return (
        <section className="projects section-padding" id="projects">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">My Work</span>
                    <h2 className="heading-lg">Featured <span className="text-gradient">Projects</span></h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-desc">{project.description}</div>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.link} className="btn btn-primary btn-sm">View Project</a>
                                    <a href={project.github} className="btn btn-outline btn-sm">GitHub</a>
                                    {project.aws && <a href="http://chatapp-env.eba-4iejvebw.eu-north-1.elasticbeanstalk.com/api/status" className="btn btn-outline btn-sm">AWS</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
