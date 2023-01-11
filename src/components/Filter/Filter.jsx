import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/FilterSlice';
import { getFilterValue } from 'redux/Selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const filterInputHandler = event => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
  };

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
        title="Search field"
        required
      />
      </>
  );
};


//========================================WAS=================================//
// export const Filter = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(state => state.contacts.filter)

//   const changeFilter = e => {
//     dispatch(updateFilter(e.currentTarget.value));
//     // console.log(e.currentTarget.value)
//   };

//       return (
//         <Form >
//           <Label>Find contacts by name
//           <Input
//           type="text"
//           value={value}
//           onChange={changeFilter} />
//           </Label>
//         </Form>
//         )
// }
