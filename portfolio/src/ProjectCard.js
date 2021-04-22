import React from 'react';

export default function Projects({project}) {
    return (
        <div>
            <div className="img-wrapper">
                <img src={project.image} alt={project.name} />
                <h2>{project.name}<br />
                    <p>{project.description} <br />
                        {project.languages}
                    </p>
                </h2>
                <ul>
                    <li>
                    {/* https://searchenginelaws.com/seo/what-is-rel-noopener-noreferrer-tag/#:~:text=Definition%20of%20rel%20%3D%20noopener%20noreferrer&text=target%3D%E2%80%9D_blank%E2%80%9D%20alert%20the,open%20in%20its%20own%20tab.&text=So%20by%20adding%20rel%20noopener,opener%20feature. */}
                    {/* https://gist.github.com/ferdisahin/9d0b20badb58053fef22979f5846f883 */}
                        <a href={project.frontend} target="_blank" rel="noreferrer noopener">
                            <i class="fab fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href={project.demo} target="_blank" rel="noreferrer noopener">
                            <i class="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

