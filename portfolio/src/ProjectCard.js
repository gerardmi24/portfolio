import React from 'react'

export default function Projects({project}) {
    return (
        <div>
            <div className="img-wrapper">
                <img src={project.image} alt={project.name} />
                    <h2>{project.name}<br />
                    <p>{project.description} <br /><br />
                        {project.languages}
                    </p>
                    </h2>
                <ul>
                <li><a href={project.frontend} target="_blank" rel="noreferrer noopener"><i className="fab fa-github"></i></a></li>
                <li><a href={project.demo} target="_blank" rel="noreferrer noopener"><i className="fab fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

