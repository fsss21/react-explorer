import { ru } from './ru';
import { en } from './en';

export const translations = {
  ru: {
    ...ru,
    accessibilityToggle: 'Версия для\nслабовидящих',
    accessibilityNormal: 'Обычная версия\nприложения',
    catalog: 'каталог\nэкспонатов',
    audioguide: 'аудиогид\nпо приложению'
  },
  en: {
    ...en,
    accessibilityToggle: 'Visually impaired\nversion',
    accessibilityNormal: 'Normal\nversion',
    catalog: 'catalog\nof exhibits',
    audioguide: 'audio guide\nof the app'
  }
};

export const operationStyles = {
  eon: {
    position: 'absolute',
    bottom: '25%',
    left: '3%',
    width: '400px',
    height: '160px',

    cursor: 'pointer'
  },
  chuh: {
    position: 'absolute',
    bottom: '22%',
    right: '14%',
    width: '540px',
    height: '160px',
    cursor: 'pointer'
  },
  ice: {
    position: 'absolute',
    top: '37%',
    right: '29%',
    width: '640px',
    height: '180px',
    cursor: 'pointer'
  },
  unkers: {
    position: 'absolute',
    top: '10%',
    left: '20%',
    width: '690px',
    height: '250px',
    cursor: 'pointer'
  },
  fly: {
    position: 'absolute',
    bottom: '22%',
    left: '25%',
    width: '600px',
    height: '180px',

    cursor: 'pointer'
  }
};
