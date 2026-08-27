"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setScale(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: "100%", transform: `scaleX(${scale})` }}
      aria-hidden="true"
    />
  );
}
