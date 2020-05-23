function getSum (a, b) {
	if (a <= b) {
		while (a < b) {
			let sum = a + 1;
			return sum;
		}
	}
}
console.log(getSum(0, 2));
console.log(getSum(0, 1));
