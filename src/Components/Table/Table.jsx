import React from 'react';

import TableRow from './TableRow';

import styles from './Table.module.scss';

const Table = ({ data, page, perPage, bestByViews }) => {
  return (
    <div className={styles.Table}>
      {
        data.length 
          ? data?.map((author, i) => <TableRow 
                                        author={author}
                                        index={page * perPage + i}
                                        key={i}
                                        place={bestByViews.indexOf(author.pageviews) + 1}
                                      />)
          : <span className={styles.noItems}>Нет подходящих авторов</span>
      }
    </div>
  )
}

export default Table;
