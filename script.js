var input = document.querySelectorAll("input");
var css = document.querySelector("h3");
var body = document.querySelector("body");

function bodyColorChange() {
	body.style.background = "linear-gradient(to right, " + 
	input[0].value + "," + input[1].value + ")";
	css.textContent = body.style.background + ";";
}

input[0].addEventListener("input", bodyColorChange);

input[1].addEventListener("input", bodyColorChange);


