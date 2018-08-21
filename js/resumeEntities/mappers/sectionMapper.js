function SectionMapper() {

    /**
     * The entry mapper
     *
     * @type {EntryMapper}
     */
    this.entryMapper = new EntryMapper();

    /**
     * Map the section
     *
     * @param  {String} type
     *    The type of entry
     * @param  {Object} data
     *    The data to map
     *
     * @return {Section}
     *    The mapped section
     */
    this.map = function(type, data) {
        var self          = this;
        var section       = new Section();
        section.title     = data.title;

        _.each(data.entries, function(entry) {
            section.addEntry(self.entryMapper.map(type, entry));
        });

        return section;
    }
}
