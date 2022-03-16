//HTML呼び出し画面遷移を含む
function doGet(e) {
  let page = e.parameter.page;
  if (!page) {
    // page = 'index';
    page = 'menu';
  }
  return HtmlService.createTemplateFromFile(page).evaluate();
}

function getAppUrl() {
  return ScriptApp.getService().getUrl();
}
//案件管理情報のアップローダー側呼び出し
function processForm(formObject) {
  //管理シートのパスはここ
  var managementSS = SpreadsheetApp.openById('1piiiPmycG-79j3R6VgSd3PkTnNg9bhtbk753Zp0z3T8');
  var managementSheet = managementSS.getSheetByName('実行シート');
  var checkfolderID = managementSheet.getRange(2, 1).getValues();
  // Logger.log(checkfolderID);
  var formBlob = formObject.myFile;

  try {
    //const folderID = '1Dez5N7jMFIuKjcTabtrqJSRuQ9jhf7qT';
    //test失敗用
    //const folderID='1Dez5N7jMFIuK7q';
    var uploadFolder = DriveApp.getFolderById(checkfolderID);
    var driveFile = uploadFolder.createFile(formBlob);//アップロード
    return driveFile.getUrl();
  } catch (e) {
    return driveFile.gotUrl();;
  }
}
//売上管理情報のアップローダー側呼び出し
function processForm2(formObject) {
  //管理シートのパスはここ
  var managementSS = SpreadsheetApp.openById('1BFJOFb9wYRKOTb_6ugDL2EyUUjS5U9ABzCFCo2QoFmI');
  var managementSheet = managementSS.getSheetByName('実行シート');
  var checkfolderID = managementSheet.getRange(2, 1).getValues();
  // Logger.log(checkfolderID);
  var formBlob = formObject.myFile;

  try {
    //const folderID = '1Dez5N7jMFIuKjcTabtrqJSRuQ9jhf7qT';
    //test失敗用
    //const folderID='1Dez5N7jMFIuK7q';
    var uploadFolder = DriveApp.getFolderById(checkfolderID);
    var driveFile = uploadFolder.createFile(formBlob);//アップロード
    return driveFile.getUrl();
  } catch (e) {
    return driveFile.gotUrl();//失敗判定用
  }
}
function conversionExcel(){
  var check=ConvertFromExcelToSpreadsheet.main();
  if(check){
  }else{
    throw expression;
  }
}
function conversionCsv(){
  var check=ConvertFromCsvToSpreadsheet.main();
  if(check){
  }else{
    throw expression;
  }
 
}
