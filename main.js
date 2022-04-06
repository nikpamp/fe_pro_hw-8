function carConstructor () {
    let objectConfig = {
        modelList: {
            model_1: "BMW",
            model_2: "Audi",
            model_3: "Opel",
        },
        bodyList: {
            body_1: "Sedan",
            body_2: "Hatchback",
            body_3: "Coupe",
        },
        colorList: {
            color_1: "Red",
            color_2: "Blue",
            color_3: "Green",
        },
        driveUnitList: {
            driveUnit_1: "Rear Wheel Drive",
            driveUnit_2: "Front Wheel Drive",
            driveUnit_3: "All-Wheel Drive",
        },
        transmissionList: {
            transmission_1: "Manual",
            transmission_2: "Automotive",
        }
    }

    let myCar = {};

    let carModel;
    do {
        carModel = prompt("Choose model from the list (BMW, Audi, Opel):");
    } while (!Object.values(objectConfig.modelList).includes(carModel));
    myCar.Model = carModel;
    
    let carBody;
    do {
        carBody = prompt("Choose type of body from the list (Sedan, Hatchback, Coupe):");
    } while (!Object.values(objectConfig.bodyList).includes(carBody));
    myCar.Body = carBody;

    let carColor;
    do {
        carColor = prompt("Choose color from the list (Red, Blue, Green):");
    } while (!Object.values(objectConfig.colorList).includes(carColor));
    myCar.Color = carColor;

    let carDriveUnit;
    do {
        carDriveUnit = prompt("Choose type of drive unit from the list (Rear Wheel Drive, Front Wheel Drive, All-Wheel Drive):");
    } while (!Object.values(objectConfig.driveUnitList).includes(carDriveUnit));
    myCar["Drive Unit"] = carDriveUnit;

    let carTransmission;
    do {
        carTransmission = prompt("Choose type of transmission from the list (Manual, Automotive):");
    } while (!Object.values(objectConfig.transmissionList).includes(carTransmission));
    myCar.Transmission = carTransmission;

    console.log(myCar);
}