/**
 * Declare the filter object and instanciate it
 *
 * @param  {object} config
 *    The object containing the configuration for the filters
 *    - language :["ENG"] The Language we are filtering
 *    - start    :[1999] The start date to filter
 */
function Filter (config) {
    var self      = this;

    this.setConfig = function(config) {
        this.language = config.language ? config.language : "ENG";
        this.start    = (config.start && parseInt(config.start)) ? parseInt(config.start) : 1999;
    }
    this.setConfig(config);

    /**
     * Applies the filters to the current selection and return the filtered
     * values
     *
     * @param  {JQuerySelector} $xml
     *    The data to filter
     * @param {string} section
     *    The selection we want to extract
     *
     * @return {JQuerySelector}
     *   The filtered data
     */
    this.applyFilter = function ($xml, section) {
        var title     = $xml.find(section + ' titles [language=' + this.language + ']');
        var entries   = $xml.find(section + ' entries [language=' + this.language + ']');
        entries = entries.filter(function() {
            var entryStartDate = $(this).find("startDate").text();

            // If we have an entry start date we compare it with the filter, else we return the entry
            if(entryStartDate) {
                entryStartDate = new Date(entryStartDate);
                if (entryStartDate.getFullYear() >= self.start) {
                    return this;
                }
            } else {
                return this;
            }
        });

        return {
            title: title,
            entries: entries
        };
    };

    /**
     * Convert the passed JQuery xml in to an object
     *
     * @param  {object} data
     *    The data comng from ther @see applyFilter function
     *
     * @return {object}
     *    The Object equivalent of the passed xml
     */
    this.filteredToObject = function (data) {
        var self   = this;
        var object = {
            title: {},
            entries: {}
        };
        var index  = 0;

        object.title   = this.filteredToObjectSub(data.title);
        object.entries = this.filteredToObjectSub(data.entries);

        return object;
    }

    this.filteredToObjectSub = function (data) {
        var self   = this;
        var object = {};
        var index  = 0;

        data.each(function() {
            if (_.size($(this).children()) > 0) {
                object[index++] = self.filteredToObjectSub($(this).children());
            } else {
                object[this.nodeName] = $(this).text();
            }
        });
        return object;
    }
};
