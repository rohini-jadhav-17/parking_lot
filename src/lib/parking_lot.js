import Car from "./car";

class ParkingLot {
    slots = [];

    // initialize parking lot with given parking size
    constructor(parking_size) {
        this.slots = new Array(parking_size).fill(null);
    }

    // to park car
    parkCar(carId, color){
        console.log(`Parking car : ${carId}`);
        // check slot is available or not
        if(this.slots.every((slot)=> slot!==null))
            return false;

        for(let i=0; i<=this.slots.length; i++){
            // search for the nearest slot using binary search algorithm/ binary heap
            const slot = this.slots[i];
            // slot is available generate car instance with reg no and color
            if(slot === null){
                let car = new Car(carId, color);
                this.slots[i] = car;
                return true;
            }
            else {
                throw new Error('Sorry, parking lot is full');
            }
        }
    }

}
export default ParkingLot;