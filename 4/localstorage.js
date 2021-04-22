document.querySelector('button').addEventListener('click',function(event){
    var value = document.querySelector('input').value
    localStorage.setItem('header',value)   // ('название параметра', значение)
})

document.addEventListener('DOMContentLoaded', function(){
    var text = localStorage.getItem('header')
    document.querySelector('h1').textContent = text
})