
class Cars {
    constructor(speed, name) {
        this.speed = speed,
        this.name = name
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS_norm_speed(speed) {
        this.speed = speed * 1.6;
        return console.log(`Cars name is: ${this.name}. Cars speed is: ${this.speed}. In US mils cars speed is: ${this.speed / 1.6} miles`)
    }

    accelerate() {
        return console.log(`Plus speed ${this.speed += 30}`);
    }

    brake() {
        return console.log(`Minus speed ${this.speed -= 25}`);
    }
}

const ford = new Cars(120, `Ford`)

ford.accelerate(); 

ford.brake();

console.log(ford.speedUS); 

console.log(ford.speed); 

console.log(ford.speedUS); 
