// brute force

const getTrappedWater = (arr) => {
	let totalWater = 0;
	for (let i = 1; i < arr.length - 1; i++) {
		let maxL = 0;
		let maxR = 0;
		for (let j = i - 1; j >= 0; j--) {
			maxL = Math.max(maxL, arr[j]);
		}
		for (let j = i + 1; j < arr.length; j++) {
			maxR = Math.max(maxR, arr[j]);
		}

		const waterHeight = Math.min(maxL, maxR);

		totalWater += (Math.max(0, waterHeight - arr[i]));
	}

	return totalWater;
};

const testCase = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trappedWater = getTrappedWater(testCase);

console.log(trappedWater);