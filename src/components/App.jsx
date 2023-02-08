
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filters from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/operations'; 
import { selectIsloading, selectError } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
           <Section title="Phonebook">
        <Phonebook />
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
      <Section title="Contacts">
          <Filters  />
          <Contacts  />
        </Section>
      </div>
    );
  };
  export default App;