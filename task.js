//модуль  1.1.
function one (){
    let i=prompt("как тебя зовут?");
    console.log("Привет," +i);
}

function two(){
    let i=prompt("введите ваш год рождения");
    i=Number(i);
    const currentYear="2023";
    console.log(currentYear-i);
}


function tree (){
    let i=prompt("введите длину стороны квадрата");
    i=Number(i);
    const fourSides = 4;
    console.log(i * fourSides);
}


function four (){
    let r=prompt("введите радиус окружности")
    r=Number(r);
    console.log(Math.PI*r**2);
}


function five (){
    let s = prompt("введите расстояние");
    let t = prompt("введите время");
    s = Number(s);
    t = Number(t);
    console.log( s/t );
}


function SVGMatrix(){
    let $ = prompt("dollar");
    $ = Number($);
    const exchange = 0.9;                        //дробные числа?
    console.log ($*Math.round(exchange));
}


function seven(){
    let gB = prompt("гигабайты");
    gB = Number(gB);                          
    const mB = 820;
    console.log(gB/mB);
}


function eight(){
    let i = prompt ("сколько денег есть?");
    i = Number (i);
    let oneChocolate = 50; 
    console.log (i / oneChocolate);
}

// Запросите у пользователя трехзначное число и выведите
//его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
function nine(){
    let i = prompt ("введите трехзначное число");
    i = Number(i);
    let  a  = (i %10)*100;
     let c = Math.floor(i/100);
     let b =Math.floor((i%100) / 10)*10;
     console.log(a+b+c);
}


// Запросите у пользователя целое число и выведите в ответ,
//четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch.
function ten(){
    let n = prompt("введите число");
    n = Number(n);
    if (n % 2 == 0) {   
        console.log("число четное");
    }
}



// числа задом наперед
function reverseNumber(){
    let n = prompt ("двухзначное число");
    n = Number (n);
    let a = Math.floor(n/10);
    let b = (n%10)*10;
    console.log(a+b);
    
}
//числа задом наперед из 1234 в 4321
function reverseNumberTwo(){
    let n = prompt ("четырехзначное число");
    n = Number(n);
    let a = (n % 10)*1000; // 4000
    let b = Math.floor((n % 100)/10)*100; //300
    let c = Math.floor((n % 1000)/100)*10;//20
    let d = Math.floor (n/1000); //1
    console.log (a+b+c+d);
}




//модуль 1.2
//1.
function howAge(){
    let age = prompt ("введите возраст")
    age = Number(age);
    if(age <=12){
        console.log("ребенок");
    } else if (age <=18){
        console.log ("подросток");
    } else if (age <=60){
        console.log ("взрослый");
    } else if  (age >=60){
        console.log ("пенсионер");
    }

//2
}
function specialCharacter(){
    let n = prompt ("введите число");
    n = Number (n);
    switch (n){
        case 1:
            console.log ("!");
            break;
        case 2:
            console.log("@");
            break;
        case 3:
            console.log("#");
            break;
        case 4:
            console.log ("$");
            break;
        case 5:
            console.log("%");
            break;
        case 6:
            console.log("^");
            break;
        case 7:
            console.log("&");
            break;
        case 8:
            console.log ("*");
            break;
        case 9:
            console.log ("(");
            break;
        case 0:
            console.log(")");
            break;
        default:
            console.log ("нет данных");
    }
}
// //3.Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры 123
function identicalNumbers(){
let n = prompt ("введите трехзначное число");
let a = n % 10; //3
let b = Math.floor((n % 100 ) / 10); //2
let c = Math.floor(n/100);//1
if (( a== b) || ( a == c) || (c == b)){
    console.log("Есть");
} else {
    console.log ("нет одинаковых");
}

}

// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100
function leapYear (){
    let i = prompt ("введите год");
    i = Number(i);
    if ((i % 400 ==0) || (i % 4 ==0 && i %100 !==0 ) ) {
        console.log("год високосный");
    } else {
        console.log ( "не високосный");
    }
}

//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.12345
function palindrome(){
    let n = prompt ("введите палиндром");
    n = Number (n);
    let a = n % 10; //5
    let b = Math.floor( n / 10000);//1
    let c = Math.floor(( n % 100) / 10);//4
    let d = Math.floor(( n  % 1000)/100); //3
    let e = Math.floor(( n  % 10000)/1000); //2
        if (( b == a ) & (e == c)){
              console.log ("полиндром");
        }
}

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму
function money(){

}




//7.Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%. 
function paymentAmount(){
    let n = prompt ("сумма покупки");
    n = Number(n);
     if (n >=200 && n <= 300){
        console.log ((n*3)/100);
     } else if (n > 300 && n <= 500) {
        console.log((n * 5)/100);
     } else if (n > 500){
        console.log((n * 7)/100);
     }
}

// 8.Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 
function circuleInSquare (){
let c = prompt ("длина окружности");
let p = prompt ("периметр квадрата");
c = Number (c);
p = Number (p);
if (c <= p){
    console.log("поместится");
}else {
    console.log("не поместится");
}
}
// 9.Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// // набранных баллов.
function questione(){
let questionOne = prompt (" выберите овощ\n"+
 "банан ананас картошка");
let ball = 0;
if (questionOne == "картошка" ) {
    ball++;
}
console.log(ball);
}

// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год. 
function date (){
    let dateOne = prompt ("первая дата");
    dateOne = Date(dateOne)
}



//модуль 1.3










// Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем
function wTF (){
let positiveNumber = 0;
let evenNumber = 0;
let noEvenNumber = 0;
let minusNumber = 0;
let nol = 0;
for (let n = 0; n <10 ; n++){
    let i = prompt ("введите число");
    i = Number(i);
    if (i > 0 ){
        positiveNumber++;
    } else if ( i % 2 == 0 ){
        minusNumber++;
    }
}
}