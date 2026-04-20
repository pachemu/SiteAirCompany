// src/entities/product/ui/product-gallery.tsx
"use client";
import { Carousel } from "antd";
import Image from "next/image";

export function ProductGallery({ images = [] }: { images?: string[] }) {
  if (!images || images.length === 0) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center rounded-2xl border bg-gray-50 lg:min-h-[620px] xl:min-h-[720px]">
        <span className="text-gray-400">Нет изображений</span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-gray-50">
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
            className="!flex h-full min-h-[420px] items-center justify-center p-4 md:p-6 lg:min-h-[620px] xl:min-h-[720px]"
          >
            <div className="flex h-full w-full items-center justify-center p-4 md:p-6 xl:p-8">
              <Image
                src={url}
                alt={`Фото товара ${index + 1}`}
                width={1400}
                height={900}
                className="h-full max-h-[680px] w-full object-contain"
                sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 58vw, 100vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
