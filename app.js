
const os = require('os');
const fs = require('fs');

const genders = ["M", "F"]; 
const maleNames = ["Adam", "Arek", "Antek", "Andrzej", "Alojzy", "Albert", "Anatol"]; 
const femaleNames = ["Anna", "Agnieszka", "Alicja", "Aneta", "Agata", "Aldona", "Anita"];
const lastNames = ["Adamski", "Anderson", "Asnyk", "August", "Azorowicz", "Adler", "Ambroziewicz"];

function randChoice(arr) {
    element = Math.floor((Math.random()) * (arr.length-1)+0.7);
    return(arr[element]);
}

const people = [];

for (let i=0; i<20; i++) {
    let person = {};
    let gender = randChoice(genders);
    person.gender = gender;
    if (gender==="M") {
        person.name = randChoice(maleNames);
    } else {
        person.name = randChoice(femaleNames);
    }
    person.lastName = randChoice(lastNames);
    person.age = Math.floor((Math.random()) * (78-18)+18);
    person.email = person.name + '.' + person.lastName + '@onet.pl';
    people.push(person);
}

let data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
  });