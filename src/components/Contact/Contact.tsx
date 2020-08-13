import * as React from 'react';

import styles from './Contact.module.scss';

const RESUME_LINK = 'https://www.dropbox.com/s/cdaaqg571j5qh1d/FelixOportoResume.pdf?dl=0'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/felix-oporto/'
const GITHUB_LINK = 'https://github.com/felixop8'

export type ContactProps = {};

export const Contact: React.FC<ContactProps> = () =>(
    <div className={styles.container}>
        <h2>Links</h2>
        <ul className={styles.linkList}>
            <li>
                <a href={RESUME_LINK}>Download my resume (PDF)</a>
            </li>
            <li>
                <a href={LINKEDIN_LINK}>View my LinkedIn profile</a>
            </li>
            <li>
                <a href={GITHUB_LINK}>View my GitHub profile</a>
            </li>
        </ul>
    </div>
);