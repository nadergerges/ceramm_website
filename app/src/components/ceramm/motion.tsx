import { useEffect } from "react";

/**
 * CERAMM motion rig: Lenis smooth scroll bridged into GSAP's ticker, plus the
 * page's micro-motion. The scroll-scrub engine owns the journey's media time;
 * nothing here touches its elements or drives a second timeline on them.
 *
 * Screenshot-safe by construction: headline builds fire on mount and animate
 * transform only; scroll-linked effects scrub transform only; nothing waits
 * at opacity zero for a viewport trigger.
 */
export function CerammMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let lenis: { destroy: () => void } | null = null;
    let cleanupGsap: (() => void) | null = null;
    let stampMove: ((event: MouseEvent) => void) | null = null;

    void Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([lenisModule, gsapModule, stModule]) => {
      if (cancelled) return;
      const Lenis = lenisModule.default;
      const { gsap } = gsapModule;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);

      const instance = new Lenis({ autoRaf: false, lerp: 0.12 });
      lenis = instance;
      instance.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => {
        instance.raf(time * 1000);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const ctx = gsap.context(() => {
        gsap.from(".cm-reveal", {
          clearProps: "transform",
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          y: 26,
        });

        gsap.utils.toArray<HTMLElement>(".cm-settle").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 1.08 },
            {
              ease: "none",
              scale: 1,
              scrollTrigger: {
                end: "bottom top",
                scrub: true,
                start: "top bottom",
                trigger: el.parentElement ?? el,
              },
            },
          );
        });

        const stamp = document.querySelector<HTMLElement>(".cm-stamp");
        if (stamp) {
          const xTo = gsap.quickTo(stamp, "x", { duration: 0.4, ease: "power3" });
          const yTo = gsap.quickTo(stamp, "y", { duration: 0.4, ease: "power3" });
          stampMove = (event: MouseEvent) => {
            const rect = stamp.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            const within = Math.abs(dx) < rect.width && Math.abs(dy) < rect.height;
            xTo(within ? dx * 0.12 : 0);
            yTo(within ? dy * 0.12 : 0);
          };
          window.addEventListener("mousemove", stampMove, { passive: true });
        }
      });

      cleanupGsap = () => {
        if (stampMove) window.removeEventListener("mousemove", stampMove);
        ctx.revert();
        gsap.ticker.remove(tick);
      };
    });

    return () => {
      cancelled = true;
      cleanupGsap?.();
      lenis?.destroy();
    };
  }, []);

  return null;
}
