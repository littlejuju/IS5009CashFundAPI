let  sendButton  =  document . querySelector ( 'button' ) ;
let agree = document.getElementsByName("agree");
function  send(){
  let  money  = 'withdraw';
  var myDate = new Date();
  var utc = myDate.toLocaleDateString();
  var agreed = 'false';
  var len1 = agree.length;
  for(var i = 0;i<len1;i++)
  {
      if(agree[i].checked)
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
    window.open('./balance.html');
  }else{
    alert("Value can not be empty!")
  }
}else{
  alert('Please check Terms and Conditions!')
}
} ;

sendButton.addEventListener( 'click' ,  send ) ;
