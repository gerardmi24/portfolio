import React from 'react';
import { NavLink } from 'react-router-dom';
import GitLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/Github.png';
import LinkedInLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/LinkedIn Logo.png';
import MediumIcon from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/medium-2177.png';

export default function Nav() {
    return (
        <div>
            <div>
                <h2 className="NavName" >Gerard Mistretta</h2>
                <p className="NavTitle" >Fullstack Software Engineer</p>
            </div>
            <div className="navLinks">
                <a className="NavHomeBtn" ><NavLink exact to="/" className="linkOpps">Home</NavLink></a>
                <a className="NavProjectsBtn" ><NavLink to="/projects" className="linkOpps">Projects</NavLink></a>
                <a className="NavSkillsBtn" ><NavLink to="/skills" className="linkOpps">Skills</NavLink></a>
                <a className="ResumeBtn" ><a className="linkOpps"  target="_blank" rel="noreferrer noopener"href="https://docs.google.com/document/d/1Hf_4ZcvoPeXyfCt5hgiqUslGLuO2pHRJmiaZo7HYbx4/edit">Resume</a></a>
            </div>
            <div className="NavSocialsPage" >
                <a href="https://github.com/gerardmi24" target="_blank" rel="noreferrer noopener"><img className="NavGit" src={GitLogo} alt="Github Logo"></img></a>
                <a href="https://www.linkedin.com/in/gerard-mistretta/" target="_blank" rel="noreferrer noopener"><img className="NavLI" src={LinkedInLogo} alt="LinkedIn Logo"></img></a>
                <a href="https://gerardmistretta.medium.com/" target="_blank" rel="noreferrer noopener"><img className="NavMed" src={MediumIcon} alt="Medium Logo"></img></a>
            </div>
        </div>
    )
}
