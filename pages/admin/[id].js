import FractalAnimation from "../../components/FractalAnimations";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import style from "../../styles/Admin.module.css";

export default function Admin() {
  const router = useRouter();
  const [id, setId] = useState();
  const containerRef = useRef();

  const quotes = {
    b4: [
      "Optimism is the faith that leads to achievement. ",
      "L'optimisme est la foi qui mène à la réussite.",
      "التفاؤل هو الإيمان الذي يؤدي إلى الإنجاز",
    ],
    b5: [
      "Hope is the last thing ever lost.",
      "L'espoir est la dernière chose jamais perdue.",
      "الأمل هو آخر شيء نضيعه على الإطلاق",
    ],
    b2: [
      "Awareness is the greatest agent for change.",
      "La sensibilisation est le plus grand agent de changement",
      "الوعي هو أعظم عامل للتغيير",
    ],
    b3: [
      "Care is the ultimate expression of love. ",
      "L'attention est l'expression ultime de l'amour.",
      "الرعاية هي التعبير المطلق عن الحب",
    ],
    a5: [
      "Respect yourself and others will respect you.",
      "Respectez-vous et les autres vous respecteront.",
      "احترم نفسك وسيحترمك الآخرين",
    ],
    b1: [
      "Where there is unity there is always victory.",
      "Là où il y a unité, il y a toujours victoire.",
      "حيث توجد الوحدة هناك دائما النصر.",
    ],
    a4: [
      "Solidarity was the movement that turned the direction of history",
      "La solidarité a été le mouvement qui a tourné le sens de l'histoire",
      "كان التضامن هو الحركة التي قلبت اتجاه التاريخ",
    ],
    a3: [
      "The only thing that will redeem mankind is cooperation.",
      "La seule chose qui rachètera l'humanité est la coopération.",
      "الشيء الوحيد الذي سيفدي البشرية هو التعاون",
    ],
  };
  useEffect(() => {
    const { id } = router.query;
    setId(quotes[id]);
  }, [router.query]);

  return (
    <>
      <div>
        <FractalAnimation />
        <section className={style.admin}>
          {id?.map(function (value) {
            return (
              <>
                <h1>{value}</h1>
                <br></br>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}
