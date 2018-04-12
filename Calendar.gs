//Load Shared Properties
function properties() {

    // Populate Hash Table w/ columns and headers
    var values = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("A1:A").getValues();
    var hash = {};

    for(i in values){
        hash[values[i][0]] = parseFloat(i)+1;
    };

    return {
        ss: SpreadsheetApp.getActiveSpreadsheet(),
        sheet: SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(),
        calId: "calId", // PLACEHOLDER
        rows: hash
    }
}
\
//Probably won't use this on first build --- easier to loop all columns once/day
/*
function onEdit(e) {
    //Load properties
    var props = properties();
    var sheet = props.sheet;

    //Get edited column, row, calendar id
    var column = e.range.getColumn();
    var row = getHeaderRow("Event ID");
    var eventId = sheet.getRange(row, column).getValue();

    if(id==="")

        Logger.log(calId);
}
*/


//Create Data Object

function gatherData(column, props){
    var sheet = props.sheet;
    var hash = props.rows;
    var row = {
        // Maybe I should just trim down the calendar so that it includes all of them?
        // THESE I'LL NEED TO CHANGE IF THERE ARE ANY LABELING CHANGES IN SS
        date: hash["Date"],
        eventID: hash["Event ID"],
        confirmed: hash["Confirmed?"],
        name: hash["Event"],
        venue: hash["Venue"],
        city: hash["City"],
        payment: hash["Payment"]
    }

}
//Decision tree
function createNewEvent() {

}


function getHeaderRow(header) { //Finished!
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Upcoming Gigs"); //If name changes, causes problems! Maybe use sheetId instead.
    var headerValues = sheet.getRange("A:A").getValues();

    for (i = 0; i < sheet.getLastRow(); i++) {
        if (headerValues[i] == header) {
            return i + 1;
        }
    }
}
