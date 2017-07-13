
$(document).ready(function(){
	var t = 0
window.onbeforeunload = function()
 {
 	
 	var userchoice=[];var k=0;
		//console.log($('input[type="radio"][name="q0"]:checked').val());
		for(var i=0;i<30;i++){
			var x="q"+k;console.log(x);
			userchoice[i]=$("input[type='radio'][name='"+x+"']:checked").val();
			k++;
	}
	console.log(ans);var count=0;
	for(var i=0;i<30;i++){
		if(ans[i]==userchoice[i]){
			count++;
		}
	}
	console.log(count);
	$.ajax({
		type:"POST",
		url:"./php/mark.php",
		data:{
			mark:count
		},
		success:function(response){
			console.log(response)
			if(response === "success"){
								//window.location.href  = "http://localhost/apti/signin.html";
				
				
			}
		}	
	});

	
  
};

	$('body').on('click',function(){
		var elem = document.getElementById("body");
if (elem.requestFullscreen) {
elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
elem.webkitRequestFullscreen();
}
	document.onwebkitfullscreenchange=function(){


console.log(t)

		if(t>0){if(confirm('You want to end the contest?')){
			var userchoice=[];var k=0;
		//console.log($('input[type="radio"][name="q0"]:checked').val());
		for(var i=0;i<30;i++){
			var x="q"+k;console.log(x);
			userchoice[i]=$("input[type='radio'][name='"+x+"']:checked").val();
			k++;
	}
	console.log(ans);var count=0;
	for(var i=0;i<30;i++){
		if(ans[i]==userchoice[i]){
			count++;
		}
	}
	console.log(count);
	$.ajax({
		type:"POST",
		url:"./php/mark.php",
		data:{
			mark:count
		},
		success:function(response){
			if(JSON.parse(response)=="success"){
				alert("Your score is "+ count);
				window.location="signin.html";
			}
		}
	});
	
		}

		else
		{

			t = 0
			$('body').click();
		}
}
else
{
	t = t + 1
}
	
	}

  
	})

	



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

var ans=[];
var app=new Vue({
el: '#test',
data: {
	show: false,
	time: 10
},
methods: {
	checkattend:function(){
		var h=this;
		$.ajax({
			type:"POST",
			url:"./php/checkmark.php",
			success:function(argument){
				console.log(argument+"jnjnj");
				h.show=argument;
				if(!h.show){
			console.log('as','dadada');
			// window.location="./signin.html";
		}
			}
		})
		console.log(this.show);
		
	},
	checksignin:function(){
		var h=this;

		$.ajax({
			type:"POST",
			url:"./php/checksignin.php",
			success:function(response){
				if(JSON.parse(response)=="false"){
					h.show=false;
				}
				else{
					h.show=false;
				}
			}
		});
		console.log(this.show);

		
	},
	addquestion:function(){

		$.ajax({
			type:"POST",
		url:"./php/ans.php",
		success:function(response){
			console.log(response);
			 ans=JSON.parse(response);
		}
	});
		$.ajax({
			type:"POST",
		url:"./php/question.php",
		success:function(response){
			console.log(response);
			var q=JSON.parse(response);var k=0;
			for(var i=0;i<=30;i++){
				$('#test').append('<p>'+q[i][0]+'</p>');
				//$('#test').append('<form  id="'+i+'">');
				for(var j=1;j<5;j++){

					$('#test').append('<input type="radio" name="q'+k+'" id="'+i+'" value="'+j+'">'+q[i][j]+'</p>');
					
				}
				k++;

			}
			
		}
	})
		
	},
	timecal:function(){
		var h=this;
		for(var i=0;i<10;i++){
		setTimeout(function(){console.log(h.time=h.time-1); 
		if (h.time == 0) {
			h.sub();
		}   
                },60000+(60000*i));
	}
	},
	sub:function(){
		
		
		var userchoice=[];var k=0;
		//console.log($('input[type="radio"][name="q0"]:checked').val());
		for(var i=0;i<30;i++){
			var x="q"+k;console.log(x);
			userchoice[i]=$("input[type='radio'][name='"+x+"']:checked").val();
			k++;
	}
	console.log(ans);var count=0;
	for(var i=0;i<30;i++){
		if(ans[i]==userchoice[i]){
			count++;
		}
	}
	console.log(count);
	$.ajax({
		type:"POST",
		url:"./php/mark.php",
		data:{
			mark:count
		},
		success:function(response){
			if(JSON.parse(response)=="success"){
				alert("Your score is "+ count);
				window.location="signin.html";
			}
		}
	});

	}



}


})
app.checksignin();
app.addquestion();
app.checkattend();
app.timecal();