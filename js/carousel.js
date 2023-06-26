var slidePage = 1;
showSlides(slidePage);

// Next/Previous
function slide_dir(n) {
	showSlides(slidePage += n);
}

// Dots
function presentSlider(n) {
	showSlides(slidePage = n);
}

function showSlides(n) {
	var i;
	var slide = document.getElementsByClassName("slides");
	var dot = document.getElementsByClassName("dots");
	if (n > slide.length) {
		slidePage = 1;
	}
	if (n < 1) {
		slidePage = slide.length;
	}
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(" active", "");
	}
	slide[slidePage - 1].style.display = "block";
	dot[slidePage - 1].className += " active";
}