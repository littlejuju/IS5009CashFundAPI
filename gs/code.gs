function  doGet(e)  {
  //取得参数
  var params  =  e.parameter;
  var transferin = params.transferin;
  var plan = params.plan;
  var utc = params.utc;

  if(plan == 'transfer'){
    var SpreadSheet = SpreadsheetApp.openById("13AR57As8Ebr2-LN8i85Dk5Oel8sb3ZRyx1qQ1DJkCjc");
    var Sheet  =  SpreadSheet.getSheetByName('User')
    var LastRow  =  Sheet.getLastRow() ;
    var fund = Sheet.getRange( LastRow ,  1 ).getValue()
    var bank = Sheet.getRange( LastRow ,  2 ).getValue()
    var balance = Sheet.getRange( LastRow ,  3 ).getValue()

    if(transferin == 'withdraw'){
      Sheet.getRange( LastRow + 1 ,  1 ).setValue('lion') ;
      Sheet . getRange ( LastRow + 1 ,  2 ).setValue ( parseFloat(bank)+ parseFloat(balance) ) ;
      Sheet . getRange ( LastRow + 1 ,  3 ).setValue ( 0 ) ;
      Sheet . getRange ( LastRow + 1 ,  4 ).setValue ( utc ) ;
      return ContentService.createTextOutput('Withdraw Successfully!') ;
    }else{
      if(parseFloat(bank) < parseFloat(transferin) || parseFloat(balance) + parseFloat(transferin) < 0){
        return ContentService.createTextOutput('Insufficient balance!') ;
      }else{
        Sheet.getRange( LastRow + 1 ,  1 ).setValue(fund) ;
        Sheet . getRange ( LastRow + 1 ,  2 ).setValue ( parseFloat(bank) - parseFloat(transferin) ) ;
        Sheet . getRange ( LastRow + 1 ,  3 ).setValue ( parseFloat(balance) + parseFloat(transferin) ) ;
        Sheet . getRange ( LastRow + 1 ,  4 ).setValue ( utc ) ;
        return ContentService.createTextOutput('Transfer Successfully!') ;
      }
    }
  }else{
    var SpreadSheet = SpreadsheetApp.openById("13AR57As8Ebr2-LN8i85Dk5Oel8sb3ZRyx1qQ1DJkCjc");
    var Sheet  =  SpreadSheet.getSheetByName('User')
    var LastRow  =  Sheet.getLastRow() ;
    var fund = Sheet.getRange( LastRow ,  1 ).getValue()
    var bank = Sheet.getRange( LastRow ,  2 ).getValue()
    var balance = Sheet.getRange( LastRow ,  3 ).getValue()

    Sheet.getRange( LastRow + 1 ,  1 ).setValue(plan) ;
    Sheet . getRange ( LastRow + 1 ,  2 ).setValue ( bank) ;
    Sheet . getRange ( LastRow + 1 ,  3 ).setValue ( balance) ;
    Sheet . getRange ( LastRow + 1 ,  4 ).setValue ( utc ) ;
    return ContentService.createTextOutput('Change Fund Successfully!') ;
  }
}
