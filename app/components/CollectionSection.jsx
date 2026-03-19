"use client";

import collection from "../api/data/collectionSection.json";
import useReveal from "./useReveal";
import { useRouter } from "next/navigation"; // Optional: use Next.js router for smoother transitions

export default function CollectionSection() {
  const [ref, visible] = useReveal();
  const router = useRouter();

  const handleItemClick = (title) => {
    // Check if the title is ARTISTS (case-insensitive for safety)
    if (title.toLowerCase() === "artists") {
      window.location.href = "./artists";
      // or router.push("/artists");
    } else {
      window.location.href = "./collections";
      // or router.push("/collections");
    }
  };

  return (
    <section className="collection-section">
      <div className="collection-container" ref={ref}>

        {/* LEFT CONTENT */}
        <div className="collection-left">

          <span className={`collection-eyebrow reveal delay-1 ${visible ? "active" : ""}`}>
            {collection.eyebrow}
          </span>

          <h1 className="collection-title">
            {collection.titleLines.map((line, i) => (
              <span
                key={i}
                className={`reveal ${visible ? "active" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
              >
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className={`collection-desc reveal delay-3 ${visible ? "active" : ""}`}>
            {collection.description}
          </p>

          <a
            href={collection.button.link}
            className={`collection-btn reveal delay-4 ${visible ? "active" : ""}`}
          >
            {collection.button.label} <span>→</span>
          </a>
        </div>

        {/* RIGHT LIST */}
        <div className="collection-right">
          <ul className="collection-list">
            {collection.items.map((item, i) => (
              <li
                key={i}
                className={`collection-item reveal ${visible ? "active" : ""}`}
                style={{ 
                  transitionDelay: `${0.4 + i * 0.12}s`,
                  cursor: "pointer" 
                }}
                onClick={() => handleItemClick(item.title)}
              >
                {item.sub && (
                  <span className="collection-sub">
                    {item.sub}
                  </span>
                )}
                <span className="collection-main">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}