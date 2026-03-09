'use client';

import Image from 'next/image';
import { useState } from 'react';

const screenshots = [
  { src: '/magic-brawl-apk-game.webp', alt: 'Magic Brawl APK Game' },
  { src: '/magic-brawl-apk-interface.webp', alt: 'Magic Brawl APK Interface' },
  { src: '/magic-brawl-apk-play-online.webp', alt: 'Magic Brawl APK Play Online' },
  { src: '/magic-brawl-apk-for-android.webp', alt: 'Magic Brawl APK for Android' },
  { src: '/magic-brawl-game.webp', alt: 'Magic Brawl Game' },
  { src: '/magic-brawl-shop.webp', alt: 'Magic Brawl Shop' },
  { src: '/magic-brawl-profile.webp', alt: 'Magic Brawl Profile' },
  { src: '/magic-brawl-add-friends.webp', alt: 'Magic Brawl Add Friends' },
  { src: '/magic-barwlers.webp', alt: 'Magic Brawlers' },
];

export default function ScreenshotGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {screenshots.map((img, i) => (
          <div
            key={img.src}
            className="group relative rounded-xl overflow-hidden border border-gray-800 hover:border-[#FFA500]/50 transition-all hover:scale-[1.02] duration-300 cursor-pointer"
            onClick={() => setActive(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
              quality={80}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-sm font-semibold bg-black/60 backdrop-blur-sm w-full text-center py-2 px-3 truncate">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-2xl z-10 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + screenshots.length) % screenshots.length); }}
            className="absolute left-2 md:left-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl z-10 transition-colors"
            aria-label="Previous"
          >
            &#8249;
          </button>

          <div
            className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[active].src}
              alt={screenshots[active].alt}
              width={800}
              height={800}
              className="rounded-xl object-contain max-h-[75vh] w-auto"
              quality={90}
              sizes="(max-width: 768px) 95vw, 800px"
              priority
            />
            <p className="text-white text-center mt-3 text-sm font-medium">
              {screenshots[active].alt}
              <span className="text-gray-400 ml-2 text-xs">{active + 1} / {screenshots.length}</span>
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % screenshots.length); }}
            className="absolute right-2 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl z-10 transition-colors"
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
