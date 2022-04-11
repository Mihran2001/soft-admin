const i18n = require('i18next');
const resources = {
    hy: {
        translation: require('../locale/hy.json'),
    },
};

i18n.init({
    resources,
    lng: 'hy',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

module.exports = i18n;
