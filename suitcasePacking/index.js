function fit_in (a, b, m, n) {
	return (a + b <= m && a <= n && b <= n) || (a + b <= n && a <= m && b <= m);
}
