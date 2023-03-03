import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactList from 'components/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { getItems, getLoadingStatus } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';
import { Container } from 'components/App/App.styled';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const isLoading = useSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <Loader />}
        {!isLoading && items.length === 0 && (
          <div style={{ color: 'red', fontSize: '20px' }}>No any contacts!</div>
        )}
        {items.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
    </Container>
  );
}
