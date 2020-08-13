import * as React from 'react';
import styles from './JobDetails.module.scss';
import { IEmploymentHistory } from '../../../types';

export type JobDetailsProps = { detail: IEmploymentHistory };

export const JobDetails: React.FC<JobDetailsProps> = ({detail}) => {

    const {jobTitle, company, location, dates, summary, accomplishments} = detail;

    return (
        <section className={styles.container}>
            <p className={styles.dates}>{dates}</p>
            <h2 className={styles.title}>{jobTitle} <span className={styles.company}>{company}, {location}</span></h2>
            <p className={styles.summary}>{summary}</p>
            <ul className={styles.accomplishment}>
                {
                    accomplishments.map((accomplishment, i) => (
                        <li key={i}>{accomplishment}</li>
                    ))
                }
            </ul>
        </section>
    )
}