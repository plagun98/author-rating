import React from 'react';

import Gold from '../../../assets/images/1st.svg';
import Silver from '../../../assets/images/2nd.svg';
import Bronze from '../../../assets/images/3rd.svg';

import styles from './TableRow.module.scss';

const TableRow = ({ author, index, place }) => {
  return (
    <div className={styles.root}>
      <span className={styles.index}>{index + 1}</span>
      <div className={styles.avatar} style={{filter: `hue-rotate(${(index + 1) * 30}deg)`}}>{author.name[0]}</div>
      <div className={styles.mainInfo}>
        <span className={styles.name}>{author.name}</span>
        <span className={styles.pub_count}>{`${author.count_pub} публ.`}</span>
      </div>
      <div className={styles.medal}>
        {place < 0 ? null :
          place === 1
            ? <img src={Gold} alt="1st by pageviews" />
            : place === 2
              ? <img src={Silver} alt="1st by pageviews" />
              : place === 3 && <img src={Bronze} alt="1st by pageviews" />
        }
      </div>
      <span className={styles.views}>{author.pageviews}</span>
    </div>
  )
}

export default TableRow;
