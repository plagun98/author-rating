import React from 'react';

import Arrow from '../../../assets/images/arrow.png';

import styles from './TablePagination.module.scss';

const TablePagination = ({ page, changeHandler, totalCount, itemsPerPage }) => {
  const handleDecrease = () => changeHandler(page - 1);
  const handleIncrease = () => changeHandler(page + 1);
  return (
    <div className={styles.root}>
      {!!page && <img src={Arrow} className={styles.arrow} onClick={handleDecrease} />}
      <span className={styles.itemsCounter}>
        {`${page * itemsPerPage + 1} - ${itemsPerPage * (page + 1) > totalCount ? totalCount : itemsPerPage * (page + 1)}`}
      </span>
      {(totalCount - (page + 1) * itemsPerPage) > 0 && <img src={Arrow} className={styles.arrow} onClick={handleIncrease} />}
    </div>
  )
}

export default TablePagination;
