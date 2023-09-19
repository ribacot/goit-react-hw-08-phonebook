import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import css from './FormFone.module.css';
import {
  addContactsThunk,
  getContactsThunk,
} from 'redux/contacts/productThunk';
import Container from 'components/container/Container';
import { instance } from 'redux/auth/instansAxiosAPI';
import { selectAuth, selectContacts } from 'redux/selectors';

export default function FormPhone() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(selectContacts);
  const { token } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate('/login');
  }, [token, navigate]);

  useEffect(() => {
    !contacts.length &&
      token &&
      (instance.defaults.headers.common['Authorization'] = `Bearer ${token}`);
    !contacts.length && dispatch(getContactsThunk());
  }, [contacts.length, dispatch, token]);

  const hendleChange = e => {
    const { name, value } = e.target;

    const switchInput = name => {
      switch (name) {
        case 'name':
          setName(value.trim());
          break;
        case 'number':
          setNumber(value.trim());
          break;
        default:
          return;
      }
    };
    contacts.some(
      ({ name }) => name.toLowerCase() === value.toLowerCase().trim()
    )
      ? alert(` ${value} is already in contacts`)
      : switchInput(name);
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(addContactsThunk({ name, number }));
    navigate('/contacts');
    setName('');
    setNumber('');
  };
  const onClose = () => navigate('/contacts');

  return (
    <Container title="Add contact">
      <form className={css.form_Add_Contact} onSubmit={formSubmit}>
        <div className={css.decor_input}>
          <label className={css.lable} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            id="name"
            type="text"
            name="name"
            // pattern={validName}
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={hendleChange}
            value={name}
          />
        </div>
        <div className={css.decor_input}>
          <label className={css.lable} htmlFor="number">
            Number
          </label>
          <input
            className={css.input}
            id="number"
            type="tel"
            name="number"
            // pattern={validPhone}
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={hendleChange}
            value={number}
          />
        </div>
        <div className={css.btnContainer}>
          <button
            className={css.btn_add}
            type="submit"
            disabled={!name || !number}
          >
            Add contact
          </button>
          <button className={css.btn_add} type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </Container>
  );
}
