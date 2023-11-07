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





//модуль 1.2
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
// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100
function leapYear (){
    let i = prompt ("введите год");
    i = Number(i);
    if (i % 400 ==0 ) {
        console.log("год високосный");
        } else if (i % 4 ==0 && i %100 !==0) {
        console.log ("год високосный");
        } else {
        console.log ( "не високосный");
        }
}

//7.Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%. 
function paymentAmount(){
    let n = prompt ("сумма покупки");
    n = Number(n);
     if (n >=200 && n < 300){
        console.log (n%3);
     }
}

