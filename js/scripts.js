// scripts.js
//zdeklaracja zmiennych
var pierwsza = 2
var druga = 4

//deklaracja funkcji z dwoma parametrami
function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)){
		return('Nieprawidłowe dane')
	} else {
		return(a*h/2)
	}
}
var result = getTriangleArea (pierwsza, druga);
console.log(result);
