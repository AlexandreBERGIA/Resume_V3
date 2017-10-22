/**
 * In charge of handling all the actions on and in the menu
 *
 * @param {QueryStringResume} urlParameters
 *    The object manipulating the url parameters
 * @param {Selector} selector
 *    The Selector object to reffer to the enties we are going to write on the
 *    page
 */
function Menu (urlParameters, selector) {
    var self                      = this;
    this.timeoutAutoCloseTime     = 500;
    this.timeoutAutoClose         = {};
    this.selector                 = selector;
    this.urlParameters            = urlParameters;
    this.classes                  = {};
    this.classes.handleToggle     = "menu--style-open";
    this.classes.overlay          = "menu--style-overlayApplied";
    this.minStartYear             = 2003;
    this.maxStartYear             = (new Date()).getFullYear();
    this.startYear                = this.minStartYear;

    /**
     * Constructor implementation
     */
    this.Constructor = function() {
        this.toggleVisibleMenu(this.urlParameters.getC());

        // Render the inputs for filtering, define the selectos and add the
        // listeners.
        var template   = _.template(this.selector.menu.controlsTemplateContainer.text());
        this.selector.menu.controlsContainer.append(template({}));
        this.defineSelectors();
        this.addListeners();

        // Update the controls to match the parameters
        var startYear = (this.urlParameters.getStart()) ? this.urlParameters.getStart() : this.minStartYear;
        this.setStartYear(startYear);
    }

    /**
     * Toggle the menu visibility
     *
     * @param {boolean} toggle
     *    [false] When true, the Control panel will be visible
     */
    this.toggleVisibleMenu = function(toggle) {
        this.selector.menu.container.toggle(toggle);
    };

    /**
     * Toggle the menu expand / Collapse
     *
     * @param  {boolean} toggle
     *    [undefined] When undefined, perform the actual toggle depending on
     *    the previous value, else apply the toggle passed as parameter
     */
    this.toggleExpand = function(toggle) {
        if (toggle == undefined) {
            toggle = !this.selector.mainContainer.hasClass(this.classes.handleToggle);
        }
        this.selector.mainContainer.toggleClass(this.classes.handleToggle, toggle);
        this.selector.menu.overlay.toggleClass(this.classes.overlay, toggle);
    };

    /**
     * Handler that perform the actions when the values in the urlParameters
     * changed
     */
    this.urlParametersChangeEventHandler = function() {
        // Toggle the visibility of the menu
        this.toggleVisibleMenu(this.urlParameters.getC());

        // Select the values from the filters
        this.setStartYear(this.urlParameters.getStart());
    }

    /**
     * Define the selectors for the Menu
     */
    this.defineSelectors = function() {
        this.selector.menu.controls = {};
        this.selector.menu.controls.yearReset        = $(".app--menu-yearReset", this.selector.menu.container);
        this.selector.menu.controls.yearMinus        = $(".app--menu-yearMinus", this.selector.menu.container);
        this.selector.menu.controls.yearPlus         = $(".app--menu-yearPlus", this.selector.menu.container);
        this.selector.menu.controls.yearsBackDisplay = $(".app--menu-yearsBackDisplay", this.selector.menu.container);
        this.selector.menu.controls.yearDisplay      = $(".app--menu-yearDisplay", this.selector.menu.container);
        this.selector.menu.controls.percentVisible   = $(".app--menu-percentVisible", this.selector.menu.container);
    };

    /**
     * Ass the listeners to the page elements
     */
    this.addListeners = function () {
        // Add the listeners for the Control container
        this.addListenersControlContainer();
        this.addListenersControls();
    }

    /**
     * Add the listeners to handle the Control containers
     */
    this.addListenersControlContainer = function() {
        this.selector.menu.handleContainer.on('click', function() {
            self.toggleExpand();
        });
        this.selector.menu.overlay.on('click', function() {
            self.toggleExpand(false);
        });

        // Implement the auto-close of the menu when leaving
        this.selector.menu.controlsContainer.on('mouseleave', function() {
            self.timeoutAutoClose = setTimeout(function() {
                self.toggleExpand(false);
            },
            self.timeoutAutoCloseTime);
        });
        this.selector.menu.handleContainer.on('mouseleave', function() {
            self.timeoutAutoClose = setTimeout(function() {
                self.toggleExpand(false);
            },
            self.timeoutAutoCloseTime);
        });
        this.selector.menu.controlsContainer.on('mouseenter', function() {
            clearTimeout(self.timeoutAutoClose);
            delete self.timeoutAutoClose
        });
        this.selector.menu.handleContainer.on('mouseenter', function() {
            clearTimeout(self.timeoutAutoClose);
            delete self.timeoutAutoClose
        });
    }

    /**
     * Add the listeners to handle the controls
     */
    this.addListenersControls = function() {
        // Increment the currentPastYears to see further in the past
        this.selector.menu.controls.yearPlus.on("click", function() {
            self.setStartYear(self.startYear - 1);
        });

        // Decrement the currentPastYears to see further in the past
        this.selector.menu.controls.yearMinus.on("click", function() {
            self.setStartYear(self.startYear + 1);
        });

        // Decrement the currentPastYears to see further in the past
        this.selector.menu.controls.yearReset.on("click", function() {
            self.setStartYear(self.minStartYear);
            self.toggleExpand(false);
        });
    }

    /**
     * Set the start year
     *
     * @param {integer} startYear
     *    The start year to show
     */
    this.setStartYear = function(startYear) {
        // First determine if the currentPastYears is in the accepted range,
        // otherwize update it
        if (startYear < this.minStartYear) {
            startYear = this.minStartYear;
        }
        if (startYear > this.maxStartYear) {
            startYear = this.maxStartYear;
        }
        this.startYear = startYear;

        if (this.urlParameters.getStart() != this.startYear) {
            this.urlParameters.setStart(this.startYear);
            this.urlParameters.apply();
        }

        // Update the controls to show the current selection
        this.selector.menu.controls.yearsBackDisplay.text(self.getPastYears());
        this.selector.menu.controls.yearDisplay.text(self.startYear);
        this.selector.menu.controls.percentVisible.width(self.getPercentVisible());

        // Disable the buttons when reaching the min and max
        this.selector.menu.controls.yearPlus.toggleClass("element--display-disabled", (startYear <= this.minStartYear));
        this.selector.menu.controls.yearMinus.toggleClass("element--display-disabled", (startYear >= this.maxStartYear));
        this.selector.menu.controls.yearReset.toggleClass("element--display-disabled", (startYear == this.minStartYear));
    }

    /**
     * Return the amount of past years that represent the start year
     */
    this.getPastYears = function() {
        return (new Date()).getFullYear() - this.startYear;
    }

    /**
     * Get the visible percentage of data on the page depending on the
     * selected start date
     */
    this.getPercentVisible = function() {
        var maxPastYears = (new Date()).getFullYear() - this.minStartYear;
        return  (this.getPastYears() / maxPastYears)*100 + "%";
    }

    /**
     * Constructor call
     */
    this.Constructor(urlParameters);
}
