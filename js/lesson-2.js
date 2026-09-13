//1

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// const bluesIndex = styles.indexOf('blues');
// styles[bluesIndex] = 'classic';

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
//2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(logins) {
//   const input = prompt('enter a login');
//   if (logins.includes(input)) {
//     alert(`Welcome, ${input}!`);
//   } else {
//     alert('User not found');
//   }
// }

// checkLogin(logins);

//3

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const value of arguments) {
//     if (typeof value === 'number') {
//       total += value;
//       count += 1;
//     }
//   }
//   if (count === 0) {
//     return 0;
//   } else {
//     return total / count;
//   }
// }

//4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім,
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumNeighbors(someArr) {
//   const result = [];
//   for (let i = 0; i < someArr.length - 1; i++) {
//     result.push(someArr[i] + someArr[i + 1]);
//   }
//   return result;
// }

// console.log(sumNeighbors(someArr));

//5

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     let smallest = numbers[0];
//     for (let number of numbers) {
//       if (number < smallest) {
//         smallest = number;
//       }
//     }
//     return smallest;
//   } else {
//     return 'Sory, it is not an array!';
//   }
// }
// console.log(findSmallestNumber(numbers)); // 2
// console.log(findSmallestNumber('hello')); // Sory, it is not an array!

//6

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let biggest = words[0];
//   for (let word of words) {
//     if (word.length > biggest.length) {
//       biggest = word;
//     }
//   }
//   return biggest;
// }
// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

//7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// const values = Object.values(salaries);

// for (let value of values) {
//   sum += value;
// }
// console.log(sum);

//9

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   exist() {
//     return 'a' in this && 'b' in this;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     }
//     return 'No such properties';
//   },
//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     }
//     return 'No such propeties';
//   },
// };

// console.log(calculator.exist()); // false

// console.log(calculator.sum()); // 'No such propeties'
// console.log(calculator.mult()); // 'No such propeties'

// calculator.read(5, 3);

// console.log(calculator.exist()); // true
// console.log(calculator.sum()); // 8
// console.log(calculator.mult()); // 15

//10

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let total = 0;
//   for (let fruit of fruits) {
//     if (fruitName === fruit.name) {
//       total += fruit.price * fruit.quantity;
//     }
//   }
//   return total;
// }

// console.log(calcTotalPrice(fruits, 'Банан')); // 1375
// console.log(calcTotalPrice(fruits, 'Яблуко')); // 315
// console.log(calcTotalPrice(fruits, 'Ківі')); // 0

//11

// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;

const phonebook = {
  contacts: [],
  add(data) {
    if (!data.name || !data.email) {
      return;
    }
    for (const contact of this.contacts) {
      if (contact.name === data.name || contact.email === data.email) {
        return;
      }
    }
    const category = data.category || 'default';
    const newContact = {
      name: data.name,
      email: data.email,
      category,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  generateId() {
    return Date.now();
  },
  getDate() {
    return new Date().toLocaleString();
  },
  list() {
    console.table(this.contacts);
  },
  filtered(category) {
    return this.contacts.filter((contact) => contact.category === category);
  },
  delete(name) {
    this.contacts = this.contacts.filter((contact) => contact.name !== name);
  },
  updateName(oldName, newName) {
    for (const contact of this.contacts) {
      if (contact.name === oldName) {
        contact.name = newName;
      }
    }
  },
};

console.log(phonebook.contacts); // []

phonebook.add({
  name: 'Alex',

  email: 'alex@mail.com',

  category: 'friends',
});

phonebook.add({
  name: 'John',

  email: 'john@mail.com',

  category: 'work',
});

phonebook.add({
  name: 'Kate',

  email: 'kate@mail.com',
});

phonebook.list();

console.log(phonebook.filtered('friends'));

// Alex

console.log(phonebook.filtered('default'));

// Kate

phonebook.add({
  name: 'Alex',

  email: 'another@mail.com',
});

console.log(phonebook.contacts.length);

// должно остаться 3

phonebook.updateName('Alex', 'Alexander');

phonebook.list();

// Alex → Alexander

phonebook.delete('John');

phonebook.list();

// John удалён
