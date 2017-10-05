/**
 * Declare the filter object and instanciate it
 *
 * @param  {string} language
 *   The Language we are filtering, default ENG
 */
function Filter (
    language
) {
    this.language = language ? language : "ENG";
};
