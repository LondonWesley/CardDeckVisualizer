
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var WIDTH = canvas.width;
var HEIGHT = canvas.height;

window.onload = function(){
    //make the canvas that nice green
    ctx.fillStyle = "#5dd55d";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}
