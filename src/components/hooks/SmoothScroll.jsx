"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        // duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
