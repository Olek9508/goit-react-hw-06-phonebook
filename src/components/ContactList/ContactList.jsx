import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { BtnDelete, Text } from './Contact.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filterContactsOnChange = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  const sortContactsByName = () =>
    [...filterContactsOnChange()].sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );

  return (
    <ul>
      {sortContactsByName().map(({ id, name, number }) => (
        <li key={id}>
          <Text>Name: {name}</Text>
          <Text>Number: {number}</Text>
          <BtnDelete
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete contact
          </BtnDelete>
          </li>
      ))}
      </ul>
  );
};




//====================================WAS==========================//
// import { useSelector } from 'react-redux';
// import { ContactItem } from "./ContactItem"

// const filterContacts = (items, value) => {
// return items.filter(contact =>
//   contact.name.toLowerCase().includes(value.toLowerCase())
// );
// };

// export const ContactList = () => {
//   const items  = useSelector(state => state.contacts.items);
//   const value = useSelector(state => state.contacts.filter);
//   const contacts = filterContacts(items, value);

//   return (
//   <ul>
//       { contacts.length
//        ? (
//             contacts.map(({id, name, number}) => (
//               <li key={id}>
//                 <ContactItem
//                   id={id}
//                   name={name}
//                   number={number}
//                 />
//               </li>
//             ))
//             )
//        : (<p>Contact is not found</p>)
//       }
// </ul>)
// }




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

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number:PropTypes.string.isRequired})
//     ),
//     onDeleteContact:PropTypes.func.isRequired,
// }