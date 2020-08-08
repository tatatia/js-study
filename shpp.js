// Tetiana Slobodeniuk
// 
//  if-(якщо). else-(інакше)
//       1-- Варіант з &&
/*
let mileage = prompt ("Скільки км ти проходиш в середньому пішки на день?");
if (mileage <= 3){
  alert("Мало") 
}
if (mileage >= 4 && mileage < 20){
  alert("Красавчик")
}
if (mileage >= 20){
  alert("Марафонець!!")
}
*/
    //   2-- Варіант
/*
let mileage = prompt ("Скільки км ти проходиш в середньому пішки на день?");
if (mileage <= 3 ){
  alert ("Мало") 
};
if ( mileage >= 4 ){ 
  if (mileage < 20 ){
    alert ("Красавчик")
  }
} 
if (mileage >= 20 ){
    alert ("Марафонець")
}
 */
          //  3-- Варіант з else 
/*
let mileage = prompt ("Скільки км ти проходиш в середньому пішки на день?");
if (mileage <= 3 ){
  alert("Мало") 
} else { 
  if (mileage < 20 ){
    alert("Красавчик")
  } else {
     alert("Марафонець") 
  }
} 
*/
 //   ЛІФТ 
/*
let number = prompt(" What's number floor?");
if ( number < 1 || number > 9 ){
    alert("False floor")
}
if ( number >=1 && number <= 3 || number >= 7 && number <=9 ){
    alert("Ok")
}
if ( number >= 4 && number <= 6 ){
 let password = prompt("Plese password?")
 if (password != "1337"){
    alert("False password")
 } else {
    alert("OK")
 }
} 
*/
//створення функціі 
/*
function setAlarm(employed, vacation){
  if (vacation == true){
    return false
  }else if (employed == true){
    return true
  }else{
    return false
  }
}
*/
//function good(Tany){
 //   console.log("You are cool, "+Tany+" ! :-) ")
//}
//good("Tany")

//function sum(a,b){
 //   return a + b
//}
//\console.log(sum(1, 2))
/*
function sum(a,b){
    if (a == 0 && b ==0){
    return 1
    }
   return a + b
}
console.log(sum(0, 0));
console.log(sum(2 + 3, 3));
var a = 10, b = -10;
console.log(sum(a, b));
console.log(sum(sum(5, 3), 2))
*/
/*
function wow(b) {
    b = b + 1
}
let a = 10
wow(a)
console.log(a)
*/
/*
function wow(a) {
    a = a + 1
}
let a = 10
wow(a)
console.log(a)
*/
/*
function funcName(arg1, arg2, /.../ argN){
    do something
}
function sum(a, b){
   return a + b;
}
console.log(sum(1, 2))// 3
*/
//function f() {}
//console.log(f())
//console.log(sum(2, 3))//5
//console.log(sum(2+3, 3))//8
//var a = 10, b =-10;
//console.log(sum(a,b));// 0
//console.log(sum(sum(5, 3), 2));//10
// Литерали
/*
var sum = function(a, b){
    return a + b;
};
console.log(sum(1, 2))//3
*/
//     АРГУМЕНТИ ФУНКЦІІ
/*
function someFunk(){
    console.log("кількість аргументів функціі:  " + arguments.length) 
}
someFunk("arg1", "arg2",);
someFunk("arg1");
someFunk();
*/
/*
function someFunc(){
    var str = " ";
    for (var i = 0; i < arguments.length; i++){
        str += " " + arguments[i]
    }
    console.log("Аргументи функціі: " + str)
}
someFunc("arg1", "arg2");
someFunc("arg1");
someFunc();
*/
/*
function sum(){
    var s = 0;
    for (var i = 0; i < arguments.length; i++){
        s += arguments[i]
    }
    return s;
}
sum(1, 2, 10, 4);
sum();
*/
/*
function someFunc(a, b){
    console.log(a);
    arguments[0] = 0
    console.log(a)
    console.log(b)
    b = 0
    console.log(arguments[1])
}
someFunk(10,10);
*/
/*
var point = {
    x: 1,
    y: 2
}
function offset(p1, p2){
    p1.x += p2.x;
    p1.y += p2.y;
}
offset(point, {x: 1, y: 2})
console.log(point.x, point.y) // 2, 4
*/
/*
var a = 0;
function inc(a){
    return ++a;
}
var a = 0;
inc(a);
console.log(a)// 0
*/
//    Задача про обчислення найбільшого числа
/*
function max(x, y){
return x + y
}
let a = +prompt("Перше число ");
let b = +prompt("Друге число ");
console.log(max(a, b));
*/
// приклад  36325 * 9824 + 777
/* 
function multiply(a, b){
    return a * b 
}
let a = 36325;
let b = 9824
console.log(multiply(a, b))
function add(c, f){
    return c + f
}
let c = (a * b)
let f = 777
console.log(add(c, f))
*/










           // ЦИКЛИ
//оператор while -(це умова){}
/*
 var rabbits = 0;
 while (rabbits < 10){
     rabbits = rabbits + 1
     console.log(rabbits + "кроликів")
 }
*/
//let i = 0;
//while (i < 10){
 //   i = 10
  //  console.log("огірків")
//}
/*
let i = 0
while (i < 10){
    console.log("помідорів")
    i + 1
}
*/
/*
let i =10
while (i >=  0){
    console.put("*")
    i = i - 1
}
*/
/*
var rabbits = 0;
while (rabbits < 10){
    rabbits++
    console.log(rabbits + "кроликів")
}
*/
/*
var rabbits = 0
while (rabbits++ < 10){
    console.log(rabbits + "кроликів")
}
*/     //    ОПЕРАТОР do-while
//  do{
   // код
//} while (умова)
/*
var a = false;
do{
    console.log(a)//виконаеться один раз
} while(a);
*/
   //ОПЕРАТОР - for
/*
for (зміна,перевірка){
    //код
}
*/
/*
for (var rabbits = 0; rabbits < 10; rabbits++){
    console.log(rabbits + "кроликів")
}
*/
/*
for (var i = 0, j = 0; i + j < 10; i++, j++){
    console.log(j)
}
*/
//    ОПЕРАТОРИ- break, continue

/*
for (var i = 0; i < 10; i++){
    if (i == 7){
        break
    }
}
console.log(i);
*/
/*
var a = 0
while (a < 5){
    a++
    if (a == 2){
        continue
    }
    console.log(a)
}
*/
/*
var a = 0;
while (a < 5){
    a++;
    if (a == 2){
        a = 5;
        continue
    }
document.write(a)
}
*/
/*
for (var i = 0; i < 5; i++){
    if (i == 2){
        continue
    }
    console.log(i)
}
*/
 // ТАБЛИЦЯ МНОЖЕННЯ
/*
for (var i = 2; i <= 10; i++){
    for (var j = 2; j <= 10; j++){
        document.write(i + "*" + j + " = " + i * j + "<br />")
    }
    document.write("<br />")
}
*/
/*
for (var i = 1; i < 10; i++){
    for (var j = 1; j <= i; j++){
        document.write(i + " ")
    }
    document.write("<br />")
}                              // пів ялинки
*/
/*
label:
for (var i = 0; i < 10; i++){
    if (i == 7){
        break label;
    }
}
console.log(i);
*/
/*   ?
outer:
for (var i = 0; i < 4; i++){
    for (var j =0; j < 4; j++){
        if (i ==2){
        break outer;
    }
    console.log(i, j);
 }
}
*/
/*     ?
outer:
for (var i =0; i < 4; i++){
    for (var j = 0; j < 2; j++){
        if (i == 2){
            continue outer;
        }
        console.log(i, j);
    }
}
*/
 
 //let i = 0;
 //while (i < 3){
   //  alert( i );
    // i++;
 //}
//
 //let i = 3;
 //while (i) {
   //  alert( i );
    // i--;
 //}
/*
let i = 3;
while (i) alert(i--);
*/
/*
let i = 0;
do {
    alert( i );
    i++;
} while ( i < 3)
*/
/*
for (let i = 0; i < 3; i++){
    alert(i)
}
*/
// АЛГОРИТМ РОБОТИ ЦИКЛА:
//1. вик. *начало*
//2.(якщо *умова* == true-виконати *тіло*,-викон.*шаг*)
/*
for(let i =0; i < 3; i++) alert(i)
let i = 0;
if (i < 3){alert(i); i++}
if (i < 3){alert(i); i++}
if (i < 3){alert(i); i++}
*/
/*
let i = 0;
for (; i < 3; i++){
    alert(i)
}
*/
/*
let i = 0
for (; i < 4;){
    alert( i++)
}
*/
//   Цикл- BREAK
/*
let sum = 0;
while (true){
    let value = +prompt("19"," ")
    if (!value) break; 
    sum += value
}
alert("сумма:" + sum)
*/
  // CONTINUE
/*
  for (let i = 0; i < 10; i++){
      if (i % 2 == 0) continue
      alert(i)
  }             // 1, 3,5,7,9
*/
/*
for (let i = 0; i < 10; i++){
    if (i % 2){
        alert ( i )
    }
}           //1,3,5,7,9
*/
/*
outer: for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let imput = prompt("Значение на координатах(${i},${j})")
    if (!imput) break outer
    }
}
alert("Готово!")
*/
// WHILE, do...while,  for----три вида циклів
//     ЗАДАЧІ
/*
let i = 3;
while (i){
    alert( i--)
}  // 1
*/
/*
let i = 0;
while (i++ < 5) alert(i) //від 1 до 5
//
let i = 0;
while (++i < 5) alert(i) //від 1 до 4
*/
/*
for (let i = 0; i < 5; i++) alert( i );// от 0 до 4
for (let i = 0; i < 5; ++i) alert( i );//от 0 до 4
*/
/*
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) { //числа від 2,4,6,8,10
    alert( i );
}
*/
/*
let i = 0;
while (i < 3 ){
    alert("number &{i}!")
    i++
}
*/
/*
let num;
do {
    num = prompt("Введи чисо більше 100 ?", 0)
} while (num <= 100 && num)
*/
/*
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 
for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  alert( i ); 
}              // 2,3,5,7
*/
//      задача зірочки
/*
let i =10
while (i >  0){
    console.put("*")
    i = i - 1
}
*/
/*
let i =100
while (i >  0){
    console.put("*")
    i = i - 1
}
*/
/*
let star = prompt("Скільки зірок ти хочеш побачити?")
while (star > 0){
    console.put("*")
    star = star-1
}
*/
//    задачі про числа
/*
let n = prompt("Ввести число?")
let i = 0;
while (i++ < n ){
  if (i % 2 == 0 ){
    alert(i) 
      }
}
*/
//
//
/*
for (let i = 0; i < 0; i++){
  let n = prompt("Ввести число")  
} if ( i % 2 == 0){
alert (n)
}
*/
//    квадрат із зірок
/*
var horizCount = 4;
var vertCount = 4;
var str = "*".repeat(4);
console.log(str);
for (var i=0; i < vertCount - 2; ++i){
    console.log("*" + ("*".repeat(horizCount -2)) + "*");    
}
console.log(str);
*/
//          Задача Трикутники
/*
var count = prompt("Введіть розмір?");
for (var i = 1; i <= count; i++){
    console.log("*".repeat(i))
}
*
**
***
*/
/*
var count = prompt("Введіть розмір?");
for (var i = count; i > 0; i--){
    console.log("*".repeat(i))
}
***
**
*
*/
/*
var count = prompt("введіть розмір?");
for (var i = count; i >0; i--) {
console.log(" ".repeat(count - i) + "*".repeat(i))
}  
***
 **
  *
*/
/*
var a = 0;
var b = 3;
var str = "*". repeat(1)+ " ";
console.log(str);
for (var i = 0; i < b-2; ++i){
    console.log("*" + ("".repeat(b-2)) +"*")
        }
        {
            console.log("*" +("*".repeat(a+1))+"*")
        }
*/
  /*
  var a = 0;
var b = 3;
var str = "*". repeat(3)+ " ";
console.log(str);
for (var i = 0; i < b-2; ++i){
    console.log("*" + ("".repeat(b-2)) +"*")
        }
        {
            console.log("*" +(" ".repeat(1))+" ")
        }            
*/
/*
var a = 0;
var b = 3;
var str = "*". repeat(3)+ " ";
console.log(str);
for (var i = 0; i < b-2; ++i){
    console.log(" " + ("*".repeat(b-2)) +"*")
        }
        {
            console.log(" " +(" ".repeat(a+1))+"*")
        }
*/
//          ЯЛИНКА
/*
var count = prompt("введіть розмір?");
var stars = 1;

for (var i = count; i > 0; i--){
    console.log(" ".repeat(i-1)+"*".repeat(stars))
    stars = stars + 2
}
console.log(" ".repeat(count-1)+ "*")
*/
/*
   *
  ***
 *****
*******
*/
/*
let number = +prompt("Введи число?")
let max = number
while(number != 0){
    number = +prompt("Введи число?")
    if (number > max && number % 2 == 0){
        max = number
    }
 
}
console.log("max number "+ max)
*/
            // або
/*
let number
let max = 0 
do { 
    number = +prompt("Введи число?")
    if (number > max && number % 2 == 0){
        max = number
    }
} while(number != 0)
console.log("max number "+ max)
*/
/*
let a = +prompt("Введи число A?")
let b = +prompt("Введи число B?")
let sum = 0;
for (var i = a ; i <= b; i++){
    console.log("" + i)
    sum = sum + i
    console.log("" + sum)
}
console.log("sum " + sum)
*/
//     МАСИВИ- це як завгодно
//    довгий набір нумерованих значень
//    у масива е номер(індекс)
//let arr = new Array();
//let arr = [];
/*
let fruits = ["яблоко","апельсин","слива"];
alert ( fruits[0] );//яблоко
alert ( fruits[1] );//фпельси
alert ( fruits[2] );//слива
*/
/*
let fruits = ["яблуко","апельсин", "слива"]
alert(fruits.length) //3
*/
/*
let fruits = ["яблуко","апельсин", "слива"]
alert(fruits) //яблуко.апельсин.слива
*/ 
/*
let arr = [ "яблуко",{ name: "Djon"}, true, function(){alert("привет")}];
alert( arr[1].name) // Djon
arr[3]();
*/
//push-добавляє елемент в кінець
//shift-удаляє єлемент на початку,двигаючи чергу
//pop-удаляє останній елемент
//pop
/*
let fruits = ["яблуко","апельсин","груша"];
alert( fruits.pop());
alert(fruits)
*/
//push
/*
let fruits = ["яблуко","апельсин",];
fruits.push("киви");
alert(fruits)
*/
//shift
/*
let fruits =  ["Яблоко", "Апельсин", "Груша"];
alert( fruits.shift())
alert( fruits)
*/
//unshift-добавити елемент в началі масива
/*
let fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');
alert( fruits );
*/
// push  unshift--використ разом
/*
let fruits = ["яблоко"]
fruits.push("апельсин","груша")
fruits.unshift("ананас","лимон")
alert( fruits)
*/
/*
let fruits = ["Banan"];
let arr = fruits;
alert( arr ===fruits);
arr.push("chery");
alert( fruits)
*/
/*
let fruits = [];
fruits[99999] = 5;
fruits.age = 25;
*/
/*
let fruits = [];
fruits[123] = "яблуко";
alert( fruits.length );//124
*/
/*
let arr = [1, 2, 3, 4, 5];
arr.length = 2//скорочуєм до двох  елементів
alert(arr);//[1,2]
arr.length = 5//вертаємо як було
alert( arr[3] )// undefined
*/
/*
let arr = new Array(2)//?
alert( arr[0] );//undefined
alert( arr.length );// length 2
*/
// Багато мірні масиви
/*
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
alert ( matrix[1][1])//5,центральний елемент
*/
/*
let arr =[1, 2, 3];
alert( arr );//1,2,3
alert( String(arr)==="1,2,3")// true
*/
/*
//alert( [] + 1);// "1"
//alert( [1] + 1 );//11
//alert( [1,2] + 1)//1,21
*/
//for (let i=0; i<arr.length; i++);
//for (let item of arr)//до індексів нема доступу
// задача. Скопійований чи масив
/*
let fruits = ["яблоки","груша","апельсин"]
let shoppingCart = fruits;
shoppingCart.push("банан");
alert (fruits.length);// 4
*/
//Операціі з масивами
/*
let styles = ["Джаз","Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length-1) / 2)] = "Класика";
alert( styles.shift() );
styles.unshift("Реп","Регги")
*/
/*let arr = ["a","b"];
arr.push(function(){
    alert(this);
})
arr[2]()//"a","b", function
*/
//Сума введених чисел
/*
function sumInput(){
    let numbers = [];
    while (true) {
        let value = prompt("Введи число", 0);
        // зупиняем ввід?
        if (value ==="" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0
    for (let number of numbers){
      sum += number;
}
return sum;
}
alert( sumInput) 
*/
// ПОДМАССИВ найбільшоі суми
/*
function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr){
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0
    }
    return maxSum
}
alert( getMaxSubSum([-1, 2, 3, -9]) );//5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );//11
alert( getMaxSubSum([-2,-1, 1, 2]) );//3
alert( getMaxSubSum([100, -9, 2, -3, 5]) );//100
alert( getMaxSubSum([1, 2, 3]) );//6
alert( getMaxSubSum([-1, -2, -3]) )//0
*/
////////////////////////////////////////////////////////////////////////////////////
/*
a = [11, 22, 33, 44, 55]//це масив в якому перші 5 елементів рівні
console.log(a[0])//буде 11
a = [true, false, "element", 1, 1.2]//це теж
*/
// a = 0//це пустий масив
/*
var array = [1, 2, 3, 4]
console.log(array[0])// 1
console.log(array[3])// 4
array[3] = 10//можно міняти
console.log(array[32-30-array[0]])// 10
*/
/*
var array = [];
let i = 0;
while (i < 10){
    array[i] = i
    i++
}
array[11] = 10
i = 0;
while (i < 12){
    console.log(array[i])
    i++
}// буде [0,1,2...,9,?,10]
*/
/*
var arr = [1, 2, 3];
arr[0] = "one";
arr[1] = "two";
console.log(arr[0]+", "+arr[1]+", "+arr[2])//буде one,two, 3
*/
/*
var arr = [10, 20];
console.log(arr.length)//2-довжина масиву
*/
/*
let arr = [];
arr[6] = 10;
console.log(arr.length)// 7
*/
/*
let arr = [2, 5, 8];
let i = 0
while (i < arr.length){
    console.log(arr[i])
    i++   // 2,5,8
}
*/
// збідьшення кожного елементу масиву на 1
/*
var arr = [0, 1, 2, 3, 4];
let i = 0;
while (i < arr.length){
    arr[i]++
    i++
}
for (let i = 0; i < arr.length; i++)
console.log(arr[i]+" ") // 12345
*/
/*
var array = [1, 2, 3];
let b = array;
b[0] = 111;
console.log(array[0])// 111
*/
/*
var arr = [1, 2, 3];
arr[0] = "one";
arr[1] = "two";
arr[2] = "three";
console.log(arr); // ? ["one","two","tree"]
*/
/*
var arr = [1, 2];
console.log(arr.length); //2
arr[4] = "something";
console.log(arr.length); //5
console.log(arr); // [1, 2, undefined, undefined, "something"]
*/
/*
var arr = [1, 2, 3];
arr.length = 5;
console.log(arr);// [1, 2, 3, undefined,undefined]
console.log(arr.length); // 5
*/
/*
var arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);// [1, 2, 3]
*/
//     багатомірні масиви
/*
var arr = [1, [2, 3], [4, 5], "six"];
console.log(arr[1]);// [2, 3]
console.log(arr[1][0]);//2
console.log(arr[1][1]);//3
*/
//var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/*
var arr = [[1, 2, 3],
        [4, 5, 6], 
        [7, 8, 9]];
var el = arr[0][1];
console.log(el);//2
*/
/*
var arr = [0,[1, 2, [2, 3]]];
console.log(arr[1]);// [1, 2, [2, 3]]
console.log(arr[1][2]);// [2, 3];
console.log(arr[1][2][1]);//3
*/
/*
var arr = [0, 1, 2, 3, 4];
for (var i = 0; i < arr.length; i++){
    arr[i]++
}
console.log(arr);// [1,2,3,4,5]
*/
//розділяем кожний елемент вложеного масива на два
/*
var arr = [[1, 2, 3],
        [4,5]];
for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; i++){
        arr[i][j] /=2
    }
}        
console.log(arr[0]);//[0.5, 1, 1.5]
console.log(arr[1]);//[2, 2.5]
*/
//     ОБЄКТИ
//let user = new Object();//синтаксис "конструктор обєкта"
//let user = {};//синтаксис "литерал обєкта"
//    user - пусто
/*
let user = {     // обєкт
    name: "John",//под ключом "name" сохр. значення "John"
    age: 30      //под ключом "age" сохо. зн.30
}
// получаєм свойства обєкта:
alert( user.name );// John
alert( user.age );//30
*/
/*
 let user = {};
 //присвоюєм значееня свойству
 user["likes birds"] = true;
 //получениє значення свойства
 alert(user["likes birds"]);//tru
 //видалення свойства
 delete user["likes birds"];
*/
/*
let user = {
    name:"John",
    age:30
}
let key = prompt("Що ви хочете знати про користувача?", "name")
alert( user[key]);// John (якщо ввели "name")
*/
/*
let fruit = prompt("Який фрукт купити?", "apple");
let bag = {
    [fruit]: 5,//імя свойства буде взято із перемінноі fruit

};
alert( bag.apple);// 5, якщо fruit="apple"
*/
//  СВОЙСТВО ІЗ пепремінной
/*
function makeUser(name, age){
    return{
        name: name,
        age: age
        // інші свойства
    };
}
let user = makeUser("John", 30);
alert(user.name);//John
*/
// ограничения на имена свойств
/*
let obj ={
    0: "тест"//теж саме що і "0":"тест"
};//обидві функції alert виведуть одне і теж
alert( obj["0"])//тест
alert( obj[0])//тест
*/
// оператор "in"
/*
let user = {
    name: "John", age: 30
}
alert("age" in user)//true, user.age существуют
alert("blabla" in user)//false, user.blabla не существует
*/
/*
let user = {age: 30
}
let key = "age"
alert(key in user)//true
*/
/*
let obj = {
    test: undefined
};
alert( obj.test) //undefined
alert( "test" in obj)//true
*/
//   ЦИКЛ  for....in
/*
for (key in object){
    //тіло цикла вик.для кожного свойства обєкта
}
*/
/*
let user = {
    name:"John",
    age:30,
    isAdmin: true
}
for (let key in user){
    //ключі
    alert(key)//name,age,isAdmin
    //значення ключів
    alert(user[key])//John,30,true
}
*/
//   ПОРЯДОК свойств обєкта
/*
let codes = {
    "49": "Германія",
    "41": "Швейцарія",
    "44": "Великобританія",
    "1": "США"
}
for (let code in codes){
    alert(code)// 1,41,44,49
}
*/
/*
let codes = {
    "+49": "Германія",
    "+41": "Швейцарія",
    "+44": "Великобританія",
    "+1": "США"
}
for (let code in codes){
    alert(+code)// 1,41,44,49
}
*/
/*
let user = {
    name: "Jon",
    surname: "Lesley"
}
user.age = 25;
for (let prop in user){
    alert( prop)// name, surname, age
}
*/
//     КОПІЮВАННЯ ПО ССИЛКЕ
/*
let user = {name: "Julie"}
let admin = user//копіюється ссилка
admin.name = "Pete"//змінено по ссилці із перемінної "admin"
alert(user.name)//"Pete"зміни вмдні по ссилці із перемінної "user"
*/
//   Порівняння обєктів
/*
let a = {};
let b = a;//копіювання по ссилці
alert( a == b );//true,обидві перемінні ссилаються на один и той обєкт
alert( a === b );//tru
*/
/*
const user = {
    name: "Denis"
};
user.age = 25;
alert(user.age)// 25
*/
// Клонування і обєднання обєктів (Object.assidn)
/*
let user = {
    name:"Jim",
    age: 30
};
let clone = {};//новий пустий обєкт
//копіюємо всі свойства user в нього
for (let key in user){
    clone[key] = user[key]
}
//тепер в перемінній clone знаходиться незалежний клон обєкта
clone.name = "Lele";//змінимо вньому дані
alert( user.name);//в оригін. обєкті значення свойства "name" залишилось таке ж -Jim
*/
/*
let user = {
    name: "John"
    }
let permissions1 = {canViem: true};
let permissions2 = {canEdit: true};
//всі свойства копіюємо із  permissions1 і  permissions2 в user
Object.assign(user, permissions1,  permissions2);
// now user = { name: "John", canView: true, canEdit: true }
*/
/*
let user = {
    name: "Keyt",
    age: 30
}
let clone = Object.assign({}, user);
*/
/*
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
}
let clone = Object.assign({}, user);
alert( user.sizes === clone.sizes)// true
user.sizes.width++
alert( clone.sizes.width);
*/
//  задача    міста
/*
let cities = []
for(let i = 0; i < 10; i++){
    let city = prompt("VVedu mista");
    cities.push(city)
} 
console.log(cities)
let yourCity = prompt("your city?");
let foundCity = "я не знаю твого міста"
for (let i = 0; i < cities.length; i ++){
    if (yourCity == cities[i]){
        foundCity = "я знаю твоє місто"
    }
}
alert(foundCity)
  */ 
//   БАНкомат
/*
let cards = [0,0,0,0,0,0,0,0,0,0];
let nomberCart 
do {
    nomberCart = +prompt("Vvedu nomer kards")
} while(nomberCart < 0 || nomberCart > 9)
let amount
do {
    amount = +prompt("скільки?")
} while(amount < -1000 || amount >1000)
cards[nomberCart]=amount
let sum = 0
 for (let i = 0; i < cards.length; i++){
    sum = sum + cards[i]
}
console.log("vvedi nomer kartochki: " + nomberCart)
console.log("skolko polozhit? " + amount)
console.log(cards)
console.log("v summe na vseh kartah " + sum )
*/
//  Задача Відцентрована штука    
/*
let numbers =[]
let number
let max = 0
do { 
    number = prompt("Введи число?")
numbers.push(number)
if(number>max){
    max=number}
}while(number != 0)
for (let i = 0; i < numbers.length; i++){
let c = (max-numbers[i]-1)/2
console.log(" ".repeat(c)+"*".repeat(numbers[i]))
}
*/
//  МАСИВИ З КНижки
//генератор випадкових образливих фраз
/*
var randomBodyParts = ["fase", "nose", "hair"];
var randomAdjectives =["smelle","boring","stupid"];
var randomAnimals = ["fly","marmot","monkey"];
var randomBodyParts = randomBodyParts[Math.floor(Math.random()* 3)];
var randomAdjectives = randomAdjectives[Math.floor(Math.random()* 3)];
var randomAnimals =randomAnimals[Math.floor(Math.random()* 5)]
var trandomInsule = "you" + randomBodyParts + "is like a" + randomAdjectives + " " + randomAnimals + "!!!";
trandomInsule;
*/
//    Рядки
/*
let a = "hello"
console.log(a)
console.log(a + a)
console.log(a*2)
console.log(a[1])
console.log(a.length)
*/
/*
let a = "hello"
let b = []
for (let i = 0; i < a.length; i++){
    b[i] = a[i]
}
b[3] = "X"
let c = ""
for (let i = 0; i< b.length; i++){
    c = c + b[i]
}
console.log(c)
*/
//         
//   Задача про обчислення найбільшого числа
/*
function max(x, y){
    if(x > y){
        return x
    } else {
        return y
    }
}
let a = +prompt("Перше число ");
let b = +prompt("Друге число ");
console.log(max(a, b));
*/
//     Задача   приклад  36325 * 9824 + 777
/* 
function multiply(a, b){
    return a * b 
}
let a = 36325;
let b = 9824
console.log(multiply(a, b))
function add(c, f){
    return c + f
}
let c = (a * b)
let f = 777
console.log(add(c, f))
*/
//   Задача МАСИВ у зворотньому порядку
/*
function createArray(m, a){
    for (let i = 0; i < a ; i++){
       m[i] = prompt("введіть елемент " + i)
    }
}
function printArray(m){
    let s = "[ "
    for (let i = 0; i < m.length; i++){
        s = s + m[i] + " "
    }
    s = s + "]"
    console.log(s)
}
function reverse(m){
    let n = []
    for (let i = m.length-1; i >= 0; i--){
         n.push(m[i])
    }
    for (let i = 0; i < n.length; i++){
        m[i] = n[i]
    }
}
function main(){
    let a = +prompt("Який розмір масиву?")
    let m = []
    createArray(m, a)
    printArray(m)
    reverse(m)
    console.log("ось реверснутий масив:")
    printArray(m)
}
main()
*/
//     
/*
function numberOfWheels(numberOfBikes, numberOfCars){
    return (numberOfBikes * 2) + (numberOfCars * 4)
}
let a = +prompt("кільлість велосипедів ");
let b = +prompt("кількість машин ");
console.log(numberOfWheels(a, b))
*/

