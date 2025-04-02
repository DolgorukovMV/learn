let number = 7;

if (typeof number !== "number" || isNaN(number)) {
    console.log('Ошибка введено не число')
} else {
    if (number % 2 === 0) {
        console.log(`число ${number} четное`)
    }
    else {
        console.log(`число ${number} не четное`)
    }
}

console.log("------------")

for (let i =1; i <= 10; i++) {
    console.log(i)
}