import * as React from 'react';

import { IEmploymentHistory } from '../../../types';

export type JobDetailsProps = { detail: IEmploymentHistory };

export const JobDetails: React.FC<JobDetailsProps> = ({detail}) => {

    const {jobTitle, company, location, dates, summary, accomplishments} = detail;

    return (
        <section>
            <div>{dates}</div>
            <h3>{jobTitle}<span>{company}</span>{location}</h3>
            <p>{summary}</p>
            <ul>
                {
                    accomplishments.map((accomplishment, i) => (
                        <li key={i}>{accomplishment}</li>
                    ))
                }
            </ul>
        </section>
    )
}