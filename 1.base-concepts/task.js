"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c; // Вычисление дискриминанта

	if (discriminant < 0) {
		// Корней нет
		return arr;
	} else if (discriminant === 0) {
		// Один корень
		let root = -b / (2 * a);
		arr.push(root);
	} else {
		// Два корня
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
		arr.sort((a, b) => b - a); // Сортировка в порядке убывания
	}

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Преобразование процентной ставки из годовой в месячную
	let monthlyRate = percent / 100 / 12;

	// Тело кредита
	let loanBody = amount - contribution;

	if (loanBody <= 0) {
		return 0;
	}

	// Расчет ежемесячного платежа
	let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

	// Общая сумма выплат
	let totalPayment = monthlyPayment * countMonths;

	// Возвращаем округленный результат
	return Number(totalPayment.toFixed(2));
}