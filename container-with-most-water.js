// brute force

const getAreaWithMostWater = (arr) => {
	const listOfAreas = [];
	for (let i = 0; i < arr.length; i++) {
		let p1 = i;
		for (let j = i + 1; j < arr.length; j++) {
			let p2 = j;
			let area = Math.min(arr[p1], arr[p2]) * (p2 - p1);
			listOfAreas.push(area);
		}
	}
	return Math.max(...listOfAreas);
};

const areaWithMostWater = getAreaWithMostWater([1, 8, 3, 5, 9]); 

console.log(areaWithMostWater);