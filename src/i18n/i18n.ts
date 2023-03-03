import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import translationEnglishHeader from './Translation/English/translationHeader.json';
import translationUkrainianHeader from './Translation/Ukrainian/translationHeader.json';

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
    /* main: translationEnglishSecondFile, */
  },
  uk: {
    header: translationUkrainianHeader,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng') || 'en', //default language
});

export default i18next;
