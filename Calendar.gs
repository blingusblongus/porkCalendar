function properties(){

}

function onEdit(e){
  var column = e.range.getColumn();
  var row = getHeaderRow("Calendar ID");
  var id =

  Logger.log(row);
}

function editSingle(e){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Upcoming Gigs");
    var data = sheet.getRange("B1:25").getValues();
    // NEED? var transposedData = transpose(data);
    var calendar = CalendarApp.getCalendarById("k70745ctvkfak786digvul5dig@group.calendar.google.com");

  Logger.log(getHeaderRow("Date"));

  calendar.getEventById(iCalId)

}


function getHeaderRow(header){ //Finished!
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Upcoming Gigs"); //If name changes, causes problems! Maybe use sheetId instead.
  var headerValues = sheet.getRange("A:A").getValues();

  for(i=0; i<sheet.getLastRow(); i++){
    if(headerValues[i] == header){
      return i+1;
    }
  }
}

