// class Transport {
//   name;
//   speed = 0;
//   capacity;
//   constructor(name, speed, capacity) {
//     this.name = name;
//     this.speed = speed;
//     this.capacity = capacity;
//   }
//   start() {
//     return `${this.name} transport yurdi`;
//   }
//   stop() {
//     return `${this.name} nomli transport to'xtadi`;
//   }
// }
// // const transport1 = new Transport("bmw", 200, 4);
// // console.log(transport1.start());

// class Car extends Transport {
//   constructor(name, speed, capacity, fuelType) {
//     super(name, speed, capacity);
//     this.fuelType = fuelType;
//   }
//   driveMode(mode) {
//     switch (mode) {
//       case "sport":
//         console.log(`${mode} rejimiga ozgartirildi`);
//         break;
//       case "eco":
//         console.log(`${mode} rejimiga ozgartirildi`);
//         break;
//       case "comfort":
//         console.log(`${mode} rejimiga ozgartirildi`);
//         break;
//     }
//   }
// }
// // const car1 = new Car("bmw", 200, 4, "benzin");
// // (car1.driveMode("comfort"));


// class Airplane  extends Transport {
//     constructor(name, speed, capacity, altitude) {
//         super(name, speed, capacity);
//         this.altitude = altitude;
//       }
//       fly(){
//         console.log(`hozir ${this.altitude} feet balandligdamiz`)
//       }
// }
// // const plane =new Airplane("skyfall",300,100,16000)
// // plane.fly()


// class Ship   extends Transport {
//     constructor(name, speed, capacity, cargoCapacity) {
//         super(name, speed, capacity);
//         this.cargoCapacity = cargoCapacity;
//       }
//       sail(){
//         console.log(`hozir ${this.start()}`)
//       }
// }
// const ship1 =new Ship("vergin",300,200,100)
// // console.log(ship1);
// // ship1.sail()
