import * as React from 'react';

import styles from './About.module.scss';

export type AboutProps = {};

export const About: React.FC<AboutProps> = () => (
    <div className={styles.container}>
        <h3>About</h3>
        <p>State your career goals and show how they align with the job description you’re targeting. Be brief and keep it from sounding generic. Be yourself.</p>
    </div>
)