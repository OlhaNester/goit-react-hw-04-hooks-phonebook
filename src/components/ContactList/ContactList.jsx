import { FilteredList, CardContact, ButtonDelete } from './ContactList.styled';
import { ReactComponent as TrashIcon } from '../ContactList/trash.svg';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <FilteredList>
      {contacts.map(({ id, name, number }) => (
        <CardContact key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <ButtonDelete onClick={() => onDelete(id)}><TrashIcon width="20" height="20"/></ButtonDelete>
        </CardContact>
      ))}
    </FilteredList>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default ContactList;
