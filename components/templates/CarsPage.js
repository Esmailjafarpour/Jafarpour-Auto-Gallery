
import styles from "./CarsPage.module.css";
import Card from "../module/Card";

const Carspage = ({data}) => {
     return (
          <div className={styles.container}>
                {data.map((car) => (
                    <Card key={car.id} {...car}/>
               ))}
          </div>
     );
}

export default Carspage;
