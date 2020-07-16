import React, { useReducer } from 'react';

import { LanguageContext } from 'views/.tools/Contexts/LanguageContext';

import { languageReducer } from 'views/.tools/Reducers/languageReducer';

import { useLocalStorage } from 'views/.tools/Hooks/useLocalStorage';

export const LanguageProvider = ({ children }) => {
  const [translationState, setTranslationState] = useLocalStorage('language', 'en');
  const [languageState, languageDispatch] = useReducer(languageReducer, translationState);

  return (
    <LanguageContext.Provider
      value={{
        selected: languageState,
        onChangeLang: ({ newLang, type }) => {
          languageDispatch({ type, payload: newLang });
          setTranslationState(newLang);
        }
      }}>
      {children}
    </LanguageContext.Provider>
  );
};
