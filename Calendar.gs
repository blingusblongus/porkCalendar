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

        // Should I do this, or a hash table?
        /*
        rows: {
            eventId: getHeaderRow("Event ID"),
            date: getHeaderRow("Date"),
            confirmed: getHeaderRow("Confirmed?"),
            contact: getHeaderRow("")
        }
        */

        rows: hash
    }
}

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

//Create Data Object

function gatherData(column){

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
