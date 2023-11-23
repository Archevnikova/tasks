
// 1.Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков

function funR ( i ){
    let letter = 0;
    let number = 0;
    let znak = 0;
    for( let n = 0; n < i.length; n++ ){
        console.log( i [n],"1234567890".includes( i[n] )  );
       if ( "1234567890".includes( i[n] )) {
        number ++;
       }else if ( "abcdefghijklmnopqrstuvwxyz".includes ( i [n] ) ){
        letter++;
       }
    }
    console.log( letter ) ;
}
// 3. Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания. 
//console.log("hello"== "helLo");
//console.log( "h".toUpperCase()== "H");
function sstring(){
let i = "строка";
console.log(i [3]);
i [3] = "а";
let a = i.replace( "о", "а" );
console.log( i.replace( "о", "а" ) );
}

// 4. Написать функцию, которая преобразует названия css стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text -align в textAlign
function camelCase(){
    let fs = [font-size];
    let bc = "background-color";
    let ta = "text-align";
    fs[5] = "S" 
    let S = fs.replace("s", "S");
    fs.splice(4,4);
    console.log(fs.replace("s", "S")) 

}
