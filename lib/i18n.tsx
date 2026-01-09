"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "kn";

type I18nContextType = {
  lang: Lang;
  toggle: () => void;
};

const I18nContext = createContext<I18nContextType>({ lang: "en", toggle: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "kn" : "en"));
  return <I18nContext.Provider value={{ lang, toggle }}>{children}</I18nContext.Provider>;
}

export function useLang() {
  return useContext(I18nContext).lang;
}

export function useToggleLang() {
  return useContext(I18nContext).toggle;
}

// Basic translation helper
const strings = {
  heroHeadline: {
    en: "Traditional Healing for Modern Life",
    kn: "ಆಧುನಿಕ ಜೀವನಕ್ಕೆ ಪರಂಪರಾ ಚಿಕಿತ್ಸೆಯ ಸಹಾಯ",
  },
  heroTag: {
    en: "Ancestral Ayurvedic Care",
    kn: "ಪರಂಪರಾ ಆಯುರ್ವೇದ ಆರೈಕೆ",
  },
  heroSub: {
    en: "Mudubayush continues a time-honored family tradition of Ayurvedic and Nati Vaidya healing, supporting recovery and mobility through generations of practiced wisdom.",
    kn: "ಮುಡುಬಾಯುಷ್ ನಮ್ಮ ಕುಟುಂಬದಲ್ಲಿ ಪೀಳಿಗೆಗಳಿಂದ ಬಂದಿರುವ ಆಯುರ್ವೇದ ಮತ್ತು ನಾಟಿ ವೈದ್ಯೀಯ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಿದೆ, ಚಲನೆಯ ಸಮಸ್ಯೆಗಳಿಗೆ ಪರಿಹಾರ ನೀಡುವಲ್ಲಿ ನಿರಂತರ ಅನುಭವವನ್ನು ಹೊಂದಿದೆ.",
  },
  heroBody: {
    en: "With over 50+ years of practice, Mudubayush is led by traditional practitioners from our family, offering movement-focused treatments rooted in ancestral knowledge. The approach supports the body’s natural healing process for bone, joint, muscle, and movement-related conditions using time-tested methods passed down through generations.",
    kn: "50 ವರ್ಷಗಳಿಗಿಂತ ಹೆಚ್ಚಿನ ಅನುಭವದೊಂದಿಗೆ, ನಮ್ಮ ಕುಟುಂಬದ ಪರಂಪರাগত ವೈದ್ಯರು ಮುಡುಬಾಯುಷ್ ಅನ್ನು ಮುನ್ನಡೆಸುತ್ತಾ, ಜೀವನ ದೃಷ್ಟಿಕೋನದೊಂದಿಗೆ ಚಲನೆಯ ಮೇಲೆ ಕೇಂದ್ರೀಕೃತ ಚಿಕಿತ್ಸೆ ನೀಡುತ್ತಾರೆ. ಈ ಪದ್ಧತಿ ದೇಹದ ಸ್ವಾಭಾವಿಕ ಗುಣಮುಖತೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.",
  },
  storyBtn: { en: "Know Our Healing Story", kn: "ನಮ್ಮ ಚಿಕಿತ್ಸಾ ಕಥೆಯನ್ನು ತಿಳಿಹುದು" },
  contactBtn: { en: "Contact Us", kn: "ಸಂಪರ್ಕಿಸಿ" },
  bookBtn: { en: "Book a Consultation", kn: "ಸಲಹೆಗೆ ಸಂಪರ್ಕಿಸಿ" },
  langLabelEn: { en: "EN", kn: "EN" },
  langLabelKn: { en: "ಕನ್ನಡ", kn: "ಕನ್ನಡ" },
};

export function t(key: keyof typeof strings, lang: Lang) {
  return strings[key][lang];
}
