// // Task 1

// const randomNumber = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.trunc(Math.random() * 10);
//     resolve(random);
//   }, 2000);
// });

// async function fetch() {
//   console.log("Generatsiya qilinmoqda...");
//   let resolve = await randomNumber;
//   console.log(resolve);
// }
// fetch();

// // Task 2

// function checkName(name) {
//   return new Promise((resolve, reject) => {
//     if (name.length >= 3) {
//       resolve("To'g'ri");
//     } else {
//       reject("Xato");
//     }
//   });
// }

// async function fetch(name) {
//   try {
//     let response = await checkName(name);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetch("Ali");

// // Task 3

// const counter = new Promise((resolve, reject) => {
//   let count = 1;
//   let interval = setInterval(() => {
//     console.log(count);
//     if (count === 5) {
//       clearInterval(interval);
//       resolve("Done");
//     }
//     count += 1;
//   }, 1000);
// });
// async function fetch() {
//   let response = await counter;
//   console.log(response);
// }
// fetch();

// // Task 4

// const colors = [
//   { name: "qizil", code: "#FF0000" },
//   { name: "yashil", code: "#00FF00" },
//   { name: "ko'k", code: "#0000FF" },
// ];
// const jsonColors = JSON.stringify(colors);
// function findColor(colorName) {
//   return new Promise((resolve) => {
//     const color = JSON.parse(jsonColors).find((color) => color.name === colorName);
//     resolve(color || null);
//   });
// }
// async function fetchColor(colorName) {
//   try {
//     const color = await findColor(colorName);
//     console.log(color);
//   } catch (error) {
//     console.log("Xatolik:", error);
//   }
// }
// fetchColor("qizil");

// // Task 5

// async function sendMessage(msg) {
//   const sendMsg = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Xabar yuborildi: " + msg);
//     }, 2000);
//   });
//   console.log("Xabar yuborilmoqda...");
//   let response = await sendMsg;
//   console.log(response);
// }

// sendMessage("Salom");

// // Task 6

// function average(grades) {
//   return new Promise((resolve, reject) => {
//     let count = 0;
//     let totalGrades = 0;
//     for (let key in grades) {
//       count += 1;
//       totalGrades += grades[key];
//     }
//     const avg = totalGrades / count;
//     resolve(parseFloat(avg.toFixed(2)));
//   });
// }
// async function calculateAverage(grades) {
//   let res = await average(grades);
//   console.log(res);
// }
// const grades = {
//   matematika: 5,
//   fizika: 4,
//   ingliz: 5,
// };
// const jsonGrades = JSON.stringify(grades);
// calculateAverage(JSON.parse(jsonGrades));

// // Task 7

// const phones = [
//   { model: "iPhone", price: 1000 },
//   { model: "Samsung", price: 800 },
//   { model: "Xiaomi", price: 500 },
// ];
// const jsonPhones = JSON.stringify(phones);
// function findPhones(maxPrice) {
//   return new Promise((resolve, reject) => {
//     const result = JSON.parse(jsonPhones).filter((phone) => phone.price <= maxPrice);
//     resolve(result);
//   });
// }
// async function fetchPhones(maxPrice) {
//   try {
//     const affordablePhones = await findPhones(maxPrice);
//     console.log(affordablePhones);
//   } catch (error) {
//     console.log("Xatolik:", error);
//   }
// }
// fetchPhones(800);

// // Task 8

// const users = {
//   username: "12345",
//   password: "password",
// };
// function loginPromise(user, username, password) {
//   return new Promise((resolve, reject) => {
//     if (user.username == username && user.password == password) {
//       setTimeout(() => {
//         resolve("Xush kelibsiz");
//       }, 1000);
//     } else {
//       reject("Login yoki parol noto'g'ri");
//     }
//   });
// }

// async function login(username, password) {
//   try {
//     let res = await loginPromise(users, username, password);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// login("12345", "password");

// // Task 9

// function countdownPromise(countdown) {
//   return new Promise((resolve, reject) => {
//     let count = countdown;
//     let interval = setInterval(() => {
//       console.log(count);
//       count -= 1;
//       if (count == 0) {
//         resolve("Vaqt tugadi!");
//         clearInterval(interval);
//       }
//     }, 1000);
//   });
// }
// async function countdown(countdown) {
//   let res = await countdownPromise(countdown);
//   console.log(res);
// }
// countdown(5);

// // Task 10

// // Izoh real apidan foydalandim qabul qilasiz degan umiddaman
// async function getWeather(cityName) {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=96b947a45d33d7dc1c49af3203966408`;
//   let response = await fetch(url).then((res) => res.json());
//   let temp = Math.round(response.main.temp);
//   let status = response.weather[0].main;
//   let obj = { temp, status };
//   console.log(obj);
// }
// getWeather("Tashkent");

// // Task 11

// function checkNumberPromise(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number % 2 === 0) {
//         resolve("Juft son");
//       } else {
//         reject("Toq son");
//       }
//     }, 1000);
//   });
// }

// async function checkNumber(number) {
//   try {
//     let res = await checkNumberPromise(number);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// checkNumber(5)

// // Task 12

// const books = [
//     { title: "Book 1", author: "Ali" },
//     { title: "Book 2", author: "Vali" }
// ];
// const booksJson = JSON.stringify(books);
// function findBooksByAuthor(author) {
//     return new Promise((resolve, reject) => {
//         const booksArray = JSON.parse(booksJson);
//         const result = booksArray.filter(book => book.author === author);
//         resolve(JSON.stringify(result));
//     });
// }
// async function fetchBooksByAuthor(author) {
//     try {
//         const booksByAuthorJson = await findBooksByAuthor(author);
//         const booksByAuthor = JSON.parse(booksByAuthorJson);
//         console.log(booksByAuthor);
//     } catch (error) {
//         console.log("Xatolik:", error);
//     }
// }
// fetchBooksByAuthor("Ali");

// // Task 13

// const students = [
//     { name: "Ali", course: 2 },
//     { name: "Vali", course: 1 }
// ];
// const studentsJson = JSON.stringify(students);
// function filterByCourse(course) {
//     return new Promise((resolve, reject) => {
//         const studentsArray = JSON.parse(studentsJson);
//         const result = studentsArray.filter(student => student.course === course);
//         resolve(JSON.stringify(result));
//     });
// }
// async function fetchStudentsByCourse(course) {
//     try {
//         const studentsByCourseJson = await filterByCourse(course);
//         const studentsByCourse = JSON.parse(studentsByCourseJson);
//         console.log(studentsByCourse);
//     } catch (error) {
//         console.log("Xatolik:", error);
//     }
// }
// fetchStudentsByCourse(2);

// // Task 14

// const fruits = [
//     { name: "Olma", price: 10000 },
//     { name: "Banan", price: 15000 },
//     { name: "Uzum", price: 8000 }
// ];
// const fruitsJson = JSON.stringify(fruits);
// function findCheapestFruit() {
//     return new Promise((resolve, reject) => {
//         const fruitsArray = JSON.parse(fruitsJson);
//         const cheapestFruit = fruitsArray.reduce((min, fruit) => (fruit.price < min.price ? fruit : min), fruitsArray[0]);
//         resolve(JSON.stringify(cheapestFruit));
//     });
// }
// async function fetchCheapestFruit() {
//     try {
//         const cheapestFruitJson = await findCheapestFruit();
//         const cheapestFruit = JSON.parse(cheapestFruitJson);
//         console.log(cheapestFruit);
//     } catch (error) {
//         console.log("Xatolik:", error);
//     }
// }
// fetchCheapestFruit();
