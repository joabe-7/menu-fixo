const $navBar = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll',navFix,false);
function navFix(){
	if(window.pageYOffset > 200 && $navBar.classList.contains("nav-abs")){
		console.log('scroll');
		$navBar.classList.remove('nav-abs');
		$navBar.classList.add('nav-fix');
	}else if(window.pageYOffset < 200 && $navBar.classList.contains('nav-fix')){
		$navBar.classList.remove('nav-fix');
		$navBar.classList.add('nav-abs');
	}
}