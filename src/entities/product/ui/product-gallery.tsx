// src/entities/product/ui/product-gallery.tsx
"use client";
import { Carousel } from "antd";
import Image from "next/image";

export function ProductGallery({ images = [] }: { images?: string[] }) {
  if (!images || images.length === 0) {
    return (
      <div className="h-full min-h-[500px] flex items-center justify-center bg-gray-50 rounded-2xl border">
        <span className="text-gray-400">Нет изображений</span>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[500px] rounded-2xl overflow-hidden bg-gray-50 border">
      <Carousel
        effect="fade"
        arrows={images.length > 1}
        dots={{ className: "mb-4" }}
        className="h-full"
      >
        {images.map((url, index) => (
          <div
            key={index}
            className="h-full min-h-[500px] flex items-center justify-center p-6"
          >
            <Image
              src={url}
              alt="product"
              width={600}
              height={500}
              unoptimized
              className="object-contain h-full max-h-[450px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
