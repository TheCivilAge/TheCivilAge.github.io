var canvas =document.getElementById("canvas");
var ctx =canvas.getContext("2d");
ctx.moveTo(50, 50);
ctx.lineTo(50, 500);
ctx.lineTo(600,500);
ctx.stroke();

var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
	{name:"banana", quantity:15, color:"yellow"},
	{name:"kiwi", quantity:3, color:"green"},
	{name:"blueberry", quantity:5, color:"blue"},
	{name:"grapes", quantity:8, color:"purple"}
];
ctx.textAlign="center";
for(let i=0;i<fruit.length;i++){
    ctx.fillStyle=fruit[i].color;
    ctx.fillRect((50+i*80),500,80,(fruit[i].quantity*-20));

    ctx.fillStyle="black";
    ctx.fillText(fruit[i].name,(90+i*80),510);
    ctx.fillText(fruit[i].quantity,(90+i*80),480);
}