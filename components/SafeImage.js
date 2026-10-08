"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Shows the image if it exists, otherwise a clean placeholder that names the file to add.
export default function SafeImage({ src, alt, label, className = "", sizes = "100vw", priority = false, fit = "object-cover" }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-panel ${className}`}>
      {!failed && (
        <Image
          ref={ref}
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={fit}
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="text-sm text-mist">{label}</span>
          <span className="break-all text-xs text-accent-soft/70">public{src}</span>
        </div>
      )}
    </div>
  );
}
