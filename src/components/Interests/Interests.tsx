import * as React from 'react';

import styles from './Interests.module.scss';
import { IInterests } from '../../types';

export type InterestsProps = { interestsData: IInterests};

export const Interests: React.FC<InterestsProps> = ({ interestsData }) => (
    <div className={styles.container}>
        <h2>Interests</h2>
        <ul className={styles.interestsList}>
            {
                interestsData.interests.map((interest, i) => (
                    <li key={i} className={styles.interest}>
                        {interest}
                    </li>
                ))
            }
        </ul>
    </div>
)