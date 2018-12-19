import Vue from "vue";
import VueI18n from "vue-i18n";

import enUS from "./locales/en-US/text.json";
import dateTimeFormats from "./locales/en-US/date.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS
  },
  dateTimeFormats: {
    "en-US": dateTimeFormats
  },
  silentTranslationWarn: true
});

const loadedLanguages = ["en-US"];

/**
 * Change the language in the i18n plugin and set the HTML element's lang attribute
 * @param {string} lang The language to change to
 */
function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
}

/**
 * Load a new language file (if it hasn't been loaded yet) and change the system language
 *   to this new language.
 * @async
 * @param {string} lang The language to change to
 * @returns {Promise<string>} The language that was passed
 */
export function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      Promise.all([
        import(/* webpackChunkName: "text-[request]" */ `@/lang/locales/${lang}/text.json`),
        import(/* webpackChunkName: "date-[request]" */ `@/lang/locales/${lang}/date.json`)
      ]).then(([messages, dateTimeFormats]) => {
        i18n.setLocaleMessage(lang, messages.default);
        i18n.setDateTimeFormat(lang, dateTimeFormats.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang);
      });
    }
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
}

// Array of available languages in the system
export const availableLanguages = {
  "zh-CN": "Chinese (Simplified)",
  "cs-CZ": "Czech (Czech Republic)",
  "nl-NL": "Dutch (Netherlands)",
  "en-US": "English (United States)",
  "fr-FR": "French (France)",
  "de-DE": "German (Germany)",
  "pt-BR": "Portuguese (Brazil)",
  "it-IT": "Italian (Italy)"
};

i18n.availableLanguages = availableLanguages;
