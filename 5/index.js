var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var score = 0

$start.addEventListener('click',startGame)
$game.addEventListener('click', handleBoxClick)

function startGame(){
  
  $start.classList.add('hide') //после нажатия добавляется класс(hide) скрывает кнопку
  $game.style.backgroundColor = '#fff'  //после нажатия фон становится белым
  renderBox()
}

function handleBoxClick(event){
  if(event.target.dataset.box){
    renderBox() //создаем новый квадрат
    score++ //добавляем +1 в score
  }

}

function renderBox(){    //функция создает квадраты
  $game.innerHTML = ''
  var box = document.createElement('div') //создаем div
  box.style.height = box.style.width = '50px' //раземры квадрата
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'
  box.style.top = '50px'
  box.style.left = '70px'
  box.style.cursor = 'pointer' //делает курсор
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)
}