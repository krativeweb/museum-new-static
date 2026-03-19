import explore from "../api/data/exploreSection.json";
import useReveal from "./useReveal";

export default function ExploreSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="explore-Museum">
      <div className="explore-wrapper">

        {/* LEFT FULL IMAGE (static) */}
        <div className="explore-leftanother">
          <img
            src={explore.leftImage.src}
            alt={explore.leftImage.alt}
          />
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="explore-right exex">
          <div ref={ref} className="explore-contenttwo">

            <span className={`explore-eyebrow reveal delay-1 ${visible ? "active" : ""}`}>
              {explore.eyebrow}
            </span>

            <h2 className={`explore-title reveal delay-2 ${visible ? "active" : ""}`}>
              {explore.title.main} <em>{explore.title.emphasis}</em><br />
              {explore.title.sub}
            </h2>

            {explore.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`reveal delay-3 ${visible ? "active" : ""}`}
                style={{ transitionDelay: `${0.6 + i * 0.15}s` }}
              >
                {text}
              </p>
            ))}

            <a
              href={explore.button.link}
              className={`explore-link reveal delay-4 ${visible ? "active" : ""}`}
            >
              {explore.button.label} <span>→</span>
            </a>

          </div>

          {/* FLOATING FABRIC IMAGE (optional animation) */}
          <div className={`fabric-float reveal delay-2 ${visible ? "active" : ""}`}>
            <img
              src={explore.floatingImage.src}
              alt={explore.floatingImage.alt}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
