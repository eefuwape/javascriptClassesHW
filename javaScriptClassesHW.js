// class Cat

class Cat {

    constructor (name, size, skin) {
        this.name = name
        this.size = size
        this.skin = skin
    }

    getSpeed() {
        return this.size === 'Small' ? `${this.name} is fast.`
        : this.size === 'Medium' ? `${this.name} is fastest.`
        : this.size === 'Large' ? `${this.name} is faster.`
        : 'Enter a valid size.'
    }

    getStrenth() {
        return this.size === 'Small' ? `${this.name} is weak.`
        : this.size === "Medium" ? `${this.name} is fairly strong.`
        : this.size === "Large" ? `${this.name} is very strong.`
        : 'Enter a valid size'
    }

    displayInfo() {
        return this.size === 'Small' ? `${this.name} has ${this.skin} on its fur. It is also fast, and can be a pet`
        : this.size === 'Medium' ? `${this.name} has ${this.skin} on its fur. It is the fastest cat and is wild.`
        : this.size === 'Large' ? `${this.name} has ${this.skin} on its fur. It is one of the faster cats and is wild.` 
        : 'Enter a valid size'
    }
}

let cat1 = new Cat('Kitty Cat', 'Small', 'Blotches')
let cat2 = new Cat('Tiger', 'Large', 'Stripes')
let cat3 = new Cat('Cheetah', 'Medium', 'Spots')

console.log(cat1.displayInfo())
console.log(cat1.getSpeed())
console.log(cat1.getStrenth())

console.log(cat2.displayInfo())
console.log(cat2.getSpeed())
console.log(cat2.getStrenth())

console.log(cat3.displayInfo())
console.log(cat3.getSpeed())
console.log(cat3.getStrenth())

// Class Pirate

class Pirate {
    constructor (name, treasure, ship) {
        this.name = name
        this.treasure = treasure
        this.ship = ship
    }

    getLoot() {
        return 'Give me your treasure or I\'ll make you you walk the plank!'
    }

    getPirateInfo() {
        return `This pirate ${this.name}'s favorite treasure is ${this.treasure}, and sails on the ${this.ship}.`
    }

    retreat() {
        return "Retreat!! We'll live to loot another day!"
    }
}

let pirate1 = new Pirate('Jack Sparrow', 'Black Pearl', 'Black Pearl')
let pirate2 = new Pirate('Hector Barbosa', 'Gold', 'Black Pearl')
let pirate3 = new Pirate('Billy Turner', 'Unknown', 'Black Pearl')

let blackPearl = [pirate1, pirate2, pirate3]

let pirate4 = new Pirate('Monkey D. Luffy', 'Food', 'Jolly Roger')
let pirate5 = new Pirate('Roronoa Zoro', 'Swords', 'Jolly Roger')
let pirate6 = new Pirate('Nami', 'Gold', 'Jolly Roger')

let jollyRoger = [pirate4, pirate5, pirate6]

blackPearl.forEach(element => {
    console.log(element)
});

jollyRoger.forEach(element => {
    console.log(element)
});