import history from "../api/data/historySection.json";
import useReveal from "./useReveal";

export default function HistorySection() {
  const [ref, visible] = useReveal();

  return (
    <section className="history-section">
      <div className="history-container" ref={ref}>

        {/* LEFT CONTENT */}
        <div className="history-content">

          <span className={`history-eyebrow reveal delay-1 ${visible ? "active" : ""}`}>
            {history.eyebrow}
          </span>

          <h2 className={`history-title reveal delay-2 ${visible ? "active" : ""}`}>
            {history.title.number} <em>{history.title.emphasis}</em><br />
            {history.title.main}
          </h2>

          <p className={`history-desc reveal delay-3 ${visible ? "active" : ""}`}>
            {history.description}
          </p>

          <a
            href={history.button.link}
            className={`history-btn reveal delay-4 ${visible ? "active" : ""}`}
          >
            {history.button.label} <span>→</span>
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="history-image">
          <img
            src={history.image.src}
            alt={history.image.alt}
          />
        </div>

      </div>
    </section>
  );
}
