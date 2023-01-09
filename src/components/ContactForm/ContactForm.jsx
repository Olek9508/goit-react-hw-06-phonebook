import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from 'redux/Actions';
import { BtnSubmit, Form, Label, Input } from "./ContactForm.styled";

export function ContactForm () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const  items  = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const {name, value} = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (items.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addItems(contact));
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name :
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number :
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <BtnSubmit type="submit">
          Add contact
        </BtnSubmit>
      </Form>
    )
}
  
    ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
  
//====================================WAS=====================================//

// export function ContactForm ({onSubmit}) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const onSearchByInputValue = event => {
//     const { name, value } = event.currentTarget;
    
//     switch (name) {
//       case "name":
//       setName(value)
//       break;
      
//       case "number":
//       setNumber(value)
//       break;
      
//       default:
//       return;
//     }
//   }

//   const onContactAdd = event => {
//     event.preventDefault();
//     onSubmit(name, number)
//     setName("" );
//     setNumber("");
//   }

//     return (
//     <div>
//       <Form onSubmit={onContactAdd}>
//         <Label>
//           Name
//         <Input
//           type="text"
//           name="name"
//           value={name}
//           onChange = {onSearchByInputValue}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           />
//         </Label>
//         <Label >
//           Number
//         <Input
//           type="tel"
//           name="number"
//           value={number}
//           onChange = {onSearchByInputValue}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//           </Label>
//           <BtnSubmit type="submit">Add contact</BtnSubmit>
//       </Form>
//     </div>
//     )
// }

//====================================WAS=====================================//

// import PropTypes from 'prop-types';
// import { Component } from "react";
// import { BtnSubmit, Form, Label, Input } from "./ContactForm.styled";

// export class ContactForm extends Component{
//   state = {
//   name: '',
//   number: '',
//   }

//     static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   onSearchByInputValue = event => {
//     const {name, value} = event.currentTarget
//     this.setState({ [name]:value })
//   }

//   onContactAdd = event => {
//     event.preventDefault();
//     const { name, number } = this.state
//     this.props.onSubmit(name, number)
//     this.setState({ name: "", number: "" })
//   }

//   render() {
//     return (
//     <div>
//       <Form onSubmit={this.onContactAdd}>
//         <Label>
//           Name
//         <Input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange = {this.onSearchByInputValue}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           />
//         </Label>
//         <Label >
//           Number
//         <Input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange = {this.onSearchByInputValue}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//           </Label>
//           <BtnSubmit type="submit">Add contact</BtnSubmit>
//       </Form>
//     </div>
//     )
//   }
// }

