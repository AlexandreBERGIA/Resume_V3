/**
 * Obect that handles a list of Entries
 */
function EntryList() {
    /**
     * Delcare the array that contains the list of entries
     *
     * @type {Array}
     */
    this.entryList = [];

    /**
     * Add an entry to the entry list
     *
     * @param {Entry} entry
     *    The entry to add to the list
     */
    this.addEntry = function(entry) {
        this.entryList.push(entry);
    }

    /**
     * Clear the list of entries
     */
    this.clearEntries = function() {
        this.entryList = [];
    }

    /**
     * Return the list of Entries
     *
     * @return {Array}
     *    The list of entries
     */
    this.getEntries = function() {
        return this.entryList;
    }
}
