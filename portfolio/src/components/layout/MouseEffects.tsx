import { useEffect, useRef } from "react";

function MouseEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: -100, y: -100 });
  const ringPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let frame = 0;
    const move = (event: PointerEvent) => { position.current = { x: event.clientX, y: event.clientY }; };
    const render = () => {
      ringPosition.current.x += (position.current.x - ringPosition.current.x) * 0.14;
      ringPosition.current.y += (position.current.y - ringPosition.current.y) * 0.14;
      dot.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };
    const enter = () => ring.classList.add("is-hovering");
    const leave = () => ring.classList.remove("is-hovering");
    window.addEventListener("pointermove", move, { passive: true });
    document.querySelectorAll("a, button, [data-magnetic]").forEach((element) => {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });
    frame = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("pointermove", move);
      document.querySelectorAll("a, button, [data-magnetic]").forEach((element) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  return <><div ref={ringRef} className="aster-cursor-ring" aria-hidden="true" /><div ref={dotRef} className="aster-cursor-dot" aria-hidden="true" /></>;
}

export default MouseEffects;
