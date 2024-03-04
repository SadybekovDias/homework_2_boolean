//Первое задание
// const Question = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?');
// const correctAnswer = '5';
// const correctAnswertwo = 'five';
// if (Question === correctAnswer) {
//     alert('Верно');
// } else if ( Question === correctAnswertwo) {
//     alert('Верно');
// } else {
//     alert('не верно');
// }

// ===================================
//Второе задание

// const age = prompt('Сколько вам лет?');
// if (age < 13) {
//     alert('Советуем посмотреть "Чебурашка"');
// } else if (age <= 17) {
//     alert('Советуем посмотреть Ковбой Бипоп');
// } else if (age < 100) {
//     alert('Советую посмотреть "Крестный отец"');
// } else {
//     alert('Вы ввели не правильный возраст');
// }

// ===================================
//Третье задание

// const drinks = prompt('Ваш любимый напиток?');

// switch (drinks) {
//     case 'beer':
//     case 'whisky':
//     case 'wine':
//         alert('Алкоголь вредит вашему здоровью :(');
//         break;
//     case 'tan':
//     case 'kumys':
//     case 'airan':    
//         alert('Любите кисломолочку?');
//         break;
//     case 'water':
//         alert('Молодцы');
//         break;    
//     default:
//         alert('Такого напитка нету');
//         break;
// }

// ===================================
//Четвертое задание

// let number = 10;
// if (number == 11) { // так как у нас в коде в переменной значение 10, должно было показать else, но у нас показывалось первое условие. что бы ее исправить нужно добавить еще один знак "=" что бы было сравнения. одна "=" означает что мы назначаем переменную.
//     alert('Number is 11!');
// } else {
//     alert('Number is 10!');
// }

// ===================================
//Пятое задание

// 1. (2 < 3) && (3 > 4) || true 

// Упрощение

// true && false || true
// false || true
// true

// ответ true

// 2. !true && (!true || 100 != 5 * 5)

// Упрощение

// false && (false || true)
// true && true
// false

// ответ false

// 3. ("123" == 123) || ((10 <= 10) && ('' === false))

// Упрощение

// true || (true && false)
// true || false
// true

// ответ true

// ===================================
//Шестое задание

// let isRaining = true;
// let isSunny = false;

// if (isRaining || isSunny) {
//     console.log('true');
// }

// ===================================
//Седьмое задание

// const numberAsString = '12';
// const isNumber = parseInt(numberAsString);

// console.log(10 + isNumber);

// ===================================
//Восьмое задание

// const age = 42;

// if (age >= 18) {
//     console.log(true);
// } else if (age <= 18) {
//     console.log(false);
// }

// ===================================
//Девятое задание

// const  isWeekend = true;
// const hasTimeOff = true;

// if (isWeekend && hasTimeOff) {
//     console.log('Исходные условия выполнены');
// } 

// ===================================
//Десятое задание

// const password = 'DiasSad123';
    
// if (password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password)) {
//     console.log('Пароль допустим');
// } else {
//     console.log('Пароль недопустим');
// }

// ===================================
//Десятое задание(2)

// const studentGrade = prompt('Оценка за экзамен');

// if (studentGrade >= 90) {
//     console.log('Отлично');
// } else if (studentGrade >=70 && studentGrade < 90 ) {
//     console.log('Хорошо!');
// } else {
//     console.log('Попробуйте еще раз!');
// }

// ===================================
//Одинадцатое задание

// const currentDate = new Date(Date.UTC(2024, 3, 2)).toString();
// const unCurrentdate = new Date(Date.UTC(2023, 9, 1)).toString();

// if (currentDate >= unCurrentdate ) {
//     console.log('Добро пожаловать!');
// }else {
//     console.log('Скоро начнем!');
// }


