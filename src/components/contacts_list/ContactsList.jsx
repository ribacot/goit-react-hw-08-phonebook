import { FiXSquare } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import css from './ContactsList.module.css';

import { delContactsThunk } from 'redux/contacts/productThunk';
import { useGetFilteredContacts } from 'redux/hooks';
import { selectAuth } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);
  const { filteredContacts } = useGetFilteredContacts();
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate('/');
  }, [token, navigate]);


  return (
    <>

      {filteredContacts?.length ? (
        <ul className={css.listContacts}>
          {filteredContacts?.map(({ name, id, number }) => (
            <li key={id} className={css.contact}>
              {name}:
              <span className={css.contact_tel}>
                {number}
                <button
                  className={css.btn_del}
                  type="button"
                  onClick={() => dispatch(delContactsThunk(id))}
                >
                  <IconContext.Provider value={{ size: '1.2em' }}>
                    <FiXSquare />
                  </IconContext.Provider>
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="not_found">Not found contacts</p>
      )}
    </>
  );
};
