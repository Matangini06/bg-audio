
	window.addEventListener('click', function () {
    
    var audio = document.getElementById("Any name");
    audio.play();
})



var audio = document.getElementById("Any name");
var playPauseBTN = document.getElementById("playPauseBTN");
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "pause &#9208;";
	}
	else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "play &#9658;";
	}
}
