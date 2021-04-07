import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'

export default function Nav() {
    return (
        <div>
            <div>
                <h2>Gerard Mistretta</h2>
                <br/>
                <br/>
                <p>Fullstack Software Engineer</p>
                <br/>
            </div>
            <div>
                <a href="https://github.com/gerardmi24" target="_blank" rel="noreferrer noopener" ><i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/gerard-mistretta/" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin"></i></a>
                <a href="https://gerardmistretta.medium.com/" target="_blank" rel="noreferrer noopener"><i className="fab fab fa-medium"></i></a>
            </div>
            <div className="navLinks">
                <li><Link to="/" className="link"> About </Link></li>
                <li><Link to="/projects" className="link"> Projects </Link></li>
                <li><Link to="/skills" className="link"> Skills </Link></li>
                <li><a className="link"  target="_blank" rel="noreferrer noopener"href="https://docs.google.com/document/d/1Hf_4ZcvoPeXyfCt5hgiqUslGLuO2pHRJmiaZo7HYbx4/edit">Resume</a></li>
            </div>
            <div className="nav-footer">
            <Footer />
            </div>
        </div>
    )
}
