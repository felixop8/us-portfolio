import * as React from 'react';

import styles from './Skills.module.scss';

import { ISkill } from '../../types';

export type SkillsProps = {skillsData: ISkill[]}

export const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
    
    return (
        <div className={styles.container}>
            <h2>Skills</h2>
            <ul className={styles.skillList}>
                {
                    skillsData.map((skill, i) => (
                        <li key={i} className={styles.skill}>
                            <span className={styles.skillTitle}>{skill.title}</span> <br/> {skill.subtitle}
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}