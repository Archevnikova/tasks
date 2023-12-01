let user={
    name:"John",
    surname:"Smit",
};
console.log(user.name);


// Создать объект, описывающий прямоугольник (хранит координаты левой верхней 
// правой нижней точек), и написать следующие функции для работы с таким объектом.
let rectangle ={
    lefTop: [ 10, 50],
    rightButton:[50, 10],
};

// 1. Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).
function printInfo ( rectangle ){
    console.log(rectangle.lefTop,rectangle.rightButton);
}
printInfo(rectangle);

// 2. Функция принимает объект-прямоугольник и возвращает
// его ширину.

function printWidth( rectangle){
    return (rectangle.rightButton[0] - rectangle.lefTop[0]);
}
console.log(printWidth(rectangle));

// 3. Функция принимает объект-прямоугольник и возвращает
// его высоту.

function printHeight (rectangle){
    return (rectangle.lefTop[1]- rectangle.rightButton[1]);
}
console.log(printHeight(rectangle));

// 4. Функция принимает объект-прямоугольник и возвращает
// его площадь.

function printSquare( rectangle){
    return (printWidth (rectangle) * printHeight(rectangle));
}
console.log(printSquare(rectangle));

// 5. Функция принимает объект-прямоугольник и возвращает
// его периметр.
function setPerimeter(rectangle){
    return ((printWidth(rectangle))+(printHeight(rectangle)))*2;
}
console.log(setPerimeter(rectangle));

// 6. Функция изменения шириныпрямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// ширину.
function setWidth( rectangle, i ){
    rectangle.rightButton[0] += i;
}
setWidth(rectangle, 1);
console.log(printWidth (rectangle) );            //Ппочему выводим printWidth??

// 7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// высоту.
function setHeight( rectangle,n ){
    rectangle.lefTop[1] += n;
}
setHeight(rectangle, 15);
console.log(printHeight(rectangle));

// 8. Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.

function changeWidthHeight( rectangle, i, n){
    rectangle.rightButton[0] += i;
    rectangle.lefTop[1] += n;
                   
}
console.log(printWidth(rectangle), printHeight(rectangle));

// 9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его
// сдвинуть.

function offsetRectangle( rectangle,i){
    
    rectangle.rightButton[0] += i;
    
}
console.log(setWidth(rectangle, 3));                     //Почему выводит 41?
// 10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его
// сдвинуть.

// 11. Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.

// 12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и
// координаты точки.

function inside(rectangle , x, y ){
    if ((rectangle.lefTop[0] > x) && (rectangle.rightButton[0] > x) &&(rectangle.lefTop[1]> y)&& (rectangle.rightButton[1]< y )){
        console.log("находится");
    }else {
        console.log("не находится");
    }

}