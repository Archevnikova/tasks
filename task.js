//1
/*let i=prompt("как тебя зовут?");
console.log("Привет," +i);*/

//2
/*
let i=prompt("введите ваш год рождения");
i=Number(i);
const currentYear="2023";
console.log(currentYear-i);*/

//3
/*let i=prompt("введите длину стороны квадрата");
i=Number(i);
const fourSides = 4;
console.log(i * fourSides);*/

//4
/*
let r=prompt("введите радиус окружности")
r=Number(r);
console.log(Math.PI*r**2);*/

//5
/*let s = prompt("введите расстояние");
let t = prompt("введите время");
s = Number(s);
t = Number(t);
console.log( s/t );*/

//6
/*
let $ = prompt("dollar");
$ = Number($);
const exchange = 0.9;                        //дробные числа?
console.log ($*Math.round(exchange));*/

//7
/*
let gB = prompt("гигабайты");
gB = Number(gB);                          
const mB = 820;
console.log(gB/mB);*/

//8
/*
let i = prompt ("сколько денег есть?");
i = Number (i);
let oneChocolate = 50; 
console.log (i / oneChocolate);*/

//9 Запросите у пользователя трехзначное число и выведите
//его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
let i = prompt ("введите трехзначное число");
i = Number(i);
let  a  = (i %10)*100;
let c = Math.floor(i/100);
let b =Math.floor((i%100) / 10)*10;
console.log(a+b+c);


//10 Запросите у пользователя целое число и выведите в ответ,
//четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch.
function task10(){
    let n = prompt("введите число");
    n = Number(n);
    if (n % 2 == 0) {   
        console.log("число четное");
    }
}