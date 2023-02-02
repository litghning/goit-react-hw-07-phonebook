
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filters from './Filter/Filter';

export default function App () {
  
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <Section title="Phonebook">
          <Phonebook  />
        </Section>
        <Section title="Contacts">
          <Filters  />
          <Contacts  />
        </Section>
      </div>
    );
  };