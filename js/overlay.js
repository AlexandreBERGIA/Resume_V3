/**
 * The overlay manager
 *
 * @param {Selector} selector
 *    The Selector object to reffer to the enties we are going to write on the
 *    page
 */
function Overlay(selector) {
    this.selector        = selector;
    this.classes         = {};
    this.classes.overlay = "overlay--style-applied";
    this.classes.loading = "overlay--style-loading";

    /**
     * Toggle the overlay visibility
     *
     * @param  {Bolean} toggle
     *    True to show the overlay, if not passed, perform the toggle depending
     *    on the current status
     */
    this.toggle = function(toggle) {
        toggle = this.getToggleValue(
            this.selector.overlay.container,
            this.classes.overlay,
            toggle
        );

        this.selector.overlay.container.toggleClass(this.classes.overlay, toggle);
    }

    /**
     * Toggle the overlay and add a loading message
     *
     * @param  {Bolean} toggle
     *    True to show the overlay, if not passed, perform the toggle depending
     *    on the current status
     * @param  {String} message
     *    The message to show when the overlay is visible
     * @return {[type]}         [description]
     */
    this.toggleLoading = function(toggle, message) {
        toggle = this.getToggleValue(
            this.selector.overlay.container,
            this.classes.loading,
            toggle
        );
        this.toggle(toggle);
        this.selector.overlay.container.toggleClass(this.classes.overlay, toggle);
        this.selector.overlay.container.toggleClass(this.classes.loading, toggle);
    }

    /**
     * Get the toggle value that should be applied depending on the current
     * element and the toggle value
     *
     * @param  {Selector} element
     *    The element to inspect
     * @param {String} className
     *    The class name to check the toggle for
     * @param  {Boolean} toggle
     *    [undefined] The toggle value. when undefined we return the actual
     *    toggled value
     *
     * @return {Boolean}
     *    The new toggle value
     */
    this.getToggleValue = function(element, className, toggle) {
        return (toggle == undefined) ? !element.hasClass(className) : (toggle === true);
    }
}
