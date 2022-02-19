import { Component, useState } from 'react';
import styles from '../searchbar/searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = props => {
  const [query, querySet] = useState({ query: '' });

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(query);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    querySet({
      [name]: value,
    });
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={handleChange}
          name="query"
          className={styles.input}
          type="text"
        />
        <button type="submit" className={styles.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes={
  onSubmit:PropTypes.func.isRequired
}