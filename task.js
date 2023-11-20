// ■ Задания, в которых необходимо использовать WHILE.
// 1. Вывести # столько раз, сколько указал пользователь.
function grid(){
    let i = prompt("введите решетки");
    let count = 0;
    while (count > 0 ){
        count++;
        i = i + count;
    }
    console.log(i);
}
// 2. Пользователь ввел число, а на экран вывелись все числа
// от введенного до 0.

function nambers(){
    let n = Number(prompt("введите число"));
    let count = 0;
    while (count == 0){
        count --;
        n= n + count;
    }
    console.log(n);
}



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
    let inputt = document.querySelector (".in");
    let select = document.querySelector ("select");
    let out = document.querySelector (".out");
    let eur = 0.93;
    let uan = 36.04;
    let resalt = 0;
    if ( select.value === "eur"){
        resalt = inputt.value * eur;  
    }else {
         resalt =inputt.value * uan; 
    }
    
    out.textContent = resalt;
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
if (c <= p/4){
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
    dateOne = Date(dateOne);
    console.log (dateOne);
    let nextDay = dateOne.getDate()+1;
   // let nextDay = nextDay.setDate(day.getDate() + 1);
    console.log(nextDay)
}



//модуль 1.3

//1 Подсчитать сумму всех чисел в заданном пользователем
//диапазоне. 
function diapozon (){
let n = prompt("от");
let m = prompt("до");
let sum= 0;
n= Number (n);
m= Number (m);
for (let counter = n; counter <=m;counter++){
    sum = sum+counter;
    console.log(counter);
}
console.log("сумма",sum);
}
//2
//Запросить 2 числа и найти только наибольший общий
// делитель. 
function nod (){
    let one  = prompt("первое");
    let two = prompt("второе");
    one = Number(one);
    two = Number(two);
    while (one != 0 && two != 0 ){
        if (one > two){
            one = one % two ;
        }else {
            two = two % one
        }
    }
    console.log(one + two);               //выводит два числа?
}


//3.Запросить у пользователя число и вывести все делители 
//этого числа
function deviderF(){
    let i = prompt("ввести число");
    i = Number(i);
    let deviders =[];
    for (let devider= 1; devider <=i ; devider ++){
        if (i % devider ==0){
            deviders.push(devider);
            }
        
        }
    console.log(deviders);
}

//4.Определить количество цифр в введенном числе
function howManyNumbers (){
    let i = prompt("ввести число");
    i = Number(i);
    let count= 0;
    while(i !=0 ){
        i = Math.floor(i/10);    

       count++;
       console.log(i);
    }
    console.log(count);
}


//5. Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем
function wTF (){
let positiveNumber = 0;
let minusNumber = 0;
let nol = 0;
let evenNumber = 0;
let noEvenNumber = 0;
for (let n = 0; n <10 ; n++){
    let i = prompt ("введите число");
    i = Number(i);
    if (i > 0 ){
        positiveNumber++;
    } else if ( i < 0 ){
        minusNumber++;
    } else if (i ==0){
        nol++;
    }
     if (i % 2 == 0 ){
        evenNumber++;
    }else if (i %2 !=0){
        noEvenNumber++
    }
    }
    console.log(positiveNumber,minusNumber,nol,evenNumber,noEvenNumber);
}
// .6. Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.

function calculator(){
    while ( true ){
        let one  = prompt("первое");
        let two = prompt("второе");
        let znak = prompt("знак");
        one = Number(one);
        two = Number(two);
        if (znak == "+" ){
            console.log (one + two);
        } else if (znak == "-"){
            console.log (one - two);
        } else if (znak == "/"){   
            console.log(one / two);
        }else if (znak == "*" ){  
            console.log(one * two);
        }
        let i = prompt("решить еще один?");
        if (i == "no") {
            break;
            
        }
    }
}

function cal(){
    while ( true ){
        let one  = prompt("первое");
        let two = prompt("второе");
        let znak = prompt("знак");
        one = Number(one);
        two = Number(two);
        switch (znak){
            case "+":
                console.log(one + two);
                break;
            case "-":
                 console.log (one - two) ; 
                 break;  
            case "/":
                 console.log (one / two);
                 break;
            case "*":
                console.log (one * two);
                break;
        }
        let i = prompt("решить еще один?");
        if (i == "no") {
            break;
            
        }
    }
}

//7. Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифры числа и вывести результат (если
//     число 123456 сдвинуть на 2 цифры, то получится 345612)
// (количество цифр в числе минус - смещение )* 10)
function unwrap(){
let n = prompt("число");
n = Number(n);
let s = Number(prompt("смещение"));
let i = Math.floor(n/100);//тервые три
let lost = n % 10;//единицы
let penultimate = Math.floor((n % 100 ) /10 ) *10;//десятки
console.log("lost" + "penultimate"+i);
}

function unwrapTwo(){
let a = n;
let count= 0;
while(n !=0 ){            
    n = Math.floor(n/10);    //заберает последнюю цифру пока n не станет= 0
   count++;                  //и считает сколько раз он это сделал.Столько цифр в числе
   
}
 let resalt =(count - i)*10;
 console.log (Math.floor(a / resalt));
}


// 8. Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK. 
function week(){
    let i = 0;
    while(true){
        let day = prompt("Хотите увидеть следующий день?");
        if (day == "ok"){
            break;
        }
        let week = ["mon","tues","wedn","thurs","fri","satur","sun"];
            console.log(week[i]);
            i++;
            if (i == 7){
                i = 0;
            }

    }    
 } 

//9. Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.
function table (){
    result = 0;
    for (let one = 1; one <=10; one ++){
        for (let count = 1; count <= 10; count ++ ){
            result = one * count;
            console.log( `${one} * ${count} = ${result}` );
        }
    }
}
// 10. Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того
// что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили
//диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
function riddle(){
  let n = Number( prompt("загадай число от 0 до 100"));
  let centerRange = 0;
  let left = 0;
  let right = 100;
  console.log(left,right, centerRange);
    while (n != centerRange ){
        centerRange = Math.round((left + right)/2);
        if (n < centerRange){
            right = centerRange;
        }else if (n > centerRange){
            left = centerRange;
        }
        console.log(left,right, centerRange);
    }
        console.log (centerRange);
}  
    // 63>50 
    // от 50 до 100
    // (50+10)/2 = 75 цикл
    // 63 < 75
    // от 50 до 75
    // (50+75)/2 = 62
    // 62 < 63
    // от 62 до 75
    // (62 + 75)/2 = 68
    // 63< 68
    // от 62 до 68
    // (62 + 68)/2= 65
    // 63 < 65
    // от 62 до 65
    // (62 + 65)/2 = 63
    // 63 ==63
    // console.log();

    



    

    //     for (let range2 = 51; range2 <=100; range2 ++){ 
    //         let a = range2 / 2 ;
    //         };
    // } else ( n < range ){
        
    // }

    //     }

    //     console.log("Красавчик!");
    // }
    




