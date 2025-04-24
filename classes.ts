class Vehicle{
    drive(): void {
        console.log('vroom vroom');
    }
    honk(): void {
        console.log('beep beep');
    }
}

class Car extends   Vehicle{
    drive(): void {
        console.log('vroom vroom, I am a car');
    }
    honk(): void {
        console.log('beep beep, I am a car');
    }
}

const car = new Car(); 
car.drive(); // vroom vroom
car.honk(); // beep beep
// The above code defines a class named Vehicle with a method drive that logs 'vroom vroom' to the console.