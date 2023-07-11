
import styles from "./CarsPage.module.css";

const Carspage = ({data}) => {
     return (
          <div className={styles.container}>
                {data.map((car) => (
                    <p key={car.id}>{car.name}</p>
               ))}
          </div>
     );
}

export default Carspage;
