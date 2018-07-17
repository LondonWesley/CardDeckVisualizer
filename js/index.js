

window.onload = function(){
    //initial variables
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    var winWidth = canvas.width;
    var winHeight = canvas.height;

    var file = document.getElementById("musicfile");
    var audio = document.getElementById("audio");


    ctx.fillStyle = "#5dd55d"; // green
    ctx.fillRect(0, 0, winWidth, winHeight);

    file.onchange = function(){
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
    }
}
