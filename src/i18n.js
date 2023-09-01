import en from './translation/en.json';
import ru from './translation/ru.json';
import ukr from './translation/ukr.json';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
    ukr: {
        translation: ukr,
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: JSON.parse(localStorage.getItem('language')),
        fallbacklng: "ru"  
    })

export default i18n;