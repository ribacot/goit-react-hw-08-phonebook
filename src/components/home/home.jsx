import { ContactsList } from 'components/contacts_list/ContactsList';
import Container from 'components/container/Container';
import Search from 'components/search/Search';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { instance } from 'redux/auth/instansAxiosAPI';
import { getContactsThunk } from 'redux/contacts/productThunk';
import { useGetFilteredContacts } from 'redux/hooks';

export default function Home() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useGetFilteredContacts();
  const { token } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    token && dispatch(getContactsThunk());
    !token && navigate('/');
  }, [dispatch, token,navigate]);

  return (
    <Container title="Contacts">
      {error && <p>Error!!!!!!</p>}
      {contacts?.length ? (
        <>
          <Search />
          <ContactsList />
        </>
      ) : (
        <p className="not_found">Phone book is empty</p>
      )}
      {isLoading && <p>Loading...</p>}
    </Container>
  );
}
