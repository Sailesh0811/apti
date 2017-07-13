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
})


var app = new Vue({
  el: '#signUp',
  data: {
    name: '',
    password: '',
    regno: '',
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
    $.ajax ({
         type: "POST",
      url: "./php/check.php",
      data:{type:"regno",value:this.regno},
      success:function(response){
        if(response=="error"){
          alert('regno already exists');
        }
        else{
        console.log(response);
        h.name=JSON.parse(response);
        console.log(h.name);
        toast.openToast("Welcome "+h.name);
      }
    }
    });
   
    this.error='false'
    console.log(h.name)

  },
  checkreg1: function () {
    var h=this;
     var pattern=new RegExp(/[0-9]{9}/);
   if (!pattern.test(this.regno2)) {        
      console.log('error number');//add required error class
       this.error='true'
    }
    $.ajax ({
         type: "POST",
      url: "./php/check.php",
      data:{type:"regno",value:this.regno2},
      success:function(response){
        if(response=="error"){
          alert('regno already exists');
        }
        else{
        console.log(response);
        h.name2=JSON.parse(response);
        console.log(h.name2);
        toast.openToast("Welcome "+h.name2);
      }
    }
    });
   
    this.error='false'
    console.log(h.name)

  },
  sub: function () {
      
    
   var reg=this.regno;
     
    $.ajax({
      type: "POST",
      url: "./php/signup.php",
      data:{name:this.name,regno:this.regno,regno2:this.regno2,name2:this.name2},
      success:function(response){
        if(JSON.parse(response)=="error"){
          alert("Regno already registered");
        }
        else{
          localStorage.setItem('regno',reg);
          toast.openToast('Your team id is '+ response);
          window.location = './signin.html';
        }
      }
    });
     }
   
  
}
})
