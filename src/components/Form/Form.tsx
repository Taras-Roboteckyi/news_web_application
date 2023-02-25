import * as React from 'react';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/* import { addContacts } from '../../redux/items'; */

import /* FormPhoneBook, LabelPhoneBook, InputPhoneBook, ButtonPhoneBook */ './Form.styled';

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface InputValue {
  username: string;
  password: string;
}

const defaultValues: InputValue = {
  username: '',
  password: '',
};

export default function LoginForm() {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    console.log('event.currentTarget', event.currentTarget);
    const { name, value } = event.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<YourFormElement>) => {
    event.preventDefault();
    console.log(formValues);
    console.log(event.currentTarget.elements.usernameInput.value);
    /* const contact = { name }; */
    /*   const fetchContacts = await contactShelfAPI.fetchContacts(); */
    //console.log(fetchContacts);
    /*  const isContact = fetchContacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    ); */

    if (typeof (/*  isContact */ true) === 'undefined') {
      /* dispatch(addContacts({ name, number })); */
      toast.success('Congratulations, you have created a new contact!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else
      toast.error(`${formValues.username} is already in contacts.`, {
        position: toast.POSITION.TOP_CENTER,
      });

    reset();
  };

  const reset = () => {
    setFormValues({
      username: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid /* container alignItems="center" justify="center" direction="column" */>
        <Grid item>
          <TextField
            id="usernameInput"
            name="username"
            label="Name"
            type="text"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="passwordInput"
            name="password"
            label="Password"
            type="number"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Grid>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
}
