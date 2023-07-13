import carsData from "../../data/carsdata";
import CarsList from "../../components/templates/CarsList";
import { useRouter } from "next/router";

const Index = () => {

     const router = useRouter()
     const category = router.query.slugs || '';
     const Cars = carsData.filter((car) => car.category === category[0]);

     return (
          <CarsList data={Cars}/>
     );
}

export default Index;