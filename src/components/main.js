import React from 'react'

import styles from 'main.module.css'; 


export default function Main(props) {
    const { src, icon, ...other} = props;

  return (
    <>
        <header className={styles.header}>
            <h1>
                Welcome
            </h1>
        </header>
    
    </>
  );
}
