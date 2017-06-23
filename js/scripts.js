// scripts.js
//zdeklaracja zmiennych
var pierwsza = 2
var druga = 4

//deklaracja funkcji z dwoma parametrami
function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)){
		return 'Nieprawidłowe dane';
	} else {
		return a*h/2;
	}
}
var result = getTriangleArea(pierwsza, druga);
console.log(result);

var triangleArea1 = getTriangleArea(10, 15);
var triangleArea2 = getTriangleArea(4, 100);
var triangleArea3 = getTriangleArea(-10, 20);

function getTriangleArea1(a, h) {
	if ((a <= 0) || (h <= 0)){
		return 'zmienne muszą być dodatnie!';
	} else {
		return 0.5*a*h;
	}
}
var result = getTriangleArea1(10, 15);
console.log(result);

function getTriangleArea2(a, h) {
	if ((a <= 0) || (h <= 0)){
		return 'zmienne muszą być dodatnie!';
	} else {
		return 0.5*a*h;
	}
}
var result = getTriangleArea2(4, 100);
console.log(result);

function getTriangleArea3(a, h) {
	if ((a <= 0) || (h <= 0)){
		return 'zmienne muszą być dodatnie!';
	} else {
		return 0.5*a*h;
	}
}
var result = getTriangleArea3(-10, 20);
console.log(result);