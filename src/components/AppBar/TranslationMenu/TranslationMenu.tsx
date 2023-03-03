import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { LanguageContainer } from './TranslationMenu.styled';

export const TranslationMenu = () => {
  const { i18n } = useTranslation(); //react-i18next
  const [age, setAge] = useState(/* () => JSON.parse(localStorage.getItem('lng') || 'null') */ '');

  /*   useEffect(() => {
    const a = window.localStorage.getItem('lng');
    console.log('a', a);
    setAge(a);
  }, [age]); */

  useEffect(() => {
    /*  localStorage.setItem('lng', JSON.stringify(age)); */
  }, [age]);

  if (JSON.parse(localStorage.getItem('lng') === null)) {
    localStorage.setItem('lng', JSON.stringify('en'));
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
    console.log('language', language);
    localStorage.setItem('lng', JSON.stringify(language));
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
      {age && (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="id-select-label"
            id="id-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="uk">Ukrainian</MenuItem>
          </Select>
        </FormControl>
      )}
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
