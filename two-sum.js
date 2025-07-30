// brute force

const getTwoSum = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		let p1 = i;
		let newTarget = target - arr[p1];
		for (let j = i + 1; j < arr.length; j++) {
			let p2 = j
			if (arr[p2] === newTarget) {
				return [p1, p2];
			}
		}
	}
}

const indexes = getTwoSum([1, 3, 7, 9, 2], 11);

console.log(indexes);