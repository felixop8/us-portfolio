import * as React from 'react';

import styles from './Interests.module.scss';
import { IInterests } from '../../types';

export type InterestsProps = { interestsData: IInterests};

export const Interests: React.FC<InterestsProps> = ({ interestsData }) => (
    <div className={styles.container}>
        <ul>
            {
                interestsData.interests.map((interest, i) => (
                    <li key={i}>
                        {interest}
                    </li>
                ))
            }
        </ul>
    </div>
)