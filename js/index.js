

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


    ctx.fillStyle = "#4e9843";
    ctx.fillRect(0, 0, winWidth, winHeight);

    file.onchange = function(){
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();

        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 32;//256 original
        analyser.smoothingTimeConstant = 0.9;
        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);

        var dataArray = new Uint8Array(bufferLength);



        var barWidth = (winWidth / bufferLength) * 1;
        var barHeight;
        var x = 0;

        function update() {
          requestAnimationFrame(update);

          x = 0;

          analyser.getByteFrequencyData(dataArray);

          ctx.fillStyle = "#4e9843";
          ctx.fillRect(0, 0, winWidth, winHeight);
          for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            for(var c = 1; c < Math.floor(barHeight/19)+1; c++){
                var image = new Image();

                image.src = "img/suit1/" +c+ ".png";
                ctx.drawImage(image,x + 10, winHeight-300 - c*20);
            }
            x += barWidth ;
          }

        }

        audio.play();
        update();
      };

}
