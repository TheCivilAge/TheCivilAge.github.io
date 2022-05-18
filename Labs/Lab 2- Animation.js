var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = new Image();
image.src = "Sprite/Numbers 7x10.png";
console.log("hi");

image.addEventListener("load", () => {
    ctx.drawImage(image,0,0,7,10,canvas.width/2-50,canvas.height/2-50,100,100);

})
var refreshIntervalId = setInterval(5000);
let cycle=0;
function start(){
    var clearID =setInterval(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        if(cycle<=1){
            ctx.drawImage(image,0+7*cycle,0,7,10,canvas.width/2-50,canvas.height/2-50,100,100);
        }
        if(cycle<=9&&cycle>1){
            ctx.drawImage(image,8*cycle-2,0,8,10,canvas.width/2-50,canvas.height/2-50,100,100);
        }
        if(cycle<=9&&cycle>2){
            ctx.drawImage(image,7*cycle,0,8,10,canvas.width/2-50,canvas.height/2-50,100,100);
        }
        if(cycle==10){
            ctx.drawImage(image,7,0,7,10,canvas.width/2-50,canvas.height/2-50,100,100);
            ctx.drawImage(image,0,0,7,10,canvas.width/2+40,canvas.height/2-50,100,100);

        }
        if(cycle>=10){
            clearInterval(clearID);

        }
        cycle=cycle+1;
    },500);
}
