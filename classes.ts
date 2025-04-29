class Vehicle{

    protected honk(): void {
        console.log('beep beep');
    }

    constructor(public color:string, public wheels:number){
        this.color = color;
        this.wheels = wheels;
        console.log(`This vehicle is ${color} and has ${wheels} wheels`);
        
    }
}

class Car extends Vehicle{
    private drive(): void {
        console.log('vroom vroom, I am a car');
        this.honk(); // Call the protected method from the parent class
    }
    startDriving(): void {
        this.drive(); // Call the private method from within the class
    }
}

const car = new Car('red', 4); 
car.startDriving(); // vroom vroom
// The above code defines a class named Vehicle with a method drive that logs 'vroom vroom' to the console.