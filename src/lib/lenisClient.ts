import Lenis from "lenis";

let instance: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return null;
  if (!instance) {
    instance = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      syncTouchLerp: 0.075,
      touchInertiaExponent: 1.7,
      lerp: 0.07,
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 1,
      wheelMultiplier: 1,
      autoResize: true,
      overscroll: true,
      autoRaf: true,
      infinite: false,
      anchors: {
        duration: 2.4,
        offset: 96,
      },
      autoToggle: false,
      allowNestedScroll: false,
    });
  }
  return instance;
}

export function getLenis(): Lenis | null {
  return instance;
}
