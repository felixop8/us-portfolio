import * as React from 'react';

import styles from './About.module.scss';
import { IAbout } from '../../types';

export type AboutProps = {aboutData: IAbout};

export const About: React.FC<AboutProps> = ({ aboutData }) => (
    <div className={styles.container}>
        <h2 className={styles.about}>About</h2>

        <div className={styles.summary}>
            {
                aboutData.summary.map((detail, i) => (
                    <p key={i}>{detail}</p>
                ))
            }
        </div>
    </div>
)