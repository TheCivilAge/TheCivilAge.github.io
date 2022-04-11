var c = document.getElementById("cartoon");
var ctx = c.getContext("2d");

//rugs or ground
ctx.fillStyle="tan";
ctx.fillRect(0,200,800,400);
ctx.fillStyle="lightgreen";
ctx.fillRect(0,0,800,200);

//house
ctx.fillStyle="brown";
ctx.fillRect(300,0,300,160);
ctx.fillStyle="tan";
ctx.fillRect(500,50,80,110);
ctx.fillStyle="black";
ctx.fillRect(560,100,10,10);

//oshawatt 
//head
ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(225, 300, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
//ears
ctx.beginPath();
ctx.moveTo(175,290);
ctx.lineTo(180,260);
ctx.lineTo(200,255);
ctx.fillStyle="blue";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(275,295);
ctx.lineTo(280,275);
ctx.lineTo(260,265);
ctx.fillStyle="blue";
ctx.fill();
ctx.stroke();
//body
ctx.beginPath();
ctx.ellipse(220,380,45,50,Math.PI,3*Math.PI/4, 2.3* Math.PI);
ctx.fillStyle="lightblue";
ctx.fill()
ctx.stroke();
//feet
ctx.beginPath();
ctx.moveTo(195,425);
ctx.lineTo(165,395);
ctx.lineTo(175,390);
ctx.lineTo(195,425);
ctx.fillStyle="blue";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(195,425);
ctx.lineTo(165,395);
ctx.lineTo(175,390);
ctx.fillStyle="blue";
ctx.fill();
ctx.stroke();

//tail
ctx.beginPath();
ctx.moveTo(210,415);
ctx.lineTo(130,410);
ctx.lineTo(150,435);
ctx.lineTo(220,420);
ctx.fillStyle="blue";
ctx.fill();
ctx.stroke();

//hands


//pokemon box
ctx.beginPath();
ctx.fillStyle="white";
ctx.rect(0,0,400,150);
ctx.fill();
ctx.fillStyle="black";
ctx.font="36px Arial";
ctx.textAlign="center";
ctx.fillText("Rival",200,75)
ctx.rect(50,100,300,20);
ctx.font="16px Arial";
ctx.fillText("FNT",375,115)
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.rect(400,450,400,150);
ctx.fill();
ctx.fillStyle="black";
ctx.font="36px Arial";
ctx.textAlign="center";
ctx.fillText("Oshawott",600,525);
ctx.rect(450,550,300,20);
ctx.fillStyle="green";
ctx.fillRect(450,550,250,20);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="white";
ctx.rect(0,500,400,100);
ctx.fill();
ctx.fillStyle="black";
ctx.font="16px Arial";
ctx.textAlign="center";
ctx.fillText("Caption:",200,550)
ctx.fillText(" A pokemon battle occuring in the neighborhood ",200,575)
ctx.stroke();

//tv + tv stand
// ctx.fillStyle="black";
// ctx.fillRect(299,300,202,50);
// ctx.fillStyle="tan";
// ctx.fillRect(300,300,200,50);
// ctx.fillStyle="black";
// ctx.fillRect(375,295,50,5);
// ctx.fillRect(325,180,150,100);
// ctx.fillRect(395,280,10,15);
// ctx.fillStyle="#a9a9a9"; //gray
// ctx.fillRect(330,185,140,85);



//fence
for(let i=0;i<50;i++){
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.fillRect(0+(30*i),180,20,50);
    ctx.moveTo(0+(30*i),180);
    ctx.lineTo(10+(30*i),170);
    ctx.lineTo(20+(30*i),180);
    ctx.fillRect(20+(30*i),190,10,20);
    ctx.fill();
    ctx.stroke();
}

//sun
ctx.fillStyle="yellow";
ctx.beginPath();
ctx.arc(750, 0, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();



