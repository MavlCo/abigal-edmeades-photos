"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const current = images[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Counter */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 text-[13px] text-cta-fg/70"
        style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Close */}
      <button
        className="absolute top-5 right-5 p-2 text-cta-fg/70 hover:text-cta-fg transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-4 md:left-8 p-3 text-cta-fg/70 hover:text-cta-fg transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative max-w-[90vw] max-h-[85vh]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={1200}
            height={800}
            className="max-h-[80vh] w-auto object-contain"
            priority
          />
          {current.caption && (
            <p
              className="mt-3 text-center text-[13px] text-cta-fg/60"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              {current.caption}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-4 md:right-8 p-3 text-cta-fg/70 hover:text-cta-fg transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </motion.div>
  );
}
