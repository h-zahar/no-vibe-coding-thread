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