
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
 var counter = 0;
  button.onclick = function(){
      
      //make a request to the counter end points
      
      // capture the response and storw it in a variable
      
      //Render the variable in correct span
      counter =counter+ 1;
      var span= document.getElementById ("count");
      span.innerHTML= counter.toString();
      
  };
 
