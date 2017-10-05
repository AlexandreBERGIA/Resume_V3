/**
 * The Resume Manager
 *
 * @param {Filter} filter
 *    The filter we are applying
 * @param {Selector} selector
 *    The Selector object to reffer to the enties we are going to write on the
 *    page
 */
function Resume_v3(filter, selector) {
    //Declare the xml object
    this.filter     = filter;
    this.$selector  = selector
    this.$xml       = null;

    /**
     * Main function to load the Resume one the page
     */
    this.loadResume = function (filter) {
        var self = this;

        // Request the XML data from the file
        $.ajax({
            type: "GET",
            url: "data.xml",
            dataType: "xml",
            success: function (xml) {
                self.$xml   = $(xml);
                self.writeResumeOnPage();
            }
        });
    };

    /**
     * Applies the filters to the current selection and return the filtered
     * values
     *
     * @param  {JQuerySelector} $xml
     *   The data to filter
     *
     * @return {JQuerySelector}
     *   The filtered data
     */
    this.applyFilter = function ($xml) {
        return $xml.find('[language=' + this.filter.language + ']');
    };

    /**
     * Convert the passed JQuery xml in to an object
     *
     * @param  {JQuery} $xml
     *    The Jquery selector of the xml
     *
     * @return {object}
     *    The Object equivalent of the passed xml
     */
    this.xmlToObject = function ($xml) {
        var self   = this;
        var object = {};
        var index  = 0;

        $xml.each(function() {
            if (_.size($(this).children()) > 0) {
                object[index++] = self.xmlToObject($(this).children());
            } else {
                object[this.nodeName] = $(this).text();
            }
        });
        return object;
    }

    /**
     * Write the Resume on the page based on the filters
     */
    this.writeResumeOnPage = function () {
        // Call all the functions one by one for all the sections
        this.writeContact();

        this.writeSection("experiences");
        this.writeSection("knowledge");
        this.writeSection("references");
        this.writeSection("trainings");
        this.writeSection("organizations");
        this.writeSection("languages");
        this.writeSection("rewards");
        this.writeSection("other");
    };

    /**
     * Write the address on the page
     */
    this.writeContact = function () {
        var data       = this.$xml.find('main titles');
        data           = this.applyFilter(data);
        document.title = data.text();

        var data = this.$xml.find('main entries');
        data     = this.applyFilter(data);
        data     = this.xmlToObject(data)[0];

        var template   = _.template(this.$selector.contact.template.text());
        this.$selector.contact.container.append(template(data));
    }

    /**
     * Write the given section on the page
     *
     * @param {string} sectionName
     *    The name of the section we are writing
     */
    this.writeSection = function (sectioName) {
        var self = this;

        // Get the title data
        var data = this.$xml.find(sectioName + ' titles');
        data     = this.applyFilter(data);
        data     = this.xmlToObject(data);

        var template = _.template(this.$selector[sectioName].titleTemplate.text());
        this.$selector[sectioName].titleContainer.append(template(data));


        // Get the data
        var data = this.$xml.find(sectioName + ' entries');
        data     = this.applyFilter(data);
        data     = this.xmlToObject(data);

        var template = _.template(self.$selector[sectioName].entryTemplate.text());
        _.each(data, function(entry) {
            self.$selector[sectioName].entryContainer.append(template(entry));
        });
    }
}
