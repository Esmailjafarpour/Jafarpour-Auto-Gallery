import carsData from "../../data/carsdata";
import CarsList from "../../components/templates/CarsList";

const Suv = () => {

     const suvCars = carsData.filter((car) => car.category === "suv");

     return (
          <CarsList data={suvCars}/>
     );
}

export default Suv;
