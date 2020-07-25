function getCount(str) {
	const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
	var vowelsCount = 0;
	for (let letter of str.toLowerCase()) {
		if (vowels.includes(letter)) {
			vowelsCount++;
		}
	}
	return vowelsCount;
}

console.log(getCount('abracadabra'), 5);
