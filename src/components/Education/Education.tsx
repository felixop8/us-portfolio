import * as React from 'react';

import styles from './Education.module.scss';

import { IEducation } from '../../types';

export type EducationProps = {educationData: IEducation[]};

export const Education: React.FC<EducationProps> = ({ educationData }) => (
    <div>
        <h3>Education</h3>
        <ul>
            {
                educationData.map((education, i) => (
                    <li key={i}>
                        {education.title} {education.center}
                    </li>
                ))
            }
        </ul>

        
    </div>
)