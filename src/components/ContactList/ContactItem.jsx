import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItems } from 'redux/Actions';
import { Text, BtnDelete } from './Contact.styled';

export const ContactItem = ({id, name, number}) => {
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(deleteItems(id));

  return (
    <>
        <Text>
            {name} : (...)-
            {number}
        </Text>
        <BtnDelete
          type="button"
          onClick={() => {deleteContact(id)}}
        >
          Delete
        </BtnDelete>
    </>

  )
}

ContactItem.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    })
    )
}


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