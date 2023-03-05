import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import translationEnglishHeader from './Translation/English/translationHeader.json';
import translationUkrainianHeader from './Translation/Ukrainian/translationHeader.json';

import translationEnglishHomePage from './Translation/English/translationHomePage.json';
import translationUkrainianHomePage from './Translation/Ukrainian/translationHomePage.json';

import translationEnglishAuth from './Translation/English/translationAuth.json';
import translationUkrainianAuth from './Translation/Ukrainian/translationAuth.json';

import translationEnglishNewsPage from './Translation/English/translationNewsPage.json';
import translationUkrainianNewsPage from './Translation/Ukrainian/translationNewsPage.json';

//---Using different namespaces
const resources = {
  en: {
    header: translationEnglishHeader,
    main: translationEnglishHomePage,
    auth: translationEnglishAuth,
    news: translationEnglishNewsPage,
  },
  uk: {
    header: translationUkrainianHeader,
    main: translationUkrainianHomePage,
    auth: translationUkrainianAuth,
    news: translationUkrainianNewsPage,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng') || 'en', //default language
});

export default i18next;
