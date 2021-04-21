//устаревшие методы
// var div = document.getElementById('playground')  //доступ к элементы по ид
// var p = document.getElementsByClassName('text')
// var h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1)

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var ul = document.querySelector('div#playground ul')
var input = document.querySelector('input') //доступ до input

console.log(input.value) //что находится в input
console.log(div.innerHTML) //.innerHTML показывает содержание div
console.log(p)
console.log(h1.textContent) //.textContent содержимое текста
console.log(ul)

h1.textContent = 'изменил при помощи JS'
div.innerHTML = '<h2 style="color: red;">New H2</h2>'