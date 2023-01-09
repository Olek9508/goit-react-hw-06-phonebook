import { useSelector } from 'react-redux';
import { ContactItem } from "./ContactItem"

const filterContacts = (items, value) => {
return items.filter(contact =>
  contact.name.toLowerCase().includes(value.toLowerCase())
);
};

export const ContactList = () => {
  const items  = useSelector(state => state.contacts.items);
  const value = useSelector(state => state.contacts.filter);
  const contacts = filterContacts(items, value);

  return (
  <ul>
      { contacts.length
       ? (
            contacts.map(({id, name, number}) => (
              <li key={id}>
                <ContactItem
                  id={id}
                  name={name}
                  number={number}
                />
              </li>
            ))
            )
       : (<p>We did not find mentioned person in your phonebook, please, try again</p>)
      }
</ul>)
}


//================================WAS===================================//

// export const ContactList = ({ contacts, onDeleteContact }) => {
//     return (
//     <ul>
//         {contacts.map(({ id, name, number })=>
//             <ContactItem
//             key={id}
//             name = {name}
//             number = {number}    
//             onDeleteContact = {()=>onDeleteContact(id)}
//             />
//         )}    
//     </ul>
// )
// }