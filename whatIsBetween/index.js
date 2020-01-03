function between (a, b) {
	let arr = [];
	for (let i = a; i <= b; i++) {
		arr.push(i);
	}
	return arr;
}

// describe("Basic tests", () => {
//   it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
//   it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
// });
