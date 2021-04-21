var divs = document.querySelectorAll('div')
var link = document.querySelector('a')


for (var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(event){
        event.stopPropagation //срабатывает один клик 
        console.log(this.getAttribute('id'))
    },)
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event){
    event.preventDefault() // ссылка не работает!
}