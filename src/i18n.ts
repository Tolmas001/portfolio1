import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import uzTranslation from './locales/uz.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      uz: {
        translation: uzTranslation,
      },
    },
    lng: 'uz', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safe from xss
    },
  });

export default i18n;
