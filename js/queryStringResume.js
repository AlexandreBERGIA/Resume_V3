function QueryStringResume (urlParams) {
    $.extend(this, new QueryString(urlParams));

    /**
     * @see QueryString.apply()
     */
    this.apply = function() {
        location.hash = this.stringify();
    }

    /**
     * @see QueryString/retrieve()
     */
    this.retrieve = function() {
        this.urlParams = this.parse(location.hash.substring(1));
    }

    /**
     * Get the value of C that determines whether we show the controls or not
     *
     * @return {boolean}
     *    The value of C
     */
    this.getC = function() {
        var c = this.get("c");
        return (c == "true") ? true : false;
    }

    /**
     * Set the value of C that determines whether we show the controls or not
     *
     * @param {string}
     *    The value of C
     */
    this.setC = function(c) {
        c = (c === true) ? "true" : "false";
    }

    /**
     * Get the value of start
     *
     * @return {integer}
     *    The start value
     */
    this.getStart = function() {
        return parseInt(this.get("start"));
    }

    /**
     * Set the value of Start
     *
     * @param {integer} start
     *    The start value
     */
    this.setStart = function (start) {
        this.set("start", parseInt(start));
    }

    /**
     * Constructor call
     */
    this.Constructor(urlParams);
}
