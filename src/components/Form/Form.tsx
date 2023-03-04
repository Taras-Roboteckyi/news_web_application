import * as React from 'react';

import { useState } from 'react';

/* import { useDispatch } from 'react-redux'; */
import { useAppDispatch } from '../../hooks/reduxHooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; */
/* import Box from '@mui/material/Box'; */
import { Grid, TextField, Button } from '@mui/material';

import { createProfile } from '../../redux/authorization/auth-slice';
import { InputPassword } from './Form.styled';

interface FormElements extends HTMLFormControlsCollection {
  userNameInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface InputValue {
  userName: string;
  password: string;
}

const defaultValues: InputValue = {
  userName: '',
  password: '',
};

export default function LoginForm() {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useAppDispatch();

  const handleInputChange = event => {
    /* console.log('event.currentTarget', event.currentTarget); */
    const { name, value } = event.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<YourFormElement>) => {
    event.preventDefault();
    /* console.log(formValues); */
    /* console.log(event.currentTarget.elements.usernameInput.value); */
    /* const contact = { name }; */
    /*   const fetchContacts = await contactShelfAPI.fetchContacts(); */
    //console.log(fetchContacts);
    /*  const isContact = fetchContacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    ); */
    const { userName, password } = formValues;

    if (userName.toLowerCase() === 'admin' && password.toLowerCase() === '12345') {
      dispatch(createProfile({ ...formValues }));

      toast.success('Congratulations, you have created a new profile!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else
      toast.error(`Incorrect email address or password.`, {
        position: toast.POSITION.TOP_CENTER,
      });

    reset();
  };

  const reset = () => {
    setFormValues({
      userName: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        spacing={2}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <TextField
            id="userNameInput"
            name="userName"
            label="Name"
            type="text"
            value={formValues.userName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <InputPassword
            id="passwordInput"
            name="password"
            label="Password"
            type="number"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
