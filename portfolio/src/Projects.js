import React from 'react';
import { projObj } from './ProjObj.js';
import ProjectCard from './ProjectCard';
import Footer from './Footer';

function Projects() {

    return (
            <div className="Shift">
                {projObj ? projObj.map((proj) => <ProjectCard className="ProjectCard" key={proj.name} project={proj} /> ) : null}
                <div className="ProjectFooter">
                    <Footer />
                </div>
            </div>
    )
}

export default Projects