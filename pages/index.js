import { useState } from "react";
import style from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Home() {
  const [lang, setLang] = useState("eng");
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  return (
    <>
      <section
        style={{ display: selected ? "none" : "flex" }}
        className={style.modal}
      >
        <section className={style.container}>
          <h1>Select your prefered language</h1>
          <div className={style.gridModal}>
            <button
              onClick={() => {
                setLang("eng");
                setSelected(true);
              }}
            >
              English
            </button>
            <button
              onClick={() => {
                setLang("fr");
                setSelected(true);
              }}
            >
              Français
            </button>
            <button
              onClick={() => {
                setLang("arab");
                setSelected(true);
              }}
            >
              عربي
            </button>
          </div>
        </section>
      </section>
      <section>
        <section className={style.grids} id="grids">
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("minecraft/ai").style.display = "block";
            }}
          >
            A3 Cooperation
          </div>
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("minecraft/ai").style.display = "block";
            }}
          >
            A4 Solidarity
          </div>
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("minecraft/ai").style.display = "block";
            }}
          >
            A5 Respect
          </div>
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("minecraft/ai/scratch").style.display =
                "block";
            }}
          >
            B1 Unity
          </div>
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("flappy/ai/scratch/art").style.display =
                "block";
            }}
          >
            B2 Awareness
          </div>
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("flappy/ai/scratch/art").style.display =
                "block";
            }}
          >
            B3 Care
          </div>
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("last").style.display = "block";
            }}
          >
            B4 Optimism
          </div>
          <div
            onClick={() => {
              document.getElementById("grids").style.display = "none";
              document.getElementById("last").style.display = "block";
            }}
          >
            B5 Hope
          </div>
        </section>
        <div className={style.background}>
          <section
            className={style.sections}
            id="minecraft/ai"
            style={{ display: "none" }}
          >
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://www.typing.com/student/lesson/359/j-f-and-space"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://www.typing.com/student/lesson/359/j-f-and-space"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://www.typing.com/student/lesson/359/j-f-and-space"
                  );
                }
              }}
            >
              <Image
                className={style.image}
                src="/images/typingcom.png"
                alt="Typing"
                width={70}
                height={70}
              />
              <span className={style.level}>
                <h1>Level 1</h1>
                <h2>Typing</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=en-US"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=ar-SA"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=fr-FR"
                  );
                }
              }}
            >
              <Image
                src="/images/minecraft.png"
                alt="Minecraft"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 2</h1>
                <h2>Minecraft</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=en-US"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=ar-SA"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=fr-FR"
                  );
                }
              }}
            >
              <Image
                className={style.image}
                src="/images/ai.jpg"
                alt="AI"
                width={70}
                height={70}
              />
              <span className={style.level}>
                <h1>Level 3</h1>
                <h2>Artificial Intelligence</h2>
              </span>
            </div>
          </section>
          <section
            className={style.sections}
            id="minecraft/ai/scratch"
            style={{ display: "none" }}
          >
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=en-US"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=ar-SA"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=fr-FR"
                  );
                }
              }}
            >
              <Image
                src="/images/minecraft.png"
                alt="Minecraft"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 1</h1>
                <h2>Minecraft</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=en-US"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=ar-SA"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=fr-FR"
                  );
                }
              }}
            >
              <Image
                className={style.image}
                src="/images/ai.jpg"
                alt="AI"
                width={70}
                height={70}
              />
              <span className={style.level}>
                <h1>Level 2</h1>
                <h2>Artificial Intelligence</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                }
              }}
            >
              <Image
                src="/images/scratch.png"
                alt="Scratch"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 3</h1>
                <h2>Scratch</h2>
              </span>
            </div>
          </section>
          <section
            className={style.sections}
            id="flappy/ai/scratch/art"
            style={{ display: "none" }}
          >
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=en-US"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=ar-SA"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=fr-FR"
                  );
                }
              }}
            >
              <Image
                src="/images/minecraft.png"
                alt="Minecraft"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 1</h1>
                <h2>Minecraft</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=en-US"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=ar-SA"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://studio.code.org/s/oceans/lessons/1/levels/1?lang=fr-FR"
                  );
                }
              }}
            >
              <Image
                src="/images/ai.jpg"
                alt="AI"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 2</h1>
                <h2>Artificial Intelligence</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                }
              }}
            >
              <Image
                src="/images/scratch.png"
                alt="Scratch"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 3</h1>
                <h2>Scratch</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push("https://art.kano.me/challenges/basic");
                } else if (lang == "arab") {
                  router.push("https://art.kano.me/challenges/basic");
                } else if (lang == "fr") {
                  router.push("https://art.kano.me/challenges/basic");
                }
              }}
            >
              <Image
                src="/images/art.png"
                alt="SimpleArt"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 4</h1>
                <h2>Simple Art</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push("https://me.codejika.org/rocket/C1/P0/T0");
                } else if (lang == "arab") {
                  router.push("https://art.kano.me/challenges/basic");
                } else if (lang == "fr") {
                  router.push("https://art.kano.me/challenges/basic");
                }
              }}
            >
              <Image
                src="/images/html.png"
                alt="HTMLCSSJAVASCRIPT"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 5</h1>
                <h2>HTML, CSS, Javscript</h2>
              </span>
            </div>
          </section>
          <section
            className={style.sections}
            id="last"
            style={{ display: "none" }}
          >
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=en-US"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=ar-SA"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://studio.code.org/s/aquatic/lessons/1/levels/1?lang=fr-FR"
                  );
                }
              }}
            >
              <Image
                src="/images/minecraft.png"
                alt="Minecraft"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 1</h1>
                <h2>Minecraft</h2>
              </span>
            </div>

            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                } else if (lang == "arab") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                } else if (lang == "fr") {
                  router.push(
                    "https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
                  );
                }
              }}
            >
              <Image
                src="/images/scratch.png"
                alt="Scratch"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 2</h1>
                <h2>Scratch</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push("https://art.kano.me/challenges/basic");
                } else if (lang == "arab") {
                  router.push("https://art.kano.me/challenges/basic");
                } else if (lang == "fr") {
                  router.push("https://art.kano.me/challenges/basic");
                }
              }}
            >
              <Image
                src="/images/art.png"
                alt="SimpleArt"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 3</h1>
                <h2>Simple Art</h2>
              </span>
            </div>
            <div
              onClick={() => {
                if (lang == "eng") {
                  router.push("https://me.codejika.org/rocket/C1/P0/T0");
                } else if (lang == "arab") {
                  router.push("https://art.kano.me/challenges/basic");
                } else if (lang == "fr") {
                  router.push("https://art.kano.me/challenges/basic");
                }
              }}
            >
              <Image
                src="/images/html.png"
                alt="HTMLCSSJAVASCRIPT"
                width={70}
                height={70}
                className={style.image}
              />
              <span className={style.level}>
                <h1>Level 4</h1>
                <h2>HTML, CSS, Javscript</h2>
              </span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
