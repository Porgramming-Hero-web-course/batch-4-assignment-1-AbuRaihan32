    <!-- ! Why Type Guards are Necessary and Types of Type Guards -->

    Type Guards in TypeScript are tools that help ensure the correct type of a variable, making the code safer and reducing type-related errors.

    <!-- * Why Type Guards Are Necessary: -->

    1. Type Assurance: Type Guards make sure we’re working with the expected type before performing specific operations.

    2. Runtime Safety: They prevent runtime errors by verifying types in advance.
    
    3. Code Readability: Using Type Guards makes code easier to read and understand.

    
    <!-- ? Types of Type Guards: -->

        1. typeof Type Guard: Used for checking primitive types like string and number.

            function doubleValue(input: string | number) {
                if (typeof input === 'number') {
                    return input * 2;
                } else if (typeof input === 'string') {
                    return parseFloat(input) * 2;
                }
                return null;
            }


        2. instanceof Type Guard: Used to check the class of an object.
                
                class Dog {
                    bark() {
                        console.log("Woof!");
                    }
                }

                class Cat {
                    meow() {
                        console.log("Meow!");
                    }
                }

                function makeNoise(animal: Dog | Cat) {
                    if (animal instanceof Dog) {
                        animal.bark();
                    } else if (animal instanceof Cat) {
                        animal.meow();
                    }
                }

        3. in Type Guard: Used to check if an object has a specific property.
        
            type Fish = { swim: () => void };
            type Bird = { fly: () => void };

            function move(animal: Fish | Bird) {
                if ('swim' in animal) {
                    animal.swim();
                } else if ('fly' in animal) {
                    animal.fly();
                }
            }

        
        
        4. Custom Type Guard: Allows checking types based on custom conditions.

            type Car = { drive: () => void };
            type Boat = { sail: () => void };

            function isCar(vehicle: Car | Boat): vehicle is Car {
                return (vehicle as Car).drive !== undefined;
            }

            function move(vehicle: Car | Boat) {
                if (isCar(vehicle)) {
                    vehicle.drive();
                } else {
                    vehicle.sail();
                }
            }

        Type Guards make TypeScript code safer, more accurate, and easier to understand.