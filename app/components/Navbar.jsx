"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "VISIT", href: "/visit" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const pathname = usePathname();

  // Close menu on route change (ORIGINAL)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when menu open (ORIGINAL)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Video toggle (NEW – does not affect menu)
  const toggleVideo = () => {
    const vid = window.heroVideo;
    if (!vid) return;

    if (vid.paused) {
      vid.muted = false;
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* ORIGINAL MENU BUTTON */}
      <button
        className="menuToggle"
        onClick={() => setOpen(true)}
      >
        MENU
      </button>

      {/* 🔊 VIDEO BUTTON (ADDED ONLY) */}
      <button
        className="video-unmute-btn"
        onClick={toggleVideo}
      >
        <span className={`icon ${playing ? "pause" : "play"}`} />
        <span className="btn-text">
          {playing ? "Pause sound" : "Play with sound"}
        </span>
      </button>

      {/* ORIGINAL MENU OVERLAY */}
      <div className={`menu ${open ? "active" : ""}`}>
        <div className="left" />

        <div className="right-two">
          <button
            className="close"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <ul className="menuList">
            {menuItems.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className="menuLink">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="footer">
            <div>
              <p>
                Address <br />
                Ratan Jindal Block <br />
                O. P. Jindal Global University <br />
                Sonipat, Haryana - 131001
              </p>
            </div>

            <div>
              <p>Contact us →</p>
              <p>+91 740 444 3255</p>
              <p>Email us →</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
