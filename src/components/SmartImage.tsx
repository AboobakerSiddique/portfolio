"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function SmartImage({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <ImagePlaceholder path={src} label={label} className={className} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}
