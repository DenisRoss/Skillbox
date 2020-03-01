function game() {
    do {
        let generatedNumber = generateNumber(1, 1000);

        while (true) {
            let inputedNumber = getNumber();

            if (inputedNumber == null)
                return alert("До свидания!");

            if (inputedNumber == generatedNumber) {
                alert("Правильно!");
                break;
            }

            inputedNumber > generatedNumber
                ? alert("Меньше!")
                : alert("Больше!");
        }
    } while (confirm("Сыграем еще раз?"));
}

function getNumber() {
    let number = prompt('Угадай число от 1 до 1000.')

    while (true) {
        if (number === null)
            return null;

        number = parseInt(number, 10);

        if (!isNaN(number))
            break;

        number = prompt('Введи число!')
    }
    return number;
}

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

game();