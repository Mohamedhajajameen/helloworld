var togglebar=document.getElementById('toggle-menu'),
	toggletext=document.getElementById('toggle-content'),
	toggleclose=document.getElementById('toggle-close'),
	skill1=document.getElementById('skill1-score-1'),
	skill2=document.getElementById('skill2-score-2'),
	skill3=document.getElementById('skill3-score-3'),
	skill4=document.getElementById('skill4-score-4'),
	skill5=document.getElementById('skill5-score-5'),
	skill6=document.getElementById('skill6-score-6'),
	skill7=document.getElementById('skill7-score-7'),
	skill8=document.getElementById('skill8-score-8'),
	togglelist1=document.getElementById('btn-click1')
	togglelist2=document.getElementById('btn-click2');
	togglelist3=document.getElementById('btn-click3');
	togglelist4=document.getElementById('btn-click4');
	section3=document.getElementById('section-3');


togglebar.addEventListener('click', function show(){
	toggletext.style.display='inline-block';
	toggleclose.style.display='inline-block';
	togglebar.style.display='none';
});
toggleclose.addEventListener('click', function hide(){
	toggleclose.style.display='none';
	togglebar.style.display='inline-block';
	toggletext.style.display='none';
});
togglelist1.addEventListener('click', function(){
	toggletext.style.display='none';
	toggleclose.style.display='none';
	togglebar.style.display='inline-block';
});
togglelist2.addEventListener('click', function(){
	toggletext.style.display='none';
	toggleclose.style.display='none';
	togglebar.style.display='inline-block';
});
togglelist3.addEventListener('click', function(){
	toggletext.style.display='none';
	toggleclose.style.display='none';
	togglebar.style.display='inline-block';
});
togglelist4.addEventListener('click', function(){
	toggletext.style.display='none';
	toggleclose.style.display='none';
	togglebar.style.display='inline-block';
});
function animation(){
	setTimeout(function(){
		skill1.classList.add('leftmove1');
		skill2.classList.add('leftmove1');
		skill3.classList.add('leftmove1');
		skill4.classList.add('leftmove1');
		skill5.classList.add('leftmove1');
		skill6.classList.add('leftmove1');
		skill7.classList.add('leftmove1');
		skill8.classList.add('leftmove1');
	},500);
}
animation();
