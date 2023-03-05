import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import { MenuItem, FormControl, Avatar, AvatarGroup } from '@mui/material';

import flagIconGB from '../../../images/flag_united_kingdom.png';
import flagIconUK from '../../../images/flag_ukraine.png';

import { LanguageContainer, NameLanguage } from './TranslationMenu.styled';

const LocalStorageKey = 'lng';
const LanguageKey = 'en';

export const TranslationMenu = () => {
  const { t, i18n } = useTranslation(); //react-i18next
  const [age, setAge] = useState(localStorage.getItem(LocalStorageKey) || '');

  if (localStorage.getItem(LocalStorageKey) === null) {
    localStorage.setItem(LocalStorageKey, JSON.stringify(LanguageKey));
    setAge(LanguageKey);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    const language = event.target.value;

    localStorage.setItem(LocalStorageKey, language);
    i18n.changeLanguage(language); //change the language
  };

  return (
    <LanguageContainer>
      <FormControl fullWidth>
        <Select
          labelId="id-select-label"
          id="id-select"
          value={age}
          label="Age"
          onChange={handleChange}
          autoWidth
          variant="standard"
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: '#404dbc',
                },
              },
            },
          }}
          sx={{
            '.MuiSvgIcon-root ': {
              fill: 'white !important',
            },
          }}
        >
          <MenuItem value="en" sx={{ width: 200, display: 'flex' }}>
            <AvatarGroup>
              <Avatar
                alt="Flag United Kingdom"
                src={flagIconGB}
                sx={{ width: 16, height: 16, marginRight: 1 }}
              />
              <NameLanguage variant="body2">{t('english', { ns: ['header'] })}</NameLanguage>
            </AvatarGroup>
          </MenuItem>
          <MenuItem value="uk">
            <AvatarGroup>
              <Avatar
                alt="Flag Ukraine"
                src={flagIconUK}
                sx={{ width: 16, height: 16, marginRight: 1 }}
              />
              <NameLanguage variant="body2">{t('ukrainian', { ns: ['header'] })}</NameLanguage>
            </AvatarGroup>
          </MenuItem>
        </Select>
      </FormControl>
    </LanguageContainer>
  );
};
