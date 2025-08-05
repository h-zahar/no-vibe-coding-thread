// brute force solution

const isAlmostPalindrome = (string) => {
	const originalArr = string.replace('/[^a-zA-Z0-9]/g', '').split('');
	let p = 0;
	let isFound = false;

	for (let p = 0; p < originalArr.length; p++) {
		const tempArr = [...originalArr];
		tempArr.splice(p, 1);
		const newArr = [...tempArr];
		const compareArr = [...newArr].reverse();
		if (newArr.join('') === compareArr.join('')) {
			isFound = true;
			break;
		}
	}

	return isFound;
};

const isValid = isAlmostPalindrome('race a car');

console.log(isValid);