import React from 'react';
import { useRouter } from "next/router";
import carsData from "../../data/carsdata";
import CarDetails from "../../components/templates/CarDetails";

const CarDetail = () => {
     const router = useRouter()
     const {carId} = router.query
     const carDetails = carsData[carId - 1]
     return (
          <div>
               <CarDetails {...carDetails}/>
          </div>
     );
}

export default CarDetail;
