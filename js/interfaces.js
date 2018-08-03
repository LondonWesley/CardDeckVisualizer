
var filebutton = document.getElementById("musicfile");
var custombutton = document.getElementById("custom-upload");

//music selection modal
var musicmodal = document.getElementById("music-modal");
var musicselectionbtn = document.getElementById("musicselectionbtn");



musicselectionbtn.onclick = function(){
    musicmodal.style.display = "block";
}


window.onclick = function(){
    if (event.target == musicmodal) {
       musicmodal.style.display = "none";
   }
}



custombutton.addEventListener("click", function(){
    filebutton.click();
    musicmodal.style.display = "none";
})
