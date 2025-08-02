// brute force

const getIsEqualStrs = (string1, string2) => {
	const getTypedOutFormat = (rawFormStr) => {
		let typedStrArr = [];
		const strArr = rawFormStr.split('');
		for (let elem of strArr) {
			if (elem === '#') {
				typedStrArr.pop();
			} else {
				typedStrArr.push(elem);
			}
		}
		return typedStrArr.join('');
	};
	const typedFormStr1 = getTypedOutFormat(string1);
	const typedFormStr2 = getTypedOutFormat(string2);
	
	return typedFormStr1 === typedFormStr2;
};

const isEqualStrs = getIsEqualStrs('ab#z', 'az#z');

console.log(isEqualStrs);