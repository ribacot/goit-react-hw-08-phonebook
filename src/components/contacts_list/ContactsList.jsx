import { FiXSquare } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { delContactsThunk } from 'redux/contacts/productThunk';
import { useGetFilteredContacts } from 'redux/hooks';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const {filteredContacts} = useGetFilteredContacts();

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
