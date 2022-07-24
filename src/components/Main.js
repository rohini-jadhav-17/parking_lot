import React, { useState, useEffect } from 'react';
import ParkingLot from '../lib/parking_lot';
import generateRegNo from '../utils/generateRegNo';

const Main = () => {
    const [parkingLot, setParkingLot] = useState(null);

    useEffect(() => {
      setParkingLot(new ParkingLot(3));
    }, [])
    
    const addToPark = (carId) => {
        parkingLot.parkCar(carId);
        console.log('Car is parked with id:' + carId);
    }
  return (
      <section >
          <button className='btn btn-success' onClick={() => addToPark(generateRegNo())}>PARK!</button>
      </section>
  )
}

export default Main;