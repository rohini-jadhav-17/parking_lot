
class ParkingLot {
    slots = [];
    carDetails = {
        carRegNo : '',
        carColor : '',
        status: ''
    }

    // initialize parking lot with given parking size
    constructor(parking_size) {
        this.slots = new Array(parking_size).fill(null);
        this.slots = this.slots.map(item => {
            return { ...this.carDetails }
        }); 
    }

    // to park car
    parkCar(carId, color){
        console.log(`Parking car : ${carId}`);
        // check slot is available or not
        if(this.slots.every((slot)=> slot.status !== ''))
            throw new Error('Sorry, parking lot is full');

        for(let i=0; i<=this.slots.length; i++){
            // search for the nearest slot using binary search algorithm/ binary heap
            const slot = this.slots[i];
            // slot is available generate car instance with reg no and color
            if(!slot.status){
                slot.carRegNo = carId;
                slot.carColor = color;  
                slot.status = 'fill';              
                break;
            }            
        }
        console.log(this.slots);
    }

    leaveCar(carId) {
        console.log(`Leaving car: ${carId}`);
        if (this.slots.every((slot) => slot.carRegNo !== carId)) {
            throw new Error('Car already left or there is no such car in parking lot!!');
        }

        for (let i = 0; i <= this.slots.length; i++) {
            const slot = this.slots[i];

            if (slot.carRegNo === carId) {
                slot.carRegNo = '';
                slot.status = ''; 
                slot.carColor = '';   
                break;
            }
        }
        return this.slots;
    }

    getCarsWithSameColor(color) {
        if (this.slots.length > 0) {
            let sameColoredCarsArray = [];
            for (let i = 0; i < this.slots.length; i++) {
                const slot = this.slots[i];
                if (slot.carColor.toLowerCase() === color.toLowerCase()) {
                    sameColoredCarsArray.push(slot.carRegNo);
                }
            }
            return sameColoredCarsArray.join(', ');
        }
        else {
            throw new Error('parking lot is empty!!');
        }
    }

    getSlotByCarNumber(carId){
        if (this.slots.length > 0) {
            let slotByCarNoArray = [];
            for (let i = 0; i < this.slots.length; i++) {
                const slot = this.slots[i];
                if (slot.carRegNo === carId) {
                    slotByCarNoArray.push(i);
                }
            }
            return slotByCarNoArray.join(', ');
        }
        else {
            throw new Error('parking lot is empty!!');
        }
    }
    getSlotsWithSameColorCar(color){
        if (this.slots.length > 0) {
            let slotWithSameColorArray = [];
            for (let i = 0; i < this.slots.length; i++) {
                const slot = this.slots[i];
                if (slot.carColor.toLowerCase() === color.toLowerCase()) {
                    slotWithSameColorArray.push(i);
                }
            }
            return slotWithSameColorArray.join(', ');
        }
        else {
            throw new Error('parking lot is empty!!');
        }
    }

}
export default ParkingLot;