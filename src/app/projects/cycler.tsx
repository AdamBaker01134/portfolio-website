"use client";

import { useState } from "react";
import Image from "next/image";

interface Photo {
  path: string;
  alt: string;
  width: number;
  height: number;
}

interface CyclerProps {
  photos: Array<Photo>;
}

export default function Cycler({ photos }: CyclerProps) {
  const [index, setIndex] = useState(0);
  const currentPhoto = photos.length > index ? photos[index] : null;
  const decrement = () => {
    setIndex((prev) => {
      if (prev - 1 < 0) return photos.length - 1;
      return prev - 1;
    });
  };
  const incremenet = () => {
    setIndex((prev) => {
      if (prev + 1 > photos.length - 1) return 0;
      return prev + 1;
    });
  };
  return (
    <div className="flex flex-row w-full min-w-1/2 h-full">
      {currentPhoto !== null && (
        <>
          <div
            className="flex justify-center items-center w-8 h-auto bg-white/40 hover:bg-white/20 cursor-pointer rounded-l-lg border-white/20 border"
            onClick={decrement}
          >
            <svg
              className="w-5 h-5 rotate-90 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center w-full md:h-[50vh] border-white/20 border p-2">
            <Image
              className="w-auto h-full"
              src={currentPhoto.path}
              alt={currentPhoto.alt}
              width={currentPhoto.width}
              height={currentPhoto.height}
              priority
            />
          </div>
          <div
            className="flex justify-center items-center w-8 h-auto bg-white/40 hover:bg-white/20 cursor-pointer rounded-r-lg border-white/20 border"
            onClick={incremenet}
          >
            <svg
              className="w-5 h-5 -rotate-90 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
