"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe2 } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

const languages = [
  { code: "EN", value: "en", label: "English" },
  { code: "FR", value: "fr", label: "Français" },
  { code: "ES", value: "es", label: "Español" },
];

export function LanguageSwitcher() {
  const rootRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const activeLanguage = languages.find((item) => item.value === language) ?? languages[0];

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleLanguageChange(language) {
    setIsOpen(false);
    changeLanguage(language.value);
  }

  return (
    <div ref={rootRef} className="relative z-50 notranslate">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:bg-white"
        aria-label={`Language: ${activeLanguage.label}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{activeLanguage.code}</span>
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label="Select language"
          className="absolute right-0 z-50 mt-2 flex w-32 flex-col gap-1 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-xl backdrop-blur-md"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              role="menuitemradio"
              aria-checked={activeLanguage.code === language.code}
              className="flex items-center justify-between rounded-xl px-3 py-1.5 text-left text-xs font-medium text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              onClick={() => handleLanguageChange(language)}
            >
              <span>{language.label}</span>
              <span className="text-[10px] text-slate-500">{language.code}</span>
            </button>
          ))}
        </div>
      ) : null}

    </div>
  );
}