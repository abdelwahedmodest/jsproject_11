var myv = document.querySelector("video");
var  thebtn = document.querySelector("#btn1");
var  thebtns = document.querySelector("#btn2");
var  bar = document.querySelector(".progress2");

thebtn.addEventListener("click",()=>{
     
    //var  dt = new Date();
    //myv.muted = "false" ;
    myv.play();
    myv.addEventListener("timeupdate",()=>{

              bar.style.width = ((myv.currentTime/myv.duration)*100)+ "%" ;
                  console.log(bar.style.width) ;
                  
     })
         //console.log(dt.getSeconds());
     //console.log(Math.floor(myv.duration));
     //console.log(dt.currentTime);
    //bar.style.width = (myv.duration-dt.getSeconds()) + "px" ;  

}) 
//var  thebtns = document.querySelector("#btn2");

thebtns.addEventListener("click",()=>{

     myv.pause();

})