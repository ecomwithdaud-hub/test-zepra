"use client";

import { createContext, useContext, useEffect, useState } from "react";

import en from "@/src/locales/en.json";
import fr from "@/src/locales/fr.json";
import es from "@/src/locales/es.json";

const dictionaries = { en, fr, es };
const LanguageContext = createContext(null);

function getValue(dictionary, key) {
  return key.split(".").reduce((value, part) => value?.[part], dictionary);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("zepra-language");
    if (savedLanguage && savedLanguage in dictionaries) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function changeLanguage(nextLanguage) {
    if (!(nextLanguage in dictionaries)) return;
    window.localStorage.setItem("zepra-language", nextLanguage);
    setLanguage(nextLanguage);
  }

  function t(key) {
    return getValue(dictionaries[language], key) ?? getValue(en, key) ?? key;
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }
  return context;
}