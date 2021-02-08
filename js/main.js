import {Dog} from './components/Dog.js'

const rexas = new Dog('Rexas', 'brown');
const tuzas = new Dog('Tuzas', 'black');


console.log(tuzas);



tuzas.standUp();
console.log(tuzas);

tuzas.walk(20);
console.log(tuzas);

tuzas.sitDown()
console.log(tuzas);

tuzas.walk(30);