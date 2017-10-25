/**
 * The Resume Manager
 *
 * @param {Filter} filter
 *    The filter we are applying
 * @param {Selector} selector
 *    The Selector object to reffer to the enties we are going to write on the
 *    page
 * @param {Overlay} overlay
 *    The page overlay
 */
function Resume_v3(filter, selector, overlay) {
    //Declare the xml object
    this.filter     = filter;
    this.selector   = selector;
    this.overlay    = overlay;
    this.$xml       = null;

    /**
     * Main function to load the Resume one the page
     */
    this.loadResume = function (filter) {
        var self = this;

        // Overlay the page until the load is complete
        this.overlay.toggleLoading(true);

        // Request the XML data from the file
        $.ajax({
            type: "GET",
            url: "data.xml",
            dataType: "xml",
            success: function (xml) {
                self.$xml   = $(xml);
                self.writeResumeOnPage();
                self.overlay.toggleLoading(false);
            }
        });
    };

    /**
     * Write the Resume on the page based on the filters
     */
    this.writeResumeOnPage = function () {
        // Call all the functions one by one for all the sections
        this.writeSection("main");
        this.writeSection("contact");
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
     * Write the given section on the page
     *
     * @param {string} sectionName
     *    The name of the section we are writing
     */
    this.writeSection = function (sectioName) {
        var self     = this;
        var template = {};

        // Get the title data
        var data = this.filter.applyFilter(this.$xml, sectioName);
        data     = this.filter.filteredToObject(data);

        if (this.selector[sectioName] && this.selector[sectioName].titleTemplate) {
            // If there are data entries, we show the title, else we hide it
            if (_.keys(data.entries).length > 0) {
                template = _.template(this.selector[sectioName].titleTemplate.text());
                this.selector[sectioName].titleContainer.empty().append(template(data.title)).show();
            } else {
                this.selector[sectioName].titleContainer.hide();
            }

        }

        if (self.selector[sectioName] && self.selector[sectioName].entryTemplate) {
            template = _.template(self.selector[sectioName].entryTemplate.text());
            self.selector[sectioName].entryContainer.empty();
            _.each(data.entries, function(entry) {
                self.selector[sectioName].entryContainer.append(template(entry));
            });
        }
    }
}
