import languageData from '@wikimedia/language-data';

const wikisourceCodes = [
    "ang", "ar", "as", "az", "ban", "be", "bg", "bn", "br", "bs",
    "ca", "cs", "cy", "da", "de", "el", "en", "eo", "es", "et",
    "eu", "fa", "fi", "fo", "fr", "gl", "gu", "he", "hi", "hr",
    "ht", "hu", "hy", "id", "is", "it", "ja", "jv", "kn", "ko",
    "la", "li", "lij", "lt", "mk", "ml", "mr", "nap", "nl", "no",
    "or", "pa", "pl", "pms", "pt", "ro", "ru", "sa", "sah", "sk",
    "sl", "sr", "sv", "ta", "te", "th", "tr", "uk", "vec", "vi",
    "wa", "yi", "zh", "zh-min-nan"
];

const getWikisourcesLang = function() {
    const result = {};
    wikisourceCodes.forEach(code => {
        result[code] = languageData.getAutonym(code);
    });
    return result;
}

export { getWikisourcesLang }
