import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: { translation: { welcome: 'Bienvenue', home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', contact: 'Contact' } },
  en: { translation: { welcome: 'Welcome', home: 'Home', services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact' } },
  ru: { translation: { welcome: 'Добро пожаловать', home: 'Главная', services: 'Услуги', projects: 'Проекты', about: 'О нас', contact: 'Контакты' } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;
