//Load Shared Properties
function properties() {
    return {
        ss: SpreadsheetApp.getActiveSpreadsheet(),
        sheet: SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(),
        calId:
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
