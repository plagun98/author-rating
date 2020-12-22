import React from 'react';

import TableRow from './TableRow';

import styles from './Table.module.scss';

const Table = ({ data }) => {

  return (
    <>
      {data?.map((author, i) => <TableRow author={author} index={i} />)}
    </>
  )
}

export default Table;