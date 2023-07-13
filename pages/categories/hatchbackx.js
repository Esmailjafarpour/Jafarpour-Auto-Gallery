import carsData from "../../data/carsdata";
import CarsList from "../../components/templates/CarsList";

const Hatchback = () => {

     const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

     return (
          <CarsList data={hatchbackCars}/>
     );
}

export default Hatchback;
