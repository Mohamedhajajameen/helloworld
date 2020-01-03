var wrapper1 = document.getElementById('wrapper-1');
var bgcolor = document.getElementById('bg-color');
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var text = document.getElementById('text');
var text1 = document.getElementById('text-1');
var text2 = document.getElementById('text-2');
var text3 = document.getElementById('text-3');
var text4 = document.getElementById('text-4');
var wrapper2 = document.getElementById('wrapper-2');
var value = document.getElementById('value');
var content = document.getElementById('content');
var callToAction = document.getElementById('call-to-action');
function animate() {
	setTimeout(function () {
		bgcolor.className += " topmove1";
	}, 500);
	setTimeout(function () {
		img1.className += " topmove2";
	}, 500);
	setTimeout(function () {
		text.className += " leftmove1";
	}, 1500);
	setTimeout(function () {
		text1.className += " rightmove1";
	}, 2000);
	setTimeout(function () {
		text2.className += " rightmove2";
	}, 2500);
	setTimeout(function () {
		text3.className += " rightmove3";
	}, 3000);
	setTimeout(function () {
		text4.className += " show";
	}, 3500);
	setTimeout(function () {
		bgcolor.className += " hide";
		img1.className += " hide";
		text.className += " hide";
		text1.className += " hide";
		text2.className += " hide";
		text3.className += " hide";
		text4.style.display = " none";
		wrapper1.className += " hide";
	}, 4500);
	setTimeout(function () {
		wrapper2.className += " zoomin"
	}, 4600);
	setTimeout(function () {
		img2.className += " topmove3"
	}, 5100);
	setTimeout(function () {
		value.className += " rightmove4";
	}, 5500);
	setTimeout(function () {
		content.className += " rightmove5";
	}, 5800);
	setTimeout(function () {
		callToAction.className += " rightmove6";
		callToAction.style.zIndex = "12";
	}, 6100);

	setTimeout(remove, 7400);

}
animate();

function remove() {
	bgcolor.classList.remove("topmove1");
	img1.classList.remove("topmove2");
	text.classList.remove("leftmove1");
	text1.classList.remove("rightmove1");
	text2.classList.remove("rightmove2");
	text3.classList.remove("rightmove3");
	text4.classList.remove("show");
	bgcolor.classList.remove("hide");
	img1.classList.remove("hide");
	text.classList.remove("hide");
	text1.classList.remove("hide");
	text2.classList.remove("hide");
	text3.classList.remove("hide");
	wrapper1.classList.remove('hide');
	text4.style.display = " block";
	wrapper2.classList.remove('zoomin');
	img2.classList.remove('topmove3');
	value.classList.remove('rightmove4');
	content.classList.remove('rightmove5');
	callToAction.classList.remove('rightmove6');

	animate();
}