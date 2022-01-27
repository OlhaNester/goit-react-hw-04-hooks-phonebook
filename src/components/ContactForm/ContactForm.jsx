import { useState } from "react";
import { nanoid } from "nanoid";

import { Form, Label, Input, Button } from "./ContactForm.styled";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="">
          Name
          <Input
            id={nameInputId}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            id={numberInputId}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// export class CotactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);

//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     return (
//       <Form>
//         <form onSubmit={this.handleSubmit}>
//           <Label htmlFor="">
//             Name
//             <Input
//               id={this.nameInputId}
//               value={this.state.name}
//               onChange={this.handleChange}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//           <Label>
//             Number
//             <Input
//               id={this.numberInputId}
//               value={this.state.number}
//               onChange={this.handleChange}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     );
//   }
// }
