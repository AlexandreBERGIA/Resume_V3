function QueryString () {
    this.urlParams = {};

    /**
     * Declare the events
     */
    this.events        = {};
    this.events.update = new Event("update");

    /**
     * Constructor implementation
     */
    this.Constructor = function () {
        this.retrieve();
    }

    /**
     * Update the parameters based on the urlString
     *
     * @param  {string} urlParams
     *    The string to parse
     *
     * @return {object}
     *    The object corresponding to the parsed string
     *
     */
    this.update = function(urlParams) {
        this.urlParams = this.parse(urlParams);
        return this.urlParams;
    };

    /**
     * Parse the passed string that is expecting to have pairs separated by a
     * "&" and value assignment with "="
     *
     * @param  {string} urlParams
     *    The string to parse
     *
     * @return {object}
     *    The object corresponding to the parsed string
     */
    this.parse = function(urlParams) {
        var paramsArray = urlParams.split('&', 2);
        var urlParams      = {};

        for (let i = 0; i < paramsArray.length; ++i)
        {
            var paramsEntries = paramsArray[i].split('=', 2);

            if (paramsEntries.length !== 2) continue;
            urlParams[paramsEntries[0]] = decodeURIComponent(paramsEntries[1].replace(/\+/g, " "));
        }
        return urlParams;
    };

    /**
     * Stringify the url object to be placed in the url with pair separator
     * as "&" and assignment symbol "="
     *
     * @return {string}
     *    The stringified object
     */
    this.stringify = function() {
        var self = this;
        var url  = "";
        $.each(self.urlParams, function(entry) {
            url += entry + "=" + self.urlParams[entry] + "&";
        });
        return url.slice(0, -1);
    };

    /**
     * Return the value of the entry that was passed as parameter
     *
     * @param  {string} entryName
     *    The entry we are looking for
     *
     * @return {string}
     *    The value of the entry we are looking for, if doesn't exist: undefined
     */
    this.get = function(entryName) {
        return this.urlParams[entryName];
    };

    /**
     * Return the value of the entry that was passed as parameter
     *
     * @param  {string} entryName
     *    The entry we are looking for
     * @param {object} value
     *    The value to be set
     *
     * @return {string}
     *    The value, if the entry doesn't exist undefined
     */
    this.set = function(entryName, value) {
        this.urlParams[entryName] = value;
    }

    /**
     * Returns the object that represents the parameters
     *
     * @return {object}
     *    The object representing the parameters
     */
    this.getAll = function() {
        return this.urlParams;
    }

    /**
     * Applies the values to the browser
     */
    this.apply = function() {
        // Nothing for now here
    }

    /**
     * Retrieves the values from the browser
     */
    this.retrieve = function () {
        // Nothing for now here
    }

    /**
     * Constructor call
     */
    this.Constructor();
};
