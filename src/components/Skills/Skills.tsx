import * as React from 'react';

import styles from './Skills.module.scss';

import { ISkill } from '../../types';

export type SkillsProps = {skillsData: ISkill[]}

export const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
    
    return (
        <div>
            <h3>Skills</h3>
            <ul>
                {
                    skillsData.map((skill, i) => (
                        <li key={i}>
                            {skill.title}, {skill.subtitle}
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}