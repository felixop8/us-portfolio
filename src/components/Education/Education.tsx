import * as React from 'react';

import styles from './Education.module.scss';

import { IEducation } from '../../types';

export type EducationProps = {educationData: IEducation[]};

export const Education: React.FC<EducationProps> = ({ educationData }) => (
    <div className={styles.container}>
        <h2>Education</h2>
        <ul className={styles.educationList}>
            {
                educationData.map((education, i) => (
                    <li key={i} className={styles.education}>
                        <span className={styles.educationTitle}>{education.title}</span> <br/> {education.center}
                    </li>
                ))
            }
        </ul>

        
    </div>
)