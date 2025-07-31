// brute force

const getAreaWithMostWater = (arr) => {
	let maxArea = 0;
	for (let p1 = 0; p1 < arr.length; p1++) {
		for (let p2 = p1 + 1; p2 < arr.length; p2++) {
			const height = Math.min(arr[p1], arr[p2]);
			const width = (p2 - p1);
			const area = width * height;
			maxArea = Math.max(area, maxArea);
		}
	}
	return maxArea;
};

const areaWithMostWater = getAreaWithMostWater([7, 1, 2, 3, 9]); 

console.log(areaWithMostWater);



// shifting pointers

const getAreaWithMostWaterOpt = (arr) => {
	let maxArea = 0;
	let p1 = 0;
	let p2 = arr.length - 1;
		
	while (p2 - p1) {
		const objHeight = Math.min(arr[p1], arr[p2]);
		const objWidth = (p2 - p1);
		const area = objWidth * objHeight;
		maxArea = Math.max(area, maxArea);
		if (arr[p1] <= arr[p2]) {
			p1++;
		} else if (arr[p2] < arr[p1]) {
			p2--;
		}
	}	

	return maxArea;
};

const areaWithMostWaterOpt = getAreaWithMostWaterOpt([1,8,6,2,5,4,8,3,7]); 

console.log(areaWithMostWaterOpt);