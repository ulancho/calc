/**
 * Простой калькулятор на Node.js, который использует calculator app that uses
 * встроенный интерфейс командной строки Readline.
 */

const operations = require('./operations.js');
const readline = require('readline');

// Используем readline для создания интерфейса
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js
Вы открыли калькулятор на Node.js! 
Версия: 1.0.0.
Использование: пользователь должен ввести два числа, а затем
выбрать, что с ними сделать.
`);

rl.question('Введите первое число: ', (x) => {
  rl.question('Введите второе число: ', (y) => {
    rl.question(`
Выберите одну из следующих операций:
[1] Сложение (+)
[2] Вычитание (-)
[3] Умножение (*)
[4] Деление (/)
Ваш выбор: `, (choice) => {
      if (!operations.validateNumbers(x, y)) {
        console.log('Можно вводить только числа! Пожалуйста, перезапустите программу.');
      } else {
        switch (choice) {
          case '1':
            console.log(`Сумма ${x} и ${y} равна ${operations.add(x, y)}.`);
            break;
          case '2':
            console.log(`Разность ${x} и ${y} равна ${operations.subtract(x, y)}.`);
            break;
          case '3':
            console.log(`Произведение ${x} и ${y} равно ${operations.multiply(x, y)}.`);
            break;
          case '4':
            console.log(`Частное ${x} и ${y} равно ${operations.divide(x, y)}.`);
            break;
          default:
            console.log('Пожалуйста, перезапустите программу и выберите число от 1 до 4.');
            break;
        }
      }
      rl.close();
    });
  });
});