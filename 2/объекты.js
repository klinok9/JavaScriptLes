var person = {
    name: 'Ivan',
    year: 1999,
    family: ['Elena', 'Igor'],
    car: {
        year: 2000,
        model: 'Ford'
    },
    howOld: function(){
        var age = 2018 - this.year //person.year
        console.log(age + ' years old')
    }
}

console.log(person.name) //Ivan
console.log(person['year']) //1999

person.year = 2000
console.log(person['year']) //2000
person.howOld()