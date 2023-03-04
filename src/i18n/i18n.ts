import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import translationEnglishHeader from './Translation/English/translationHeader.json';
import translationUkrainianHeader from './Translation/Ukrainian/translationHeader.json';

import translationEnglishHomePage from './Translation/English/translationHomePage.json';
import translationUkrainianHomePage from './Translation/Ukrainian/translationHomePage.json';

import translationEnglishAuth from './Translation/English/translationAuth.json';
import translationUkrainianAuth from './Translation/Ukrainian/translationAuth.json';

//Import translation2 file
/* import translationEnglishSecondFile from './Translation/English/translation2.json'; */

//---Using translation
/* const resources = {
  en: {
    translation: translationEnglish,
  },
  uk: {
    translation: translationUkrainian,
  },
}; */

//---Using different namespaces
const resources = {
  en: {
    header: translationEnglishHeader,
    main: translationEnglishHomePage,
    auth: translationEnglishAuth,
  },
  uk: {
    header: translationUkrainianHeader,
    main: translationUkrainianHomePage,
    auth: translationUkrainianAuth,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng') || 'en', //default language
});

export default i18next;
