var x = +prompt("Число?", "");
var n = +prompt("Степень?", "");

function pow(x, n) {
	var result = 1;

	for (var i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}
var powResult = pow(x, n);

if (n < 0) {
	alert('Степень ' + n +
		'не поддерживается, введите целую степень, большую 0');
} else {
	console.log('Число' + x + ' в ' + n + ' степени =', powResult)
}
