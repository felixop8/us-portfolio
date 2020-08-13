import * as React from 'react';
import styles from './Projects.module.scss';

import { IProjects } from '../../types';

export type ProjectsProps = {projectsData: IProjects[]};

export const Projects: React.FC<ProjectsProps> = ({ projectsData }) => (
    <div className={styles.container}>
        <h1 className={styles.projectsTitle}>Projects <br/>Experiments</h1>
        <p>
            Since I started working for Vacasa in 2017, I haven't had much time or energie to work on 
            personal projects due to the load of work my team experienced during the last 3 years, 
            excuses apart, here are some really old non-maintained projects and some new JavaScript/React 
            stuff I have been building to keep sharpening my frontend skills.
        </p>
        <section className={styles.flexContainer}>
        {
            projectsData.map((project, i) => (
                <div key={i} className={styles.projectCard}>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                    <p className={styles.description}>{project.description}</p>
                    <ul className={styles.linksList}>
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
        </section>

    </div>
)

