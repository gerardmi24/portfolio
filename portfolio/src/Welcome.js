import React from 'react';
import { Link } from 'react-router-dom';
import ProfPic from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/profilePic.jpeg';
import GitLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/GithubLogo.jpeg';
import LinkedInLogo from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/LinkedInIcon.jpeg';
import MediumIcon from '/Users/gerardmistretta/Development/portfolio/portfolio/src/images/MediumIcon.jpeg';

export default function Welcome() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <h1 id="headerTitle"> Welcome to my Portfolio!</h1>
                        <div>
                            <h2>Gerard Mistretta</h2>
                            <h4>Fullstack Web Developer</h4>
                        </div>
                    </div>
                    <img src={GitLogo} />
                    <img src={LinkedInLogo} />
                    <img src={MediumIcon} />
                    <img src={ProfPic} />
                    <div>
                        <Link className="navOpps" to="/projects">Projects</Link> 
                        <Link className="navOpps" to="/skills">Skills</Link>
                        <a className="navOpps" target="_blank" rel="noreferrer noopener" href="https://docs.google.com/document/d/1Hf_4ZcvoPeXyfCt5hgiqUslGLuO2pHRJmiaZo7HYbx4/edit">Resume</a>
                    </div>
                </div>
            </header>
            <div>
                <p>
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
