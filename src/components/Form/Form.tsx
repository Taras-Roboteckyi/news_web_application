import * as React from 'react';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Grid, TextField, Button } from '@mui/material';

import { useAppDispatch } from '../../hooks/reduxHooks';
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
  const { t } = useTranslation(['auth']);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<YourFormElement>) => {
    event.preventDefault();

    const { userName, password } = formValues;

    if (userName.toLowerCase() === 'admin' && password.toLowerCase() === '12345') {
      dispatch(createProfile({ ...formValues }));

      toast.success('Congratulations, you have successfully logged in!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else
      toast.error(`Username or password entered incorrectly`, {
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
            label={t('login.name')}
            type="text"
            value={formValues.userName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <InputPassword
            id="passwordInput"
            name="password"
            label={t('login.password')}
            type="number"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            {t('login.button')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
