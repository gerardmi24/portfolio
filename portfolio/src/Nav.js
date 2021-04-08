import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import GitLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/Github.png';
import LinkedInLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/LinkedIn Logo.png';
import MediumIcon from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/medium-2177.png';

export default function Nav() {
    return (
        <div>
            <div>
                <h2>Gerard Mistretta</h2>
                <p>Fullstack Software Engineer</p>
                <br/>
            </div>
            <div>
                <a href="https://github.com/gerardmi24" target="_blank" rel="noreferrer noopener" ><img src={GitLogo} alt="Github Logo"></img></a>
                <a href="https://www.linkedin.com/in/gerard-mistretta/" target="_blank" rel="noreferrer noopener"><img src={LinkedInLogo} alt="LinkedIn Logo"></img></a>
                <a href="https://gerardmistretta.medium.com/" target="_blank" rel="noreferrer noopener"><img src={MediumIcon} alt="Medium Logo"></img></a>
            </div>
            <div className="navLinks">
                <li><Link to="/" className="link"> Home </Link></li>
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
