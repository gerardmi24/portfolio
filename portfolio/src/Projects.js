import React from 'react';
import { projObj } from './ProjObj.js';
import ProjectCard from './ProjectCard';
import Footer from './Footer';

function Projects() {

    const projectIteration = projObj.map((proj) => <ProjectCard className="ProjectCard" key={proj.name} project={proj} /> )

    return (
            <div className="Shift">
                {projectIteration}
                <div className="ProjectFooter">
                    <Footer />
                </div>
            </div>
    )
}

export default Projects