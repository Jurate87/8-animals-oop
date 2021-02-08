import {Dog} from './components/Dog.js'
import {Cat} from './components/Cat.js';


const tuzas = new Dog('Tuzas', 'black');


const gizmo = new Cat('Gizmo', 'black')

console.log(gizmo);

gizmo.speak();
gizmo.introduce();
gizmo.standUp();
gizmo.eat();
gizmo.toSleep();