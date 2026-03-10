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



// two pointer

const getTrappedWaterOp = (arr) => {
	let totalWater = 0;
	let p1 = 0;
	let p2 = arr.length - 1;
	let maxL = 0;
	let maxR = 0;
	
	while (p2 - p1) {
		if (arr[p1] <= arr[p2]) {
			if (arr[p1] < maxL) {
				totalWater += (maxL - arr[p1]);
			} else {
				maxL = arr[p1];
			}
			p1++;
		} else if (arr[p2] < arr[p1]) {
			if (arr[p2] < maxR) {
				totalWater += (maxR - arr[p2]);
			} else {
				maxR = arr[p2];
			}
			p2--;
		}
	}

	return totalWater;
};

const testCaseOp = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trappedWaterOp = getTrappedWaterOp(testCaseOp);

console.log(trappedWaterOp);