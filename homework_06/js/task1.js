var sides = [];
var typeOfTriangle;

for (var i = 1; i <= 3; i++) {
    sides.push(Number(prompt("enter " + i + " side", 1)));
}

var halfPerimeter = (sides[0] + sides[1] + sides[2]) / 2;
var square = Math.sqrt(halfPerimeter * (halfPerimeter - sides[0]) * (halfPerimeter - sides[1]) * (halfPerimeter - sides[2]));



if (sides.indexOf(NaN) != -1 || sides[0] <= 0 || sides[1] <= 1 || sides[2] <= 0 || square === 0 || isNaN(square)) {
    console.log('Incorrect data');
} else {
    if (sides[0] === Math.sqrt(sides[1] * sides[1] + sides[2] * sides[2]) || sides[1] === Math.sqrt(sides[0] * sides[0] + sides[2] * sides[2]) || sides[2] === Math.sqrt(sides[1] * sides[1] + sides[0] * sides[0])) {
        typeOfTriangle = 'right triangle';
    } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
        typeOfTriangle = 'equilateral triangle';
    } else if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) {
        typeOfTriangle = 'isosceles triangle';
    } else {
        typeOfTriangle = 'scalene triangle';
    }

    square = parseFloat(square.toFixed(2));
    console.log('Type of triangle is ' + typeOfTriangle + ' and square is ' + square);
}