import gallery from "../api/data/horizontalGallery.json";
import useReveal from "./useReveal";

export default function HorizontalGallery() {
  const [ref, visible] = useReveal();

  return (
    <section className="museum-garden-section">
      <div className="container-fluid px-0">
        <div className="row">

          {/* MAIN CONTENT */}
          <div className="col-lg-10">
            <div className="container-fluid" ref={ref}>

              {/* TOP ROW */}
              <div className="row align-items-start">

                {/* MURAL + TEXT */}
                <div className={`col-lg-6 d-flex mural-wrap reveal delay-1 ${visible ? "active" : ""}`}>
                  <img
                    src={gallery.topMural.image}
                    alt={gallery.topMural.alt}
                    className="img-fluid bordered-img mural-img"
                  />

                  <div className="text-block vision-text">
                    <h6>{gallery.visionBlock.title}</h6>
                    <p>{gallery.visionBlock.description}</p>
                  </div>
                </div>

                {/* MAP */}
                <div className={`col-lg-6 map-wrap d-flex text-center reveal delay-2 ${visible ? "active" : ""}`}>
                  <img
                    src={gallery.indiaMap.image}
                    alt=""
                    className="img-fluid map-img"
                  />
                  <div className="map-text">
                    <h6>{gallery.indiaMap.title}</h6>
                    <p>{gallery.indiaMap.description}</p>
                  </div>
                </div>

              </div>

              {/* MIDDLE ROW */}
              <div className="row align-items-center secondrow">

                {/* FRAMED ART */}
                <div className={`col-lg-4 framed-wrap reveal delay-3 ${visible ? "active" : ""}`}>
                  <img
                    src={gallery.framedArt.image}
                    alt={gallery.framedArt.alt}
                    className="bordered-img framed-img"
                  />
                </div>

                {/* CENTER HERO */}
                <div className={`col-lg-8 center-wrap reveal delay-4 ${visible ? "active" : ""}`}>
                  <div className="center-hero">
                    <img
                      src={gallery.centerHero.image}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="hero-overlay">
                      <h2>
                        {gallery.centerHero.titleLines.map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h2>

                      <p className="garden-text">
                        {gallery.centerHero.description
                          .split("\n\n")
                          .map((para, i) => (
                            <span key={i}>
                              {para}
                              <br /><br />
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT STATUE */}
          <div className={`col-lg-1 statue-col statue-wrap reveal delay-3 ${visible ? "active" : ""}`}>
            <img
              src={gallery.statue.image}
              alt={gallery.statue.alt}
              className="statue-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
