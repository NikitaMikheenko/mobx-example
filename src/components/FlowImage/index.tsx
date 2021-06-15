import React, { FC } from 'react';
import flow from '../../assets/images/flow.png';
import styles from './index.module.css';

const FlowImage: FC = () => (
  <div className={styles.flowImage}>
    <img src={flow} alt="flow-image" />
  </div>
);

export default FlowImage;
