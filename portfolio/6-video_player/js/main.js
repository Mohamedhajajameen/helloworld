var video	= document.getElementById('video'),
	play	= document.getElementById('button-play'),
	pause	= document.getElementById('button-pause'),
	volup	= document.getElementById('volume-up'),
	voldown	= document.getElementById('volume-down'),
	mute	= document.getElementById('mute'),
	bar=document.getElementById('bar');
	
play.addEventListener('click',function playPause(){
	pause.style.display='inline-block';
	play.style.display='none';
	video.play();
});
pause.addEventListener('click', function pausePlay(){
	pause.style.display='none';
	play.style.display='inline-block';
	video.pause();	
});
var x=0;	
volup.addEventListener('click', function volumeup(){
	
	if(x<=0.9)
	{
		x=x+0.1;
		video.volume=x;
	}
});
var y=1;
voldown.addEventListener('click', function volumedown(){
	if(y>(0.1))
	{
		y=y-0.1;
		video.volume=y;
	}
});
mute.addEventListener('click', function volumeoff(){
	video.volume=0;
});
var seekslider=document.getElementById('seekslider');

var curtimetext=document.getElementById('curtimetext');
var durtimetext=document.getElementById('durtimetext');
video.duration=durtimetext;
seekslider.addEventListener("change",vidSeek,false);
function vidSeek(){
	var seekto = video.duration * (seekslider.value / 100);
	video.currentTime = seekto;
}
video.addEventListener('timeupdate', function seektimeupdate(){
	var nt = video.currentTime * (100 / video.duration);
	seekslider.value = nt;
	var curmins = Math.floor(video.currentTime / 60);
	var cursecs = Math.floor(video.currentTime - curmins * 60);
	var durmins = Math.floor(video.duration / 60);
	var dursecs = Math.floor(video.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
});
video.addEventListener('ended', function goback(){
	pause.style.display="none";
	play.style.display="inline-block";
	video.currentTime=0;
	seekto =video.currentTime;
});
console.log("uthra");