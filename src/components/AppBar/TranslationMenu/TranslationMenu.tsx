import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';

import flagIconGB from '../../../images/flag_united_kingdom.png';
import flagIconUK from '../../../images/flag_ukraine.png';

import { LanguageContainer, NameLanguage } from './TranslationMenu.styled';

const LocalStorageKey = 'lng';

export const TranslationMenu = () => {
  const { i18n } = useTranslation(); //react-i18next
  const [age, setAge] = useState(localStorage.getItem(LocalStorageKey) || '');

  /*   useEffect(() => {
    const a = window.localStorage.getItem('lng');
    console.log('a', a);
    setAge(a);
  }, [age]); */

  /* useEffect(() => {
     localStorage.setItem('lng', JSON.stringify(age));
  }, [age]); */

  if (localStorage.getItem(LocalStorageKey) === null) {
    localStorage.setItem(LocalStorageKey, JSON.stringify('en'));
    setAge('en');
    return;
  }
  /*  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  }; */
  console.log('age', age);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    const language = event.target.value;

    localStorage.setItem(LocalStorageKey, language);
    i18n.changeLanguage(language); //change the language
  };

  /* const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  }; */

  /*   const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language); //change the language
    localStorage.setItem('lng', language);
  };
 */
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
              <NameLanguage variant="body2">English</NameLanguage>
            </AvatarGroup>
          </MenuItem>
          <MenuItem value="uk">
            <AvatarGroup>
              <Avatar
                alt="Flag Ukraine"
                src={flagIconUK}
                sx={{ width: 16, height: 16, marginRight: 1 }}
              />
              <NameLanguage variant="body2">Ukrainian</NameLanguage>
            </AvatarGroup>
          </MenuItem>
        </Select>
      </FormControl>

      {/* <button onClick={changeLanguage('en')}>English</button>
      <button onClick={changeLanguage('uk')}>Ukrainian</button> */}
      {/*   <div className="paraStyle">
        {t('line1')} <br />
        {t('line2')} <br />
        {t('line3')} <br />
      </div> */}
    </LanguageContainer>
  );
};
