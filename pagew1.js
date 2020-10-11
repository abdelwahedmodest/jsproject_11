var mycanvas = document.querySelector("canvas");
var   ctx = mycanvas.getContext("2d");
var img = new Image();
var  thev = document.querySelector("video");
var   theau = document.querySelector("audio");


//theau.play();
if(thev.muted===false){

thev.muted = "true" ;

}
var  mytext = "download  jquery fileresoudre  socketio problemdownload  bootstrap  filedownload  angular  and  set  its  idedownload  node js  and  express download  webrtcmake  video  in the  webpageadd  canvas   to  make more text dessus";
var mytext2 = mytext.split(" ");
//console.log(mytext2);
for(var i=0 ; i<mytext2.length ; i++){
       ctx.fillStyle = "white" ;
       ctx.fillText(mytext2[i],20,5*i);
}
/*mytext2.forEach(sym=>{

       ctx.fillStyle = "white" ;
       ctx.fillText(sym,20,5*i);


})*/

ctx.fillStyle = "black";
ctx.fillRect(10,14,200,10);
img.src = "testimage.jpg" ;

img.onload = function(){
    ctx.drawImage(img,50,50,100,100);
}