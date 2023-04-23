import styles from "@/styles/Nav.module.css";

export default function Navbar() {
  return (
    <>
      <header className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.navbar_logo}>
            <img src="../favicon.ico" alt="Logo" />
          </div>
          <ul className={styles.navbar_links}>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#skills">Competences</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <img className={styles.tree1} src="../tree.webp" />
        <img className={styles.tree2} src="../tree.webp" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#52872d"
            d="M0,192L0,224L288,224L288,96L576,96L576,224L864,224L864,160L1152,160L1152,192L1440,192L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </header>
    </>
  );
}
