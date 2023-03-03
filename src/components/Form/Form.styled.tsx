import styled from 'styled-components';

import TextField from '@mui/material/TextField';

export const InputPassword = styled(TextField)(({ theme }) => ({
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));
