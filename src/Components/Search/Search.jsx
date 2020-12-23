import React from 'react';

import SearchIcon from '../../assets/images/search.png';

import styles from './Search.module.scss';

const Search = ({ value, handler, placeholder }) => {

  return (
    <div className={styles.inputWrapper}>
      <img src={SearchIcon} />
      <input type="search" placeholder={placeholder} value={value} onChange={handler} />
    </div>
  )
}

export default Search;
