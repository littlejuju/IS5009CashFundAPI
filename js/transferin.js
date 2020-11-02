let  sendButton  =  document . querySelector ( 'button' ) ;
let agreeButton = document.getElementsByName("agree");
function  send(){
  let  money  = $('#transferValue').val();
  var myDate = new Date();
  var utc = myDate.toLocaleDateString();
  var agreed = 'false';
  var len1 = agreeButton.length;
  for(var i = 0;i<len1;i++)
  {
      if(agreeButton[i].checked)
      {
          var agreed = 'true'; //这个就是 checked了, 处理 就OK了
      }
  }
  // alert(agreed)
  if(agreed == 'true'){
  if (money !== null & money !== undefined & money !== '') {
    console.log(money);
    $.ajax( {
      type: "get",
      url : "https://script.google.com/macros/s/AKfycbzQmuTn4pR_SM0dqfAYjXgqilJZTBVwyE4M7qY47rlgX7er5Oo/exec" ,
      data: {
          "transferin": money,
          "plan":'transfer',
          "utc": utc
      },
      xhrFields: {
          mode: 'cors',
          withCredentials: true
      },
      success : function(response){
        alert(response)
      } ,
      error: function(){
            alert("There was an error :(")
          }
    } );
    window.open('./changefund.html');
  }else{
    alert("Value can not be empty!")
  }
}else{
  alert('Please check Terms and Conditions!')
}
} ;

sendButton.addEventListener( 'click' ,  send ) ;
