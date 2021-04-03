import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <h1 id="headerTitle"> Welcome to my Portfolio!</h1>
                        <div>
                            <h2>Gerard Mistretta</h2>
                            <h4>Full Stack Web Developer</h4>
                        </div>
                    </div>
                    <div>
                        Social Media Accounts/Icons Go Here!
                    </div>
                    {/* <img>
                        My Pic :D
                    </img> */}
                    <div>
                        <Link className="navOpps" to="/projects">Projects</Link> 
                        <Link className="navOpps" to="/skills">Skills</Link>
                        <a className="navOpps" target="_blank" rel="noreferrer noopener">Resume</a>
                    </div>
                </div>
            </header>
            <div>
                <p>
                    Hello and welcome! I am a Full Stack Software Engineer exploring the ever changing 
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
