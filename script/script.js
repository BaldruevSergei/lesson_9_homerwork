// задача 1. Калькулятор стоимости товаров: Создайте функцию, которая принимает цену товара и количество единиц, а затем возвращает общую стоимость.
function price(a,b){
    return a * b;
}
console.log(price(10,20));

// задача 2. Проверка на четность: Создайте функцию, которая определяет, является ли число четным и возвращает булевое значение.
function parity(number){
    return number % 2 === 0 ? true : false; 
}
console.log(parity(2));

// задача 3. Реверс строки: Напишите функцию, которая принимает строку и возвращает ее в обратном порядке (reverse использовать нельзя).
function revers(message){
    let charArray = message.split('');
        for(let i=0; i<Math.floor(charArray.length/2);i++) {

        let tmp = charArray[i];
        charArray[i] = charArray[charArray.length -1 -i];
        charArray[charArray.length -1 - i] = tmp;
        }  
        return charArray.join(''); 
}
console.log(revers("Hello word"));

// задача 4. Конвертер температуры: Создайте функцию для конвертации температуры из градусов Цельсия в градусы Фаренгейта.
function temperature(...args) {
    let result = [];
    for(elem of args) {
         result.push((elem*1.8) + 32);
    }
    return result;
   
}
console.log(temperature(0,-100,-40,40,3));
