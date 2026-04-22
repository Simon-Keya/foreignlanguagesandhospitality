"use client";

import Image from "next/image";

export type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: string;
};

type Props = {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
};

export default function GalleryGrid({ items, onSelect }: Props) {
  if (!items.length) {
    return (
      <div className="text-center py-20 text-neutral-500">
        No images found.
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelect(item)}
          className="group cursor-pointer relative overflow-hidden rounded-2xl"
        >
          <div className="relative w-full h-60">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
            <p className="text-white text-sm font-semibold">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}