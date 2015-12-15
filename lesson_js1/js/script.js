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

	console.log('Число ' + x + ' в ' + n + ' степени =', powResult)
