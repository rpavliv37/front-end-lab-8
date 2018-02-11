do {
    var play = confirm('Do you want to play a game');
    if (play) {
        var range = 6,
            totalPrize = 0,
            maxPossiblePrize = 10,
            currentPossiblePrize = 10,
            attemptsUsed = 0,
            attemptsLeft = 3;
            nextRage = true,
            luckyNumber = Math.floor(Math.random() * range);

        while (attemptsUsed < 3 && nextRage && play) {
            var userNumber = prompt(`Enter a number from 0 to ${range - 1}\nAttempts left: ${attemptsLeft}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${currentPossiblePrize}$`);

            if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber) && Number(userNumber) === luckyNumber) {
                totalPrize += currentPossiblePrize;
                attemptsUsed = 0;
                attemptsLeft = 3;
                range = range * 2 - 1;
                maxPossiblePrize *= 3;
                currentPossiblePrize = maxPossiblePrize;
                luckyNumber = Math.floor(Math.random() * range);
                nextRage = confirm('Do you want to continue a game?');
            } else {
                attemptsLeft--;
                attemptsUsed++;
                currentPossiblePrize = Math.floor(maxPossiblePrize / (attemptsUsed * 2));
            }
        }
        console.log(`Thank you for a game. Your prize is ${totalPrize}`);
    }
} while (play);

console.log('You did not become a millionaire');