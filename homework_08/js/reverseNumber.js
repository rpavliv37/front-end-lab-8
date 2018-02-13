function reverseNumber (n) {
	const reversed = n.toString().split('').reverse().join(''); 
	return reversed * Math.sign(n);
}