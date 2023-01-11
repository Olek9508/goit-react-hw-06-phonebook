import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const list = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <ul >
      {list().map(({ name, number, id }, idx) => (
        <ContactItem key={id} idx={idx} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}



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