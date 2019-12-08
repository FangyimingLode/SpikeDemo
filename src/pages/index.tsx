import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
          <Button type="default">按钮</Button>
          
        </li>
      </ul>
    </div>
  );
}
