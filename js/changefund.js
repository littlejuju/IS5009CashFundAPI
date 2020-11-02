let  sendButton  =  document.querySelector( 'button' ) ;
let checks = document.getElementsByName("myradio");
let agree = document.getElementsByName("agree");
function  send(){
  // var plan = $('#wrap input:radio:checked').val()；
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
    var len = checks.length;
    for(var i = 0;i<len;i++)
    {
        if(checks[i].checked)
        {
            var plan = checks(i).value //这个就是 checked了, 处理 就OK了
        }
    }
    var myDate = new Date();
    var utc = myDate.toLocaleDateString();
    // alert(utc)
    console.log(plan);
    $.ajax( {
        type: "get",
        url : "https://script.google.com/macros/s/AKfycbzQmuTn4pR_SM0dqfAYjXgqilJZTBVwyE4M7qY47rlgX7er5Oo/exec" ,
        data: {
            "transferin": '0',
            "plan":plan,
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

    // do something with the response
    if (plan == 'lion'){
      window.open('./balance.html');
    }else{
      window.open('./balance.html');
    }
  }else{
    alert('Please check Terms and Conditions!')
  }
  // alert(plan)
} ;

sendButton.addEventListener( 'click' ,  send ) ;
