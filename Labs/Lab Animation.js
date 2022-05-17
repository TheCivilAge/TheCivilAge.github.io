var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillText("hi",10,10,10,10);
var myImage= new Image();
myImage.src="Sprite/Numbers 7x10.png";
ctx.drawImage(myImage,100,100);
