// циклы
// 1. Вывести на экран циклом пять строк из нулей, причём каждая строка должна быть пронумерована.
function zero(){
    for (let i = 0;i < 5 ; i++){
        console.log(`${i} 00000`);                       //не работает
    }
    
} 
//2. Найти сумму ряда чисел от 1 до 100. Полученный результат вывести на экран.
function sumNumbers(){
    let summ = 0;
    let count = 1;
        while(count <= 100){                        
            summ = summ +count;
            count++;
        }
        console.log(summ);
    }
    

//3. Даны три числа. Вывести на экран «yes», если среди них есть одинаковые, иначе вывести «error».
function threeNumber(){
    let one = Number(prompt("число1"));
    let two = Number(prompt("число2"));
    let three = Number(prompt("число3"));
        if (one == two || two == three || one == three){
            console.log ("yes");
        }else {
            console.log("error");
        }

}
//4. Даны три числа. Вывести на экран «yes», если можно взять какие-то два из них и в сумме получить третье.
function numbers3(){
    let one = Number(prompt("число1"));
    let two = Number(prompt("число2"));
    let three = Number(prompt("число3"));
    if (one + two == three ||two + three == one || one + three == two){
        console.log("yes");
    }else{
        console.log("no");
    }
}
//5. Дано три числа. Найти количество положительных чисел среди них.
function positiveNumber(){
    let one = Number(prompt("число1"));
    let two = Number(prompt("число2"));
    let three = Number(prompt("число3"));
    let quantityPositive = 0;
    let count = 0;
    while (one > 0){                            //не работает
        count ++;
        console.log(quantityPositive + count);
    } 
}
//6. Вывести на экран все чётные значения в диапазоне от 1 до 497.
function even(){
for (let i = 1; i <=497 ; i ++ ){
    if (i % 2 ==0 ){
        console.log(i)
    }
}
}

//7. Посчитать сумму числового ряда от 0 до 14 включительно. Например, 0+1+2+3+…+14.
function sumNu(){
    let summa = 0;
    let count = 0;
    while ( count <= 14 ){
        summa = summa + count;
        count ++;
    }
    
    console.log(summa);
}
//8. Перемножить все на чётные значения в диапазоне от 0 до 9435.
function multiply(){
    let suM = 0;
    let count = 0;
    while( count <= 9435){
        count ++;
        if ( count % 2 == 0){
   
        }                    //не работает
    }
    
}
//9. Записать в массив все числа в диапазоне от 54 до 9184 кратные 5.
function massiv(){
    let i = 0;
    let count = 54;
    while (count <= 9184){
        count ++;
        if (count % 5 ==0 ){
            i= i+count;
            console.log ([i]);
        }
    }
}
//10. Построить таблицу умножения.

// 11. Выписать числа Фибоначчи от 1 до 15. Для начала, последовательность Фибоначчи – 
// это целочисленная последовательность, где следующая цифра равна сумме двух предыдущих.
// Например, n-ый член последовательности – это сумма (n-1) и (n-2).
//  Последовательность выглядит следующим образом: 0, 1, 1, 2, 3, 5, 8, 13…
function fibonachi (){
    for (let i = 1; i <= 15; i++){
        
    }
}