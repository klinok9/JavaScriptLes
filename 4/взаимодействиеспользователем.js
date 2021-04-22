document.querySelector("#alert").addEventListener('click', function(){
    alert('вы успешно нажали кнопку!')
})
document.querySelector("#confirm").addEventListener('click', function(){
    var decision = confirm('нажать на кнопку?')
    if (decision) {
        alert('вы нажали на кнопку')
    }
})

document.querySelector("#promt").addEventListener('click', function(){
    var age = prompt('введите свой возраст')
    if (age >=18){
        console.log('доступ разрешен')
    }else {
        console.log('тебе нет 18!')
    }

})

