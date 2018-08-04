//upload button
var filebutton = document.getElementById("musicfile");
var custombutton = document.getElementById("custom-upload");

//music selection modal
var musicmodal = document.getElementById("music-modal");
var musicselectionbtn = document.getElementById("musicselectionbtn");

//settings modal
var settingmodal = document.getElementById("settings-modal");
var settingbtn = document.getElementById("settingbtn");

musicselectionbtn.onclick = function(){
    musicmodal.style.display = "block";
}

settingbtn.onclick = function(){
    settingmodal.style.display = "block";
}


window.onclick = function(){
    if (event.target == musicmodal) {
       musicmodal.style.display = "none";
   }
   if (event.target == settingmodal) {
      settingmodal.style.display = "none";
  }
}



custombutton.addEventListener("click", function(){
    filebutton.click();
    musicmodal.style.display = "none";
})
