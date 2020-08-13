import * as React from 'react';
import styles from './TitleName.module.scss';

export type TitleNameProps = {};

export const TitleName: React.FC<TitleNameProps> = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Software Engineer</h4>
            <h1 className={styles.name}>Félix <br/> Oporto López</h1>
        </div>
    )
}