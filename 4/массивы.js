var str = '1,2,3,4,5,6,7,8'

var array = str.split(',')  //делаем массив из строки(сепаратор)

// array.splice(1,2) //удаление элементов массива (порядк номер, количество)
array.splice(0,1,'11') //удаление первого элемента и добавление 11

var newArray = array.concat([1,2]) //клонирование массива и добавление (1,2)
console.log(array)
// console.log(array.reverse()) //меняет порядок массива
// var str1 = array.join(';') //из массива в строку(сепаратор)
// console.log(str1)