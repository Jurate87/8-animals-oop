class Pet {
    constructor (vardas, kailis) {
        this.name = vardas;
        this.furColor = kailis;
        this.sound = 'Miau au'
    }

    speak() {
        console.log(`${this.name}: ${this.sound}!`)
    }

    introduce() {
        console.log(`Hey, my name is ${this.name}, my fur color is ${this.furColor} and I speak ${this.sound}!`);
    }
}

export { Pet }