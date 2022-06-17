import { FC, ReactElement } from 'react';

import Head from 'next/head';

import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css';   

interface Props {
  children: ReactElement | ReactElement[]
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Eduardo</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />

          <main className={styles.main}>
            { children }
          </main>
        </div>
      )
}

export default MainLayout