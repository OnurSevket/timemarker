import i18n from 'i18n-js';
import * as Localization  from "expo-localization";

import en from './locale/en_US.json';
import tr from './locale/tr_TR.json';

let deviceLocale = Localization.locale;

if (deviceLocale.indexOf("-") !== 0) {
    deviceLocale = deviceLocale.split("-")[0];
}


i18n.defaultLocale = 'en';
i18n.locale = 'tr';
i18n.fallbacks = true;
i18n.translations = { en, tr };

export default i18n;
