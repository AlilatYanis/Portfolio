import styles from "@/styles/Car.module.scss";
import Car from '../components/car'

export default function Mide() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src="./Project.png" />
        <Car />
      </div>
    </>
  );
}
