import { useDispatch, useSelector } from 'react-redux';

import css from './Search.module.css';
import { chengeFilter } from 'redux/filter/filterSlise';
import { selectFilter } from 'redux/selectors';

export default function Search() {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChenge = e => {
    const { value } = e.target;
    dispatch(chengeFilter(value));
  };

  return (
    <div className={css.decor_search}>
      <label className={css.lable} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        name="name"
        onChange={onChenge}
        value={filter}
      />
    </div>
  );
}
