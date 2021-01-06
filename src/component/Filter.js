import React from 'react';

const Filter = ({ filter, setFilter}) => {


  // Filterコンポーネントの表示を切り替える処理
  const filterHandler = (value) => {
    setFilter(value)
  }

  // 返す値
  return (
    <ul className="filter">
      <li className={filter === 'ALL' ? "selected-filter" : ""} onClick={() => filterHandler('ALL')}>ALL</li>
      <li className={filter === 'TODO' ? "selected-filter" : ""} onClick={() => filterHandler('TODO')}>TODO</li>
      <li className={filter === 'DONE' ? "selected-filter" : "" } onClick={() => filterHandler('DONE')}>DONE</li>
    </ul>
  );
}

export default Filter;