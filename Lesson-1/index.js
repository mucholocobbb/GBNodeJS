const colors = require('colors');

let args = process.argv.slice(2)
let [firstNum, secNum] = args
console.log(colors.gray(`Простые числа в диапазоне от ${colors.blue(firstNum)} до ${colors.blue(secNum)} `));
console.log(colors.white('--------------------------'));
let arrNum = []
for (let i = firstNum; i <= secNum; i++) {
    let isEasy = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isEasy = false
        }
    }
    if (isEasy == true) {
        arrNum.push(i)
    }
}

if (isNaN(firstNum) || isNaN(secNum)) {
    console.error(colors.red('Необходимо ввести числа!'))
} else if (arrNum.length == 0) {
    console.log(colors.red('В указаном диапазоне нет простых чисел!'));
} else {
    let color = 'green'
    for (let i = 0; i < arrNum.length; i++) {
        if (color === 'green') {
            console.log(colors.yellow(arrNum[i]));
            color = 'yellow'
        } else if (color === 'yellow') {
            console.log(colors.red(arrNum[i]));
            color = 'red'
        } else if (color === 'red') {
            console.log(colors.green(arrNum[i]));
            color = 'green'
        }
    }
}


console.log(colors.white('--------------------------'));