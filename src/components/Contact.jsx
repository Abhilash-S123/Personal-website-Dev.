import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section-padding" id="contact">
            <div className="container flex-center">
                <div className="contact-content text-center">
                    <span className="subtitle">Get in Touch</span>
                    <h2 className="heading-lg">Let's work <br /><span className="text-gradient">together</span></h2>
                    <p className="body-text">
                        Have a project in mind? Want to hire me?
                        Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact-methods-grid">
                        <a href="mailto:abhilashsubhash72@gmail.com" className="method-card">
                            <div className="method-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <span className="method-label">Email</span>
                            <span className="method-value">abhilashsubhash72@gmail.com</span>
                        </a>

                        <a href="" className="method-card">
                            <div className="method-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <span className="method-label">Phone</span>
                            <span className="method-value">9746534378</span>
                            <h6>OR</h6>
                            <span className="method-value">9846980759</span>
                        </a>

                        <a href="https://www.linkedin.com/in/abhilash-s-617130389/" className="method-card">
                            <div className="method-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </div>
                            <span className="method-label">LinkedIn</span>
                            <span className="method-value">Connect</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
