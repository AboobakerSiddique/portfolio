"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  fit = "cover",
  frameless = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  /** "cover" fills/crops the box (default, good for screenshots).
   *  "contain" keeps the whole image visible with no cropping — use for
   *  cutout / transparent-background portraits so nothing gets clipped. */
  fit?: "cover" | "contain";
  /** Skip the bordered box background on the placeholder so a transparent
   *  cutout image (or the placeholder itself) doesn't read as a hard block. */
  frameless?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <ImagePlaceholder
        path={src}
        label={label}
        className={className}
        frameless={frameless}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}
