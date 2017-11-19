window.onload = function () {
	document.getElementById('button').onclick = function (event) {
		doSomething();
	};
}

function doSomething() {
	document.getElementById('button').innerHTML = 'And you clicked me';
}
