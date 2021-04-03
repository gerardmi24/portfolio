import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <>
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
        </>
    )
}
