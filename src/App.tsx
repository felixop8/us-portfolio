import * as React from 'react';

import { About, TitleName, EmploymentHistory, Skills, Education, Projects, Contact, Interests } from './components';
import { employmentHistoryData, skillsData, educationData, projectsData, about, interests } from './data';

import styles from './App.module.scss';

export type AppProps = {}

export const App: React.FC<AppProps> = () => (
    <div>
      <div className={styles.container}>
        <header role='banner' className={styles.headerContainer}>
          <TitleName />
          <About aboutData={about}/>
        </header>
        
        <main>
          <EmploymentHistory data={employmentHistoryData}/>
          <section className={styles.lowerSection}>
            <Skills skillsData={skillsData}/>
            <Education educationData={educationData} />
            <Interests interestsData={interests} />
            <Contact />
          </section>
          <section>
            <Projects projectsData={projectsData} />
          </section>
        </main>
      </div>

      <footer>
        
      </footer>

    </div>  
)
