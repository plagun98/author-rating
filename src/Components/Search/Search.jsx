import React from 'react';

import SearchIcon from '../../assets/images/search.png';

import styles from './Search.module.scss';

const Search = ({ value, handler }) => {

  return (
    <div className={styles.inputWrapper}>
      <img src={SearchIcon} />
      <input type="search" value={value} onChange={handler} />
    </div>
  )
}

export default Search;