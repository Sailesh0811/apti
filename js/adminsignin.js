
var app = new Vue({
  el: '#signUp',
  data: {
    name: '',
    password: '',
    regno: '',
    error:'true'
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
    
  },
  sub: function () {
      
    if (this.password.length <8) {        
      alert('minimum 8 char password');//add required error class
       this.error='true'
    }
    else{
     
    $.ajax({
      type: "POST",
      url: "./php/adminsignin.php",
      data:{name:this.name,regno:this.regno,password:this.password},
      success:function(response){
        console.log(response);
        if(JSON.parse(response)=="error"){
          alert("Invalid details");
        }
        else{
          //toast.openToast('Logged in');
          window.location='./php/admin.php';
        }
      }
    });
     }
   }
  
}
})
