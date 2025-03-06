// class Car {
//     #brand;
//     #model;
//     speed;
//     isTrunkOpen = false;
//     constructor(carDetails) {
//         this.#brand = carDetails.brand;
//         this.#model = carDetails.model;
//         this.speed = 0;
//     };

//     displayInfo() {
//         console.log(`${this.#brand} ${this.#model} Speed = ${this.speed} km/h - Bagaj açık mı = ${this.isTrunkOpen}`);
//     };

//     go() {
//         if (this.isTrunkOpen === true) {
//             console.log("Car can't move");
//         }
//         else{
//             this.speed += 5
//         }
//         if (this.speed >= 200 ) {
//             console.log("Speed is already 200");
//             this.speed = 200;
//         } 
//     };

//     brake() {
//         this.speed += -5
//         if (this.speed <= 0 ) {
//             console.log("Speed is already 0");
//             this.speed = 0;
//         } 
//     };

//     openTrunk() {
//         if (this.speed <= 0 ) {
//             this.isTrunkOpen = true;
            
//         }else {
//             console.log("Trunk is open, car can't move");
//         }
//     };

//     // closeTrunk() {
//     //     this.speed += -5
//     //     if (this.speed <= 0 ) {
//     //         console.log("Speed is already 0");
//     //         this.speed = 0;
//     //     } 
//     // };
// };


// const car1 = new Car({
//     brand: 'Toyota',
//     model: 'Corolla'
// });

// const car2 = new Car({
//     brand: 'Tesla',
//     model: 'Model 3'
// });


// class RaceCar extends Car {
//     acceleration;
//     constructor(carDetails) {
//         super(carDetails);
//         this.acceleration = carDetails.acceleration;
//       }
//       go() {
//         this.speed += this.acceleration;
    
//         if (this.speed > 300) {
//           this.speed = 300;
//         }
//       }
//       openTrunk() {
//         console.log('Race cars do not have a trunk.');
//       }
    
//       closeTrunk() {
//         console.log('Race cars do not have a trunk.');
//       }
// };

// const raceCar = new RaceCar({
//     brand: 'McLaren',
//     model: 'F1',
//     acceleration: 20
//   });



// raceCar.go();
// raceCar.go();
// raceCar.go();
// raceCar.displayInfo();
// raceCar.openTrunk();
// raceCar.displayInfo();
// raceCar.brake();
// raceCar.displayInfo();










