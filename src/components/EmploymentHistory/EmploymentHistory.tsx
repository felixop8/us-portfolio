import * as React from 'react';

import styles from './EmploymentHistory.module.scss';

import { JobDetails } from './JobDetails/JobDetails';
import { IEmploymentHistory } from '../../types';


export type EmploymentHistoryProps = {data: IEmploymentHistory[]}

export const EmploymentHistory: React.FC<EmploymentHistoryProps> = ({data}) => (
    <section className={styles.container}>
        <h2>Experience</h2>
        <div>
            {
                data.map((detail, i) => (
                    <JobDetails key={i} detail={detail}/>
                ))
            }
        </div>

        
    </section>
)