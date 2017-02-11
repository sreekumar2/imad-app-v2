
//move the image
var img = document.getElementById("sree");
var marginLeft = 0;
function moveRight () {
 marginLeft = marginLeft + 1 ;
 img.style.marginLeft = marginLeft+ 'px' ;
    
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    };
    
    //counter code
 var button = document.getElementById("counter");
 
  button.onclick = function(){
      
      //create a request object
      var request = new XMLHttpRequest();
      
      
      // capture the response and storw it in a variable
      request.onreadystatechange = function (){
          if (request.readyState === XMLHttpRequest.DONE){
              //Take some ACTION
              if (request.status === 200) {
                  var counter = request.responseText;
                   var span= document.getElementById("count");
                  span.innerHTML= counter.toString();   
                  
              }
          }
          //not done yet
      };
      
      //make tghe request
      request.open('GET' , 'http://sreekumar2.imad.hasura-app.io/counter',true);
      request.send(null);
     
      
  };
  // S ubmit name
  var nameInput = document.getElementById("name");
  var name = nameInput.value;
  var submit = document.getElementById('submit_btn');
  submit.onclick = function(){
      //make a request to the seerver and send the name'
      //capture a list of names andf render it aas a lst
      var names = ['name1','name2','name3','name4'];
      var list ='';
      for (var i=0; i < names.length; i++) {
         list += '<li>' + names[i] + '</li>';
          
      }
      var ul = document.getElementById('namelist');
      ul.innerHTML = list;
  };
 
