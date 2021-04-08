import React from 'react';
import { Link } from 'react-router-dom';
import ProfPic from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/profilePic.jpeg';
import GitLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/Github.png';
import LinkedInLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/LinkedIn Logo.png';
import MediumIcon from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/medium-2177.png';

export default function Welcome() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <h1 className="HeaderTitle"> Welcome to my Portfolio!</h1>
                        <div>
                            <h1 className="Name">Gerard Mistretta</h1>
                            <h3 className="Description">Fullstack Web Developer</h3>
                        </div>
                    </div>
                    <img className="Me" src={ProfPic} alt="Gerard Mistretta" />
                    <div>
                        <Link className="navOpps" to="/projects">Projects</Link> 
                        <Link className="navOpps" to="/skills">Skills</Link>
                        <a className="navOpps" target="_blank" rel="noreferrer noopener" href="https://docs.google.com/document/d/1Hf_4ZcvoPeXyfCt5hgiqUslGLuO2pHRJmiaZo7HYbx4/edit">Resume</a>
                    </div>
                    <div className="Socials">
                        <a className="SocialLogo" href="https://github.com/gerardmi24" target="_blank" rel="noreferrer noopener"><img src={GitLogo} alt="Github Logo" /></a>
                        <a className="SocialLogo" href="https://www.linkedin.com/in/gerard-mistretta/" target="_blank" rel="noreferrer noopener"><img src={LinkedInLogo} alt="LinkedIn Logo" /></a>
                        <a className="SocialLogo" href="https://gerardmistretta.medium.com/" target="_blank" rel="noreferrer noopener"><img src={MediumIcon} alt="Medium Logo" /></a>
                    </div>
                </div>
            </header>
            <div>
                <p className="Bio">
                    Hello and welcome! I am a Fullstack Software Engineer exploring the ever changing 
                    landscape of technology. After earning my MBA and working in Marketing for a few years, 
                    I decided to take on a new challenge and enter the fascinating world of Web Development. 
                    After receiving my certification from Flatiron School's Software Engineering Bootcamp, 
                    I  continued exploring different platforms, tools and technologies to continue learning 
                    in this rapidly evolving industry.
                </p>
            </div>
        </>
    )
}
