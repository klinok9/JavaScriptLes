var a = document.querySelector('a')

a.setAttribute('href', 'https:ya.ru') //изменение ссылки 
a.textContent = 'Yandex' //изменение текста

console.log(a.getAttribute('href')) //получение ссылки
console.log(a.getAttribute('title')) //title