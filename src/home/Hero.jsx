import { useEffect, useRef, useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";

import Button from "../components/common/Button";
import { heroContent } from "../data/home";
import "../styles/hero.css";

function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect OS reduced-motion preference by keeping the video paused on load.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(
        () => setIsPlaying(true),
        () => setIsPlaying(false)
      );
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section id="home-hero" className="home-hero" aria-label="Introduction">
      {/* Background video */}
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={heroContent.videoSrc} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      {/* Foreground content */}
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{heroContent.title}</h1>
          <p className="hero-summary">{heroContent.summary}</p>
          <div className="hero-actions">
            <Button to={heroContent.cta.to} variant="primary">
              {heroContent.cta.label}
            </Button>
          </div>
        </div>

        <div className="hero-footer">
          <a href="#trusted-companies" className="hero-scroll">
            <span className="hero-scroll__icon" aria-hidden="true">
              <ArrowDown size={16} strokeWidth={1.75} />
            </span>
            <span>{heroContent.scrollLabel}</span>
          </a>

          <button
            type="button"
            className="hero-video-toggle"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            aria-pressed={!isPlaying}
          >
            {isPlaying ? (
              <Pause size={16} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Play size={16} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
