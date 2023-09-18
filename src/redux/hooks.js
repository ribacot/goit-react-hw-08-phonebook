import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const useGetFilteredContacts = () => {
  const { filter } = useSelector(selectFilter);
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filteredContacts=contacts?.filter(({ name }) => name.toLowerCase().includes(filter));
  return {contacts, isLoading, error,filteredContacts}
};

