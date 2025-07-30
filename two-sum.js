const getTwoSum = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		let p1 = arr[i];
		let newTarget = target - p1;
		for (let j = i + 1; j < arr.length; j++) {
			let p2 = arr[j]
			if (p2 === newTarget) {
				return [i, j];
			}
		}
	}
}

const indexes = getTwoSum([1, 3, 7, 9, 2], 11);

console.log(indexes);