// src/components/ui/Carousel.jsx
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ slides = [] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        console.log("✅ Embla initialized with", emblaApi.slideNodes().length, "slides");
        const onSelect = () => console.log("➡️ index:", emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        emblaApi.reInit(); // safe no-op if already ready
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    return (
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
            {/* Viewport (must have overflow hidden) */}
            <div ref={emblaRef} style={{ overflow: "hidden", borderRadius: 12 }}>
                {/* Container (must be display:flex) */}
                <div style={{ display: "flex" }}>
                    {slides.map((s, i) => (
                        // Each slide MUST have fixed basis: 100% (one slide per view)
                        <div key={i} style={{ flex: "0 0 100%", minWidth: 0 }}>
                            {/* <img
                                src={s.src}
                                alt={s.alt || `slide-${i}`}
                                style={{ width: "100%", height: 400, objectFit: "cover", userSelect: "none" }}
                                draggable="false"
                            /> */}
                            {s.type === "video" ? (
                                <video
                                    src={s.src}
                                    controls
                                    preload="metadata"
                                    style={{
                                        width: "100%",
                                        height: 400,
                                        objectFit: "cover",
                                        borderRadius: 12
                                    }}
                                />
                            ) : (
                                <img
                                    src={s.src}
                                    alt={s.alt || `slide-${i}`}
                                    style={{
                                        width: "100%",
                                        height: 400,
                                        objectFit: "cover",
                                        userSelect: "none"
                                    }}
                                    draggable="false"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls (same positioned parent) */}
            <button
                onClick={scrollPrev}
                style={{
                    position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.85)", border: 0, borderRadius: 999, padding: "6px 10px",
                    cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,.15)"
                }}
                aria-label="Previous"
            >‹</button>

            <button
                onClick={scrollNext}
                style={{
                    position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.85)", border: 0, borderRadius: 999, padding: "6px 10px",
                    cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,.15)"
                }}
                aria-label="Next"
            >›</button>
        </div>
    );
}
