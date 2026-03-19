import explore from "../api/data/jindalHistory.json";
import useReveal from "./useReveal";

export default function ExploreSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="explore-Museum">
      <div className="explore-wrapper">

        {/* LEFT FULL IMAGE (static or optional reveal) */}
        <div className="explore-left">
          <img
            src={explore.leftImage.src}
            alt={explore.leftImage.alt}
          />
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="explore-right">

          {/* FLOATING FABRIC IMAGE */}
          <div className={`fabric-float reveal delay-2 ${visible ? "active" : ""}`}>
            <img
              src={explore.floatingImage.src}
              alt={explore.floatingImage.alt}
            />
          </div>

          <div ref={ref} className="explore-content">

            <h2 className={`explore-title reveal delay-1 ${visible ? "active" : ""}`}>
              {explore.title.main} <em>{explore.title.emphasis}</em><br />
              {explore.title.sub}
            </h2>

            {explore.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`reveal ${visible ? "active" : ""}`}
                style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
              >
                {text}
              </p>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
