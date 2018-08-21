/**
 * Entry of type Experience
 */
function Experience() {
    $.extend(this, new Entry());

    /**
     * The start date
     *
     * @type {Date}
     */
    this.startDate = undefined;

    /**
     * the
     *
     * @type {Date}
     */
    this.endDate = undefined;

    /**
     * The position
     *
     * @type {String}
     */
    this.position = undefined;

    /**
     * The company name
     *
     * @type {String}
     */
    this.companyName = undefined;

    /**
     * The company logo path
     *
     * @type {String}
     */
    this.companyLogoPath = undefined;

    /**
     * The location
     *
     * @type {String}
     */
    this.location = undefined;

    /**
     * The description
     *
     * @type {String}
     */
    this.description = undefined;

    /**
     * The getter for the start date
     *
     * @return {Date}
     *    The start date
     */
    this.getStartDate = function() {
        return this.startDate;
    };

    /**
     * The setter for the start date
     *
     * @param {Date} startDate
     *    The start date
     */
    this.setStartDate = function (startDate) {
        this.startDate = startDate;
    };
    /**
     * The getter for the end date
     *
     * @return {Date}
     *    The end date
     */
    this.getEndDate = function() {
        return this.endDate;
    };

    /**
     * The setter for the end date
     *
     * @param {Date} endDate
     *    The end date
     */
    this.setEndDate = function (endDate) {
        this.endDate = endDate;
    };
    /**
     * The getter for the position
     *
     * @return {String}
     *    The position
     */
    this.getPosition = function() {
        return this.position;
    };

    /**
     * The setter for the position
     *
     * @param {String} position
     *    The position
     */
    this.setPosition = function (position) {
        this.position = position;
    };
    /**
     * The getter for the company name
     *
     * @return {String}
     *    The company name
     */
    this.getCompanyName = function() {
        return this.companyName;
    };

    /**
     * The setter for the company name
     *
     * @param {String} companyName
     *    The company name
     */
    this.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    /**
     * The getter for the company logo
     *
     * @return {String}
     *    The company logo
     */
    this.getCompanyLogoPath = function() {
        return this.companyLogoPath;
    };

    /**
     * The setter for the company logo
     *
     * @param {String} companyLogoPath
     *    The company logo
     */
    this.setCompanyLogoPath = function (companyLogoPath) {
        this.companyLogoPath = companyLogoPath;
    };
    /**
     * The getter for the location
     *
     * @return {String}
     *    The location
     */
    this.getLocation = function() {
        return this.location;
    };

    /**
     * The setter for the location
     *
     * @param {String} location
     *    The location
     */
    this.setLocation = function (location) {
        this.location = location;
    };
    /**
     * The getter for the description
     *
     * @return {String}
     *    The description
     */
    this.getDescription = function() {
        return this.description;
    };

    /**
     * The setter for the description
     *
     * @param {String} description
     *    The description
     */
    this.setDescription = function (description) {
        this.description = description;
    };

}
