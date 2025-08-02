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

const isEqualStrs = getIsEqualStrs('ab##', 'c#d#');

console.log(isEqualStrs);



// optimal - space complexity-wise

const getIsEqualStrsOp = (string1, string2) => {
	const getTypedOutFormatOp = (rawFormStr) => {
		const strArr = rawFormStr.split('');
		let p = strArr.length - 1;
		let toRemove = 0;
		
		while (p >= 0) {
			if (strArr[p] !== '#') {
				if (toRemove) {
					strArr.splice(p, 1);
					toRemove--;
				}
			} else if (strArr[p] === '#') {
				toRemove++;
				strArr.splice(p, 1);
			}
			p--;	
		}		
		return strArr.join('');
	};
	const typedFormOpStr1 = getTypedOutFormatOp(string1);
	const typedFormOpStr2 = getTypedOutFormatOp(string2);
	
	return typedFormOpStr1 === typedFormOpStr2;
};

const isEqualStrsOp = getIsEqualStrsOp('ab##', 'c#d#');

console.log(isEqualStrsOp);
