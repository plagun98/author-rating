import React from 'react';

import styles from './TableRow.module.scss';

const TableRow = ({ author, index }) => {
  return (
    <div className={styles.root}>
      <span className={styles.index}>{index}</span>
      <div className={styles.avatar}>{author.name[0]}</div>
      <div className={styles.mainInfo}>
        <span className={styles.name}>{author.name}</span>
        <span className={styles.pub_count}>{`${author.count_pub} публ.`}</span>
      </div>
      <div className={styles.medal}></div>
      <span className={styles.name}>{author.pageviews}</span>
    </div>
  )
}

export default TableRow;