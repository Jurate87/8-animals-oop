
class Cat {
    constructor (vardas, kailis) {
        this.name = vardas;
        this.furColor = kailis || 'black';
        this.sound = 'Miau miau';
        this.isStanding = false;
        this.isEating = true;
        this.isSleeping = false;
    
    }
    speak() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`Hey, my name is ${this.name}, my fur color is ${this.furColor} and I speak ${this.sound}!`);
    }

    standUp() {
        this.isStanding = false;
    }

    eat() {
        this.isEating = true;
    }

    toSleep() {
        if (this.isEating){
            console.log(`${this.name} is eating now, cannot sleep.`);
            return false;
        }
        
    }


}


export { Cat }