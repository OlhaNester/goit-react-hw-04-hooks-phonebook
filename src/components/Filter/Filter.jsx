import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
const Filter = ({ value, onChange }) => {
    return ( <Label>Filter
          <Input type='text' value={value} onChange={onChange }>
          </Input>
        </Label> );
}
 
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
export default Filter;