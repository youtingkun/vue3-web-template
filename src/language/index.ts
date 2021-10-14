import { createI18n } from "vue-i18n";
import en from "./modules/en.json";
import zh from "./modules/cn.json";

const messages = {
  "en-us": {
    ...en,
  },
  "zh-cn": {
    ...zh,
  },
};

function getLanguage() {
  const localLanguage = navigator.language.toLowerCase();
  const languages = Object.keys(messages);
  const res = languages.find((item) => item === localLanguage);
  return res ? res : "en-us"; // 设置默认语言为英文
}

const i18n = createI18n({
  locale: getLanguage(), // set locale
  messages, // set locale messages
});

export default i18n;
