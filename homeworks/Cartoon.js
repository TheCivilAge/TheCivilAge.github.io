var c = document.getElementById("cartoon");
var ctx = c.getContext("2d");

//oshawatt 
//head
ctx.beginPath();
ctx.arc(225, 300, 50, 0, 2 * Math.PI);
ctx.stroke();
//ears
ctx.beginPath();
ctx.moveTo(175,290);
ctx.lineTo(180,260);
ctx.lineTo(200,255);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(275,295);
ctx.lineTo(280,275);
ctx.lineTo(260,265);
ctx.stroke();
//body
ctx.beginPath();
ctx.ellipse(220,380,45,50,Math.PI,3*Math.PI/4, 2.3* Math.PI);
ctx.stroke();
//feet
ctx.beginPath();
ctx.moveTo(195,425);
ctx.lineTo(165,395);
ctx.lineTo(175,390);
ctx.lineTo(195,425);
ctx.fillstyle="blue";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(195,425);
ctx.lineTo(165,395);
ctx.lineTo(175,390);
ctx.lineTo(195,425);
ctx.fillStyle="blue";
ctx.fill();
ctx.stroke();

//tail

//hands

//pokemon box
ctx.beginPath();
ctx.rect(0,0,400,150);
ctx.rect(50,100,300,20);
ctx.stroke();

ctx.beginPath();
ctx.rect(400,450,400,150);
ctx.rect(450,550,300,20);
ctx.fillStyle="green";
ctx.fillRect(450,550,275,20);
ctx.stroke();
