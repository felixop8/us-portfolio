import * as React from 'react';

import { IProjects } from '../../types';

export type ProjectsProps = {projectsData: IProjects[]};

export const Projects: React.FC<ProjectsProps> = ({ projectsData }) => (
    <div>
        <h3>Projects</h3>
        {
            projectsData.map((project, i) => (
                <div key={i}>
                    <h1>{project.title}</h1>
                    <h3>{project.subtitle}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {
                            project.links.map((link, i) => (
                                <li key={i}>
                                    <a href={link.url} rel="noopener noreferrer" target='_blank'>
                                        {link.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    
                </div>
            ))
        }
    </div>
)

