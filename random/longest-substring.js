// brute-force

const getLongestNonRepeatedSubstring = (string) => {
	let longest = 0;
	const strArr = string.split('');
	for (let i = 0; i < strArr.length; i++) {
		const memory = {};
		let count = 0;
		for (let j = i; j < strArr.length; j++) {
			if (count > longest) {
           	longest = count;
           }
			if (memory?.[strArr[j]]) {
				break;
			} else {
				memory[strArr[j]] = 1;
				count++;
			}
		}
	}
	return longest;
};

const longestStrCount = getLongestNonRepeatedSubstring('abcabcbb');

console.log(longestStrCount);



// sliding window

const getLongestNonRepeatedSubstringSW = (string) => {
	if (string.length <= 1) {
		return string.length;
	}
	let longest = 0;
	const strArr = string.split('');
	const memory = {};
	memory[strArr[0]] = 0;
	let lW = 0;
	let rW = 1;

	while (rW <= strArr.length) {
		if (rW - lW > longest) {
			longest = rW - lW;
		}
		if (memory?.[strArr[rW]] !== undefined && memory?.[strArr[rW]] >= lW) {
			lW = memory[strArr[rW]] + 1;
		}
		memory[strArr[rW]] = rW;
		rW++;
	}

	return longest;
};

const longestStrCountSW = getLongestNonRepeatedSubstringSW('au');

console.log(longestStrCountSW);