/**
 * A section containing a title and entries
 */
function Section() {
    /**
     * The professional experiences title
     *
     * @type {string}
     */
    this.title = undefined;

    /**
     * The list of entries
     *
     * @type {EntryList}
     */
    this.entryList = new EntryList();

    /**
     * Getter for the section title
     *
     * @return {sring}
     *    The section title
     */
    this.getTitle = function() {
        return this.title;
    }

    /**
     * Set the section title
     *
     * @param {string} title
     *    The section title
     */
    this.setTitle = function(title) {
        this.title = title;
    }

    /**
     * Get the section entries
     *
     * @return {Array[Entry]}
     *    The list of entries from the section
     */
    this.getEntries = function() {
        return this.entryList.getEntries();
    }

    /**
     * Add an entry to the entry list
     * @see EntryList.addEntry()
     */
    this.addEntry = function(entry) {
        this.entryList.addEntry(entry);
    }

    /**
     * Clear the list of entries
     * @see EntryList.clearEntries()
     */
    this.clearEntries = function() {
        this.entryList.clearEntries();
    }
}
