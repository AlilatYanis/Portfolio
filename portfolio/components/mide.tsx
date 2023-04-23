import { useState, useEffect } from "react";
import styles from "@/styles/Mide.module.css";

export default function Mide() {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthDate: Date = new Date("2004-09-20");
    const today: Date = new Date();
    const ageInMilliseconds: number = today.getTime() - birthDate.getTime();
    const ageInYears: number = Math.floor(
      ageInMilliseconds / 1000 / 60 / 60 / 24 / 365
    );
    setAge(ageInYears);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Bonjour, je suis</p>
        <img src="../Name.png" alt="Name" className={styles.image} />
        <p className={styles.text}>
          Je suis un developpeur passionne et enthousiaste en pleine formation
          en informatique. J'ai acquis une solide base de connaissances en
          programmation et en developpement web. Je developpe mes competences en
          utilisant des technologies modernes et en resolvant des defis de
          programmation en dehors de mon cursus. Je suis toujours en train de me
          perfectionner pour devenir un developpeur experimente.
        </p>
        <p>Age: {age}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5d5b5c"
            d="M0,224L0,128L288,128L288,160L576,160L576,224L864,224L864,64L1152,64L1152,192L1440,192L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
