import i18n from 'i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './local/en.json';
import translationUA from './local/ua.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // Шлях до папки з перекладами
        resources: {
            'en': { translation: translationEN },
            'ua': { translation: translationUA },
        },
        // Початкова мова
        fallbackLng: 'en',
        // Отримання мови з браузера
        detection: {
            order: ['querystring', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
