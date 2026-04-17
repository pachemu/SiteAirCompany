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
    <div className="min-h-[500px] rounded-2xl overflow-hidden bg-gray-50 border">
      <Carousel
        arrows
        dots
        draggable
        infinite
        className="h-full [&_.slick-track]:h-full [&_.slick-list]:h-full [&_.slick-slide>div]:h-full 
        [&_.slick-dots_li_button]:bg-black 
    [&_.slick-dots_li_button]:opacity-30 
    [&_.slick-dots_li.slick-active_button]:bg-blue-600 
    [&_.slick-dots_li.slick-active_button]:opacity-100 
    [&_.slick-dots_li_button]:h-1.5
    [&_.slick-dots_li_button]:rounded-full"
      >
        {images.map((url, index) => (
          <div
            key={url || index}
            className="h-full !flex min-h-[500px] p-6 flex items-center justify-center"
          >
            <div className="flex h-[600px] w-full items-center justify-center p-8">
              <Image
                src={url}
                alt={`Фото товара ${index + 1}`}
                width={1400}
                height={900}
                className="max-h-full w-auto object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
