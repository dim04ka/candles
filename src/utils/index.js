import i18n from "i18next";

export const initLocalStorage = () => {
  const languageDefault = 'ru'
  const valueLocalStorage = localStorage.getItem('language')

  if (valueLocalStorage) {
    i18n.changeLanguage(valueLocalStorage)
  } else {
    localStorage.setItem('language', languageDefault)
    i18n.changeLanguage(languageDefault)
  }
}