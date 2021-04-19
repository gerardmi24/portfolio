import React from 'react'
import { projObj } from './ProjObj.js'
import ProjectCard from './ProjectCard'

function Projects() {

    return (
            <div className="Shift">
                {projObj ? projObj.map((proj) => <ProjectCard className="ProjectCard" key={proj.name} project={proj} /> ) : null}
            </div>
    )
}

export default Projects