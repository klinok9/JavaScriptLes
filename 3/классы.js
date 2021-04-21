var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red') // добавление класса 
box2.classList.remove('blue') //удаление класса blue
var hasClass = box2.classList.contains('blue') //содержит box2 класс blue
console.log(hasClass)
