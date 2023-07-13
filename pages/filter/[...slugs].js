
import { useRouter } from "next/router";
import carsData from "../../data/carsdata";
import Card from "../../components/module/Card";
import CarsList from "../../components/templates/CarsList";

const FilteredCars = () => {

     const router = useRouter();
     const [min , max] = router.query.slugs || [] ;
     const filteredData = carsData.filter( (item) => (item.price > min && item.price < max))
     
     if (!filteredData.length) return <h1>Not Found</h1>
     return <CarsList data={filteredData}/>
     
}

export default FilteredCars;
