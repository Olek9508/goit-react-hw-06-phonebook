// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/ContactSlice';
// import PropTypes from 'prop-types';
// import { Text, BtnDelete } from './Contact.styled';


// export function ContactItem({ name, number, idx, id }) {
//   const dispatch = useDispatch();
//   return (
//     <li>
//       <Text>
//         {idx + 1} - {name}: {number}
//       </Text>
//       <BtnDelete
//         onClick={() => dispatch(deleteContact(id))}
//         type="button">Delete Contact</BtnDelete>
//     </li>
//   );
// }


// ContactItem.propTypes = {
//   options: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//     idx: PropTypes.number.isRequired,
//   }),
// };



//=================================WAS============================//

// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteItems } from 'redux/ContactSlice';
// import { Text, BtnDelete } from './Contact.styled';

// export const ContactItem = ({id, name, number}) => {
//   const dispatch = useDispatch();
//   const deleteContact = id => dispatch(deleteItems(id));

//   return (
//     <>
//         <Text>
//             {name} : (...)-
//             {number}
//         </Text>
//         <BtnDelete
//           type="button"
//           onClick={() => {deleteContact(id)}}
//         >
//           Delete
//         </BtnDelete>
//     </>

//   )
// }

// ContactItem.propTypes = {
//     contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     })
//     )
// }


//===============================WAS==========================//


// export const ContactItem = ({ name, number, onDeleteContact }) => {
//     return (
//         <li>
//             <Text>{name }</Text>
//             <p>{number}</p>
//             <BtnDelete type="button" onClick={onDeleteContact}>Delete contact</BtnDelete>
//         </li>
//     )
// }