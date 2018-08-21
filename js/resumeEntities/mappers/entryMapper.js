/**
 * Factory that returns
 */
function EntryMapper() {
    this.map = function(type, data) {
        var entry = undefined;

        switch(type) {
        case "experiences":
            var startDate = (data.startDate) ? new Date(data.startDate) : undefined;
            var endDate   = (data.endDate) ? new Date(data.endDate) : undefined;
            entry = new Experience();

            entry.setStartDate(startDate);
            entry.setEndDate(endDate);
            entry.setPosition(data.position);
            entry.setCompanyName(data.companyName);
            entry.setCompanyLogoPath(data.companyLogoPath);
            entry.setLocation(data.location);
            entry.setDescription(data.description);
        }

        return entry;
    }
}
