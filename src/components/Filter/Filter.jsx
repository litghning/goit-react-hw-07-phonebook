import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filter';
import { getFilter } from 'redux/selectors';

const Filters = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    dispatch(addFilter(query.toLowerCase()));
  };
  const filter = useSelector(getFilter);

  return (
    <label htmlFor="InputId" className={css.Label}>
      Find contacts by name
      <input
        type="text"
        placeholder=""
        name="filterContact"
        value={filter}
        id="InputId"
        onChange={e => onFilterChange(e.target.value)}
        className={css.Input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
};

export default Filters;