var carName = 'Ford'
var carYear = 2010
var personYear = 1990

function calculateAge(year) {
  var currentYear = 2018
  var result = currentYear - year
  return result
}

function checkAngLogAge(year) {
  if (calculateAge(year) < 10) {
    console.log('Возраст меньше 10 лет')
  } else {
    console.log('Возраст больше 10 лет')
  }
}

checkAngLogAge(carYear)
checkAngLogAge(personYear)