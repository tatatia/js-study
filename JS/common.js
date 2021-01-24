/* Примітивні*/
var str = "Web-developer",
    number = 1,
    numberSecond = 2.4,
    bool = true,
    undef
nuull = null;

/*Oбєктивні */
var obj = {
    prop: "yo",
    prop: function () {

    }
},
    regexp = /baba/g,
    func = function () { },
    arr = [1, 2, 3];

obj.prop = 'loftblog';
arr[2] = '24';


/*Обгортки*/
console.log(str.toLocaleUpperCase());

var num = Number(124);
console.log(typeof num.toString());
console.log(typeof num);

var statement;//інструкція
statement = 5 + 2;//вираз
var str = 'dhghjj';//літерал
//ОПЕРАТОРИ

//арифметичні
2 + 3//5
5 - 4//1
= //присвоєння
++i//оператоз інкремента
--i//оператор декремента
//порівняння
var a = 0,
    b = 0;
a < b;
a > b;
a >= b;
a <= b;
//забути
a == b;
a != b;
//користуватись
a === b;
a !== b;
//условні
var age = 17;
if (age === 18) {
    alert("good");
} else if ("nbjhhh") {
    alert("bee")
} else {
}

(age === 18) ? alert("дорослий") :
    (age === 18) ? alert("капец дорослий") :
        (age === 18) ? alert("не дорослий")
                       alert("не дорослий")
//логічні
|| //или
&&//і
!//не 
