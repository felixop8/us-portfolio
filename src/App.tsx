import * as React from 'react';

import { About, TitleName, EmploymentHistory, Skills, Education, Projects } from './components';
import { employmentHistoryData, skillsData, educationData, projectsData } from './data';

import styles from './App.module.scss';

export type AppProps = {}

export const App: React.FC<AppProps> = () => (
    <div className={styles.container}>

      <header role='banner' className={styles.headerContainer}>
        <TitleName />
        <About />
      </header>
      
      <main>
        <EmploymentHistory data={employmentHistoryData}/>
        <Skills skillsData={skillsData}/>
        <Education educationData={educationData} />
        <Projects projectsData={projectsData} />
      </main>

      <footer>
        
      </footer>

    </div>  
)
