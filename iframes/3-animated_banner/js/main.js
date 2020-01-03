var inner = document.getElementById("inner"),
	bg1 = document.getElementById('wrapper-1'),
	bg2 = document.getElementById('wrapper-2'),
	bg3 = document.getElementById('wrapper-3'),
	bg4 = document.getElementById('wrapper-4'),
	bg5 = document.getElementById('wrapper-5'),
	last = document.getElementById('wrapper-6'),
	lastcontent = document.getElementById('wrapper-content'),
	bg1class = bg1.className,
	bg2class = bg2.className,
	bg3class = bg3.className,
	bg4class = bg4.className,
	bg5class = bg5.className,
	innerclass = inner.className,
	contentclass = lastcontent.className;

function initAnimation() {
	setTimeout(function() {
		inner.className = innerclass + " content-move";
	}, 0);

	setTimeout(function() {
		bg1.className = bg1class + " slide-move ";
	}, 1500);

	setTimeout(function() {
		bg1.className = bg1class + " hide";
	}, 2000);

	setTimeout(function() {
		bg2.className = bg2class + " slide-move ";
	}, 3500);

	setTimeout(function() {
		bg2.className = bg2class + " hide ";
	}, 4000);

	setTimeout(function() {
		bg3.className = bg3class + " slide-move";
	}, 5500);

	setTimeout(function() {
		bg3.className = bg3class + " hide";
	}, 6000);

	setTimeout(function() {
		bg4.className = bg4class + " slide-move";
	}, 7500);

	setTimeout(function() {
		bg4.className = bg4class + " hide";
	}, 8000);

	setTimeout(function() {
		inner.className = innerclass + " zoomin";
	}, 9500);

	setTimeout(function() {
		inner.className = innerclass + " hide";
	}, 9800);

	setTimeout(function() {
		bg5.className = bg5class + " slide-move";
	}, 10500);

	setTimeout(function() {
		bg5.className = bg5class + " hide";
	}, 11000);

	setTimeout(function() {
		lastcontent.className = contentclass + " zoomcontent";
	}, 12000);

	setTimeout(function() {
		lastcontent.className = contentclass + " show";
	}, 12900);

	setTimeout(function() {
		remove();
	}, 16000);
}

function remove() {
	bg1.classList.remove("hide");
	bg2.classList.remove("hide");
	bg3.classList.remove("hide");
	bg4.classList.remove("hide");
	bg5.classList.remove("hide");
	inner.classList.remove("hide");
	lastcontent.classList.remove("show");
	initAnimation();
}

initAnimation();