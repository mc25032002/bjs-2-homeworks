function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	let avg = +(sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	arr.forEach(num => {
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	});
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	arr.forEach(num => {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	});
	return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}