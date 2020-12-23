import React, { useEffect, useMemo, useState } from 'react';
import Search from '../Search/Search';
import Table from '../Table';
import TableRow from '../Table/TableRow';

import styles from './Main.module.scss';

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const filteredAuthors = useMemo(() => {
    return authors.filter(author => author.name.toLowerCase().includes(searchValue.toLowerCase()));
  }, [authors, searchValue]);

  const handleSearchInput = e => setSearchValue(e.target.value);
  const getData = () => {
    fetch('data.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(response => response.json())
      .then(responseJson => setAuthors(responseJson));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Search value={searchValue} handler={handleSearchInput} />
      <Table data={filteredAuthors} />
    </div>
  )
}

export default Main;