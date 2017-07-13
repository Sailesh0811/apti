$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyBUFQ4lIxZz-iTm_OVt5YyP32EdUhDdKr4",
    authDomain: "saiapp-e2ad8.firebaseapp.com",
    databaseURL: "https://saiapp-e2ad8.firebaseio.com",
    projectId: "saiapp-e2ad8",
    storageBucket: "saiapp-e2ad8.appspot.com",
    messagingSenderId: "759355941436"
  };
  firebase.initializeApp(config);
  $('body').click();
firebase.database().ref('messages').on('value',(snapshot)=>{
str = ''
console.log(snapshot.val());
var f = Object.keys(snapshot.val()).map(function(e){
    return snapshot.val()[e]
})
    f.forEach(function(data){
        if(localStorage.getItem('regno'))
        {
            console.log(data.registerno == 118003148)
            if(data.registerno == 118003148)
            {
                str = str + '<div class="row msg_container base_receive"><div class="col-md-2 col-xs-2 avatar"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div><div class="col-xs-10 col-md-10"><div class="messages msg_receive"> <p>'
                str = str + data.message + "</p>";
                str = str + ' <time datetime="2009-11-13T20:00">' + "admin" + '</time></div></div></div>'
            }
            else if(data.registerno == localStorage.getItem('regno'))
            {
                 str = str + '<div class="row msg_container base_sent"><div class="col-xs-10 col-md-10"><div class="messages msg_sent"> <p>'
                str = str + data.message + "</p>";
                str = str + ' <time datetime="2009-11-13T20:00">' + "me"+ '</time></div></div><div class="col-md-2 col-xs-2 avatar"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div></div>'
            }
            else
            {
                     str = str + '<div class="row msg_container base_receive"><div class="col-md-2 col-xs-2 avatar"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div><div class="col-xs-10 col-md-10"><div class="messages msg_receive"> <p>'
                str = str + data.message + "</p>";
                str = str + ' <time datetime="2009-11-13T20:00">' + data.registerno + '</time></div></div></div>'
            }
        }
    })
    console.log(str)
    $('.mymessage').empty()
    $('.mymessage').append(str)
})
})
$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('click','#btn-chat',function()
{
var message = $('#btn-input').val();
var data = {
    registerno:localStorage.getItem("regno"),
    message:message
}
console.log(data)
firebase.database().ref('messages').push(data);
$('#btn-input').val("")
});


var toast=new Vue({
  el: '#toast',
  data: {
    show: false,
    toast: "hello"
  },
  methods: {
    openToast: function (argument) {      
      this.show=true;
      this.toast=argument;
      var t=this;
      setTimeout(function(){t.show=false;},3000);
    }
    
  }
});


var app = new Vue({
  el: '#signIn',
  data: {
    name1: '',
    password: '',
    regno1: '',
    error:'true',
    name2: '',
    regno2: ''
  },
  methods: { 

 checkpassword: function () {
      
    if (this.password.length <8) {        
      console.log('error pass');//add required error class
       this.error='true'
    }
    this.error='false'
    console.log(this.password)
  },
  checkreg: function () {
    var h=this;
     var pattern=new RegExp(/[0-9]{9}/);
   if (!pattern.test(this.regno)) {        
      console.log('error number');//add required error class
       this.error='true'
    }
      
    this.error='false'
    console.log(h.name)

  },
  
  sub: function () {
      
    if (this.password.length <8) {        
      alert('minimum 8 char password');//add required error class
       this.error='true'
    }
    else{
     var t = this.regno
    $.ajax({
      type: "POST",
      url: "./php/signin.php",
      data:{regno:this.regno,password:this.password},
      success:function(response){
        console.log(response);
        if(JSON.parse(response)=="error"){
          alert("Invalid details");

        }
        else if(JSON.parse(response)=="Error"){
          alert('already attended the test');
        }
        else{

          localStorage.setItem('regno',t);
          toast.openToast('Logged in');
          window.location='./test.html'
        }
      }
    });
     }
   }
  
}
})
