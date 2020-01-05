function isIsogram (str) {
	str = str.toLowerCase();

	for (first = 0; first < str.length - 1; first++) {
		for (second = first + 1; second < str.length; second++) {
			if (str[first] === str[second]) {
				return false;
			}
		}
	}

	return true;
}
