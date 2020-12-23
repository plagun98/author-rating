import React, { useEffect, useMemo, useState } from 'react';
import Search from '../Search/Search';
import Table from '../Table';
import TablePagination from '../Table/TablePagination';
import TableRow from '../Table/TableRow';

import styles from './Main.module.scss';

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortField, setSortField] = useState('');
  const ROWS_PER_PAGE = 10;
  const byField = (field) => {
    return (a, b) => a[field] > b[field]? -1 : 1;
  }
  const filteredAuthors = useMemo(() => {
    let arr = authors.filter(author => author.name.toLowerCase().includes(searchValue.toLowerCase()));
    return arr.sort(byField(sortField));
  }, [authors, searchValue, sortField, byField]);
  const pageData = useMemo(() => {
    return filteredAuthors.slice(currentPage * ROWS_PER_PAGE, (currentPage + 1) * ROWS_PER_PAGE);
  }, [filteredAuthors, currentPage]);
  const bestByViews = authors.sort(byField('pageviews')).slice(0, 3).map(i => i.pageviews);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchValue]);

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
      <div className={styles.sortButtons}>
        <button onClick={() => setSortField('name')}>по имени</button>
        <button onClick={() => setSortField('pageviews')}>по просмотрам</button>
      </div>
      <Search value={searchValue} handler={handleSearchInput} placeholder="Поиск авторов по имени" />
      <Table data={pageData} page={currentPage} perPage={ROWS_PER_PAGE} bestByViews={bestByViews} />
      <TablePagination page={currentPage} changeHandler={setCurrentPage} totalCount={filteredAuthors.length} itemsPerPage={ROWS_PER_PAGE} />
    </div>
  )
}

export default Main;
