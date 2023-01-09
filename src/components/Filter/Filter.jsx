import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/Actions';
import { Form, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter)

  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
    // console.log(e.currentTarget.value)
  };

      return (
        <Form >
          <Label>Find contacts by name
          <Input
          type="text"
          value={value}
          onChange={changeFilter} />
          </Label>
        </Form>
        )
}
