import { SetStateAction, useState } from "react";
import styles from "@/styles/Comp.module.css";

//Name = Name of the Card
//img = picture of the name
//link = link of the card
//bgColor = Background of the card
//colorText = Color of the name
// Language information
const badgesData_language = [
  {
    name: "TypeScript",
    img: "../badge/language/TypeScript.webp",
    link: "#",
    bgColor: "#f9b234",
    colorText: "red",
  },
  {
    name: "JavaScript",
    img: "../badge/language/js.png",
    link: "#",
    bgColor: "#f9b234",
    colorText: "red",
  },
  {
    name: "Python",
    img: "../badge/language/python.png",
    link: "#",
    bgColor: "#f9b234",
    colorText: "red",
  },
  {
    name: "Php",
    img: "../badge/language/php.png",
    link: "#",
    bgColor: "#f9b234",
    colorText: "red",
  },
  {
    name: "SQL",
    img: "../badge/language/database.png",
    link: "#",
    bgColor: "#f9b234",
    colorText: "red",
  },
  {
    name: "C++",
    img: "../badge/language/C++.png",
    link: "#",
    bgColor: "#f9b234",
    colorText: "red",
  },
  {
    name: "C#",
    img: "../badge/language/Csharp.png",
    link: "#",
    bgColor: "#f9b234",
    colorText: "red",
  },
];

// Logiciel information
const badgeData_Logiciel = [
  {
    name: "Git",
    img: "../badge/logiciel/git.png",
    link: "#",
    bgColor: "#347bf9",
    colorText: "blue",
  },
  {
    name: "Postman",
    img: "../badge/logiciel/postman.png",
    link: "#",
    bgColor: "#347bf9",
    colorText: "blue",
  },
  {
    name: "Puppeter",
    img: "../badge/logiciel/puppeteer.png",
    link: "#",
    bgColor: "#347bf9",
    colorText: "blue",
  },
  {
    name: "Unity",
    img: "../badge/logiciel/Unity.png",
    link: "#",
    bgColor: "#347bf9",
    colorText: "blue",
  },
  {
    name: "Unreal Engine",
    img: "../badge/logiciel/Unreal_Engine.png",
    link: "#",
    bgColor: "#347bf9",
    colorText: "blue",
  },
  {
    name: "Figma",
    img: "../badge/logiciel/Figma.png",
    link: "#",
    bgColor: "#347bf9",
    colorText: "blue",
  },
  {
    name: "Blender",
    img: "../badge/logiciel/Blender.png",
    link: "#",
    bgColor: "#347bf9",
    colorText: "blue",
  },
];

export default function Comp() {
  const [selectedText, setSelectedText] = useState("Language");
  const handleLanguageChange = (language: SetStateAction<string>) => {
    setSelectedText(language);
  };

  return (
    <>
      <div id="skills" className={styles.container}>
        <img src="../Comp.png" alt="Name" className={styles.image} />
        <div className={styles.double}>
          <div
            className={styles.mc_button}
            onClick={() => handleLanguageChange("Language")}
          >
            <p className={styles.title}>Language</p>
          </div>
          <div
            className={styles.mc_button}
            onClick={() => handleLanguageChange("Logiciel")}
          >
            <p className={styles.title}>Logiciel</p>
          </div>
        </div>
        <div>
          {selectedText === "Language" && ( // Language Section
            <div className={styles.pos}>
              <div className={styles.card}>
                {badgesData_language.map((badge) => (
                  <div className={styles.items}>
                    <a
                      href={badge.link}
                      className={styles.items_link}
                      style={{
                        color: `${badge.colorText}`,
                        transition: "color 0.5 ease",
                      }}
                    >
                      <div
                        className={styles.items_bg}
                        style={{ backgroundColor: `${badge.bgColor}` }}
                      ></div>

                      <div className={styles.items_title}>{badge.name}</div>
                      <div className={styles.items_date_box}>
                        <img src={badge.img} />
                        <p className={styles.items_date}>Projet Realise: {}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedText === "Logiciel" && ( // Logiciel Section
            <div className={styles.pos}>
              <div className={styles.card}>
                {badgeData_Logiciel.map((badge) => (
                  <div className={styles.items}>
                    <a
                      href={badge.link}
                      className={styles.items_link}
                      style={{
                        color: `${badge.colorText}`,
                        transition: "color 0.5 ease",
                      }}
                    >
                      <div
                        className={styles.items_bg}
                        style={{ backgroundColor: `${badge.bgColor}` }}
                      ></div>

                      <div className={styles.items_title}>{badge.name}</div>
                      <div className={styles.items_date_box}>
                        <img src={badge.img} />
                        <p className={styles.items_date}>Projet Realise: {}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#53201c"
            fill-opacity="1"
            d="M0,96L0,32L288,32L288,96L576,96L576,256L864,256L864,160L1152,160L1152,256L1440,256L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
