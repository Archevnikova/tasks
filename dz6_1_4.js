// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.
function one (a,b){
    if (a < b){
        return -1;
    }else if (a > b ){
        return 1;
    }else if (  a == b ){}
        return 0;
}
//2. Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial2 (){
    let n = Number(prompt("ввведите число"));
    let fac = 1;
    for ( let i = 1; i <= n; i++){
        fac = i * fac;
    }
    return fac;
}
//5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.
function perfect( n ){
    
    let remains = [];  //остаток от деления
    for (let i =1 ; i <= n-1; i++){
        if ( n % i ==0 ){ 
            remains. push (i);
        } 
    
        }
        console.log(remains);
        let sum = remains.reduse()
    }

