import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ContactsList } from 'components/contacts_list/ContactsList';
import Container from 'components/container/Container';
import Search from 'components/search/Search';
import { instance } from 'redux/auth/instansAxiosAPI';
import { getContactsThunk } from 'redux/contacts/productThunk';
import { useGetFilteredContacts } from 'redux/hooks';
import cssbtn from '../form/FormFone.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useGetFilteredContacts();
  const { token } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate('/login');
  }, [token, navigate]);

  useEffect(() => {
    token &&
      (instance.defaults.headers.common['Authorization'] = `Bearer ${token}`);
    token && dispatch(getContactsThunk());
  }, [dispatch, token]);
  const onAddContactNav = () => navigate('/add_contact');


  return (
    <Container title="Contacts">
      {error && <p>Error!!!!!!</p>}
      <button
        className={cssbtn.btn_add}
        style={{ marginBottom: '15px' }}
        onClick={onAddContactNav}
      >
        Add Contact
      </button>

      {contacts?.length ? (
        <>
          <Search />
          <ContactsList />
        </>
      ) : (
        <p className="not_found">Phone book is empty</p>
      )}
      {isLoading && <div className='fallback'><p>Loading...</p></div>}
    </Container>
  );
}
