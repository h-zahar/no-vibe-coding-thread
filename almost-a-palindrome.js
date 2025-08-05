// brute force solution

const isAlmostPalindrome = (string) => {
	const originalArr = string.replace(/[^a-zA-Z0-9]/g, '').split('');
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



// two pointers

const checkIfPalindrome = (strArr, lP, rP, lifeLine = 0) => {
	while (!(lP === rP || rP - lP === 1) && lifeLine <= 2){
		if (strArr[lP] !== strArr[rP]) {
			if (lifeLine === 0) {
				const firstCombo = [
  					...strArr.slice(0, lP),
  					...strArr.slice(lP + 1)
				];
				const secondCombo = [
  					...strArr.slice(0, rP),
  					...strArr.slice(rP + 1)
				];
				return { firstCombo, secondCombo, newLP: lP, newRP: rP };
			}
			return false;
		} else {
			lP++;
			rP--;
		}
	}
	return true;
};

const isAlmostPalindromeTP = (string) => {
	let lifeLine = 0;
	const strArr = string.replace(/[^a-zA-Z0-9]/g, '').split('');

	let lP = 0;
	let rP = strArr.length - 1;
	

	const checkPalindromeState = checkIfPalindrome([...strArr], lP, rP, lifeLine);

	if (checkPalindromeState === true) {
		return true;
	} else {
		const checkFirst = checkIfPalindrome([...checkPalindromeState?.firstCombo], checkPalindromeState?.newLP, checkPalindromeState?.newRP, 1);

		const checkSecond = checkIfPalindrome([...checkPalindromeState?.secondCombo], checkPalindromeState?.newLP, checkPalindromeState?.newRP, 1);

		if (checkFirst === true || checkSecond === true) {
			return true;
		} else {
			return false;
		}
	}
	

	return isFound;
};

const isValidTP = isAlmostPalindromeTP('race a car');

console.log(isValidTP);