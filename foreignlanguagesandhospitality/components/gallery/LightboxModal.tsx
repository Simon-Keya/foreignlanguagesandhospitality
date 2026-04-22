"use client";

import Image from "next/image";
import { GalleryItem } from "./GalleryGrid";

type Props = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function LightboxModal({ item, onClose }: Props) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl"
        >
          ✕
        </button>

        <div className="relative w-full h-[70vh]">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        <p className="text-center text-white mt-4 text-sm">
          {item.title}
        </p>
      </div>
    </div>
  );
}