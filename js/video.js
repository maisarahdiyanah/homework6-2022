var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });



document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play()
	var vol = document.getElementById('slider').value
	document.getElementById('volume').innerHTML = vol + '%'
 });

 document.getElementById("mute").addEventListener("click" , function(){
	console.log("The value of mute is " + video.muted)
	//video.muted = true
	if (video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	}
	
	
 });

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause video")
	video.pause()
});


document.querySelector("#slider").addEventListener("click", function(){
	var vol = document.getElementById('slider').value
	document.getElementById('volume').innerHTML = vol + '%'

});

document.querySelector('#slower').addEventListener("click", function(){
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= .95
	console.log("New speed is " + video.playbackRate)


});

document.querySelector('#faster').addEventListener("click", function(){
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate /= .95
	console.log("New speed is " + video.playbackRate)


});

document.querySelector('#skip').addEventListener("click", function(){
	video.currentTime = video.currentTime + 15
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.pause();
	}

	
	console.log("Current location is " + video.currentTime)
});

document.getElementById("vintage").addEventListener("click" , function(){
	//document.innerHTML.addClass("oldSchool")
	video.classList.add("oldSchool")
});
 
document.getElementById("orig").addEventListener("click" , function(){
	//document.innerHTML.addClass("oldSchool")
	video.classList.remove("oldSchool")
});
  