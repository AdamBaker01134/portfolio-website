"use client";

import { useEffect, useState } from "react";
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
  const [fullscreen, setFullscreen] = useState(false);
  const [mobilePortrait, setMobilePortrait] = useState(false);
  const currentPhoto = photos.length > index ? photos[index] : null;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 768px) and (orientation: portrait)",
    );
    const syncMobilePortrait = () => setMobilePortrait(mediaQuery.matches);

    syncMobilePortrait();
    mediaQuery.addEventListener("change", syncMobilePortrait);

    return () => {
      mediaQuery.removeEventListener("change", syncMobilePortrait);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const decrement = () => {
    setIndex((prev) => {
      if (prev - 1 < 0) return photos.length - 1;
      return prev - 1;
    });
  };

  const increment = () => {
    setIndex((prev) => {
      if (prev + 1 > photos.length - 1) return 0;
      return prev + 1;
    });
  };

  const lockLandscapeOnMobile = async () => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      return;
    }

    const orientationApi = screen.orientation as ScreenOrientation & {
      lock?: (orientation: OrientationLockType) => Promise<void>;
    };

    if (orientationApi.lock) {
      try {
        await orientationApi.lock("landscape");
      } catch {
        // Some browsers block orientation lock even while in fullscreen.
      }
    }
  };

  const openFullscreen = async () => {
    setFullscreen(true);

    if (
      document.fullscreenElement === null &&
      document.documentElement.requestFullscreen
    ) {
      try {
        await document.documentElement.requestFullscreen();
      } catch {
        // Keep modal fullscreen mode even if the browser fullscreen request fails.
      }
    }

    await lockLandscapeOnMobile();
  };

  const closeFullscreen = async () => {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch {
        // Ignore exit errors and still close the in-app fullscreen mode.
      }
    }

    setFullscreen(false);
  };

  return (
    <>
      <div className="flex flex-row w-full min-w-1/2 h-full">
        {currentPhoto !== null && (
          <>
            <div
              className="flex justify-center items-center w-8 h-auto bg-black/40 dark:bg-white/40 hover:bg-black/20 dark:hover:bg-white/20 cursor-pointer rounded-l-lg border-black/20 dark:border-white/20 border"
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
            <div className="flex justify-center items-center w-full md:h-[50vh] border-black/20 dark:border-white/20 border p-2">
              <Image
                onClick={openFullscreen}
                className="w-auto h-full cursor-pointer"
                src={currentPhoto.path}
                alt={currentPhoto.alt}
                width={currentPhoto.width}
                height={currentPhoto.height}
                priority
              />
            </div>
            <div
              className="flex justify-center items-center w-8 h-auto bg-black/40 dark:bg-white/40 hover:bg-black/20 dark:hover:bg-white/20 cursor-pointer rounded-r-lg border-black/20 dark:border-white/20 border"
              onClick={increment}
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

      {fullscreen && currentPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-black/95">
          <button
            type="button"
            onClick={closeFullscreen}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/15 px-3 py-1 text-2xl leading-none text-white hover:bg-white/25"
            aria-label="Close fullscreen"
          >
            &times;
          </button>

          <div
            className={
              mobilePortrait
                ? "absolute left-1/2 top-1/2 flex h-[100dvw] w-[100dvh] -translate-x-1/2 -translate-y-1/2 rotate-90 items-center justify-center"
                : "flex h-[100dvh] w-[100dvw] items-center justify-center"
            }
          >
            <div className="flex h-full w-full items-center justify-center gap-2 p-2 md:p-6">
              <button
                type="button"
                className="flex h-14 w-10 items-center justify-center rounded-lg bg-white/20 text-white hover:bg-white/30"
                onClick={decrement}
                aria-label="Previous image"
              >
                <svg
                  className="h-6 w-6 rotate-90"
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
              </button>

              <div className="relative flex h-full flex-1 items-center justify-center">
                <Image
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                  src={currentPhoto.path}
                  alt={currentPhoto.alt}
                  width={currentPhoto.width}
                  height={currentPhoto.height}
                  priority
                />
              </div>

              <button
                type="button"
                className="flex h-14 w-10 items-center justify-center rounded-lg bg-white/20 text-white hover:bg-white/30"
                onClick={increment}
                aria-label="Next image"
              >
                <svg
                  className="h-6 w-6 -rotate-90"
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
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
