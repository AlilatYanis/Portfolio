import React from "react";
import styles from "../styles/Car.module.scss";

// definition of images and information to display
const slides = [
  {
    title: "Hyrule castle", // Titre
    image: "./castle.png", // picture
    lien: "/theForge", // link of project or page
    color: "#49B6FF", // color of Titre
  },
  {
    title: "Recraft",
    image: "./recraft.png",
    lien: "/theForge",
    color: "#49B6FF",
  },
  {
    title: "Calendrier", // Titre
    image: "./defietna.png", // picture
    lien: "/theForge", // link of project or page
    color: "#49B6FF", // color of Titre
  },
];

// function to retrieve the mouse position and animate the image
function useTilt(active: unknown) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: new DOMRect(),
      mouseX: 0,
      mouseY: 0,
    };

    let el: any = ref.current;

    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      if (!el) {
        return;
      }

      state.rect = el.getBoundingClientRect();

      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

// button function to go on the other slide
const slidesReducer = (state: any, event: any) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

// function to show slides
function Slide({ slide, offset }: any) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className={styles.slide}
      data-active={active}
      style={
        {
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        } as React.CSSProperties
      }
    >
      <a href={slide.lien}>
        <div
          className={styles.slideContent}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          <div className={styles.slideContentInner}>
            <h2
              className={styles.slideTitle}
              style={{
                color: `${slide.color}`,
              }}
            >
              {slide.title}
            </h2>
          </div>
        </div>
      </a>
    </div>
  );
}

// carousel complete
export default function Carrousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className={styles.div}>
      <div className={styles.slides}>
        <button onClick={() => dispatch({ type: "NEXT" })}>&#10094;</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}

        <button onClick={() => dispatch({ type: "PREV" })}>&#10095;</button>
      </div>
    </div>
  );
}
