// brute-force

const getLongestNonRepeatedSubstring = (string) => {
	let longest = 0;
	const strArr = string.split('');
	for (let i = 0; i < strArr.length; i++) {
		const memory = {};
		let count = 0;
		for (let j = i; j < strArr.length; j++) {
			if (memory?.[strArr[j]]) {
				if (count > longest) {
					longest = count;
				}
				break;
			} else {
				memory[strArr[j]] = 1;
				count++;
			}
		}
	}
	return longest;
};

const longestStrCount = getLongestNonRepeatedSubstring('abcbdca');

console.log(longestStrCount);