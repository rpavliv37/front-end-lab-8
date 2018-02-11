var floors = Number(prompt("enter natural number from 1 to 20", 1));
var brick = '';
if (isNaN(floors) || floors % 1 != 0 || floors <= 0 || floors > 20) {
    console.error('Incorrect!');
} else {
    for (var i = 1; i <= floors; i++) {
        for (var k = 1; k <= (floors - i); k++) {
            brick = brick.concat('   ');
        }
        for (var j = 2; j <= i; j++) {
            brick = brick.concat('[~][~]');
        }
        brick = brick.concat('[~]\n');
    }
}

console.log(brick);