"use client";
import { useState } from "react";

export function InteractionTechniquesComparingVideoAbstract() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prev) => !prev);
  return (
    <div>
      <div className="cursor-pointer hover:bg-zinc-900 p-2 mt-2 rounded-sm" onClick={toggleExpand}>
        <div className="flex flex-row justify-between items-center underline">
          Abstract:
          <svg
            className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
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
        <div className={"text-sm" + (!expanded ? " line-clamp-2" : "")}>
          Comparison is a well-studied task in visual analytics, but there is
          still little support for comparison of temporal streams such as video.
          There are a wide range of tasks that involve video comparison, but
          there are very few systems or techniques to support this kind of
          analysis. To help address this problem, we have developed new
          interaction techniques that explicitly support video comparison. We
          provide techniques for equalizing the reference frame of videos to be
          compared, juxtaposition techniques for enhancing side-by-side and
          small-multiples comparisons, superposition techniques for comparing
          overlaid videos, explicit-encoding techniques that visualize
          differences between extracted points, and temporal-to-linear
          techniques that translate between a temporal sequence of frames and a
          1D timeline. We built a demonstration system with five different
          datasets, and evaluated our interaction techniques in two ways: an
          analysis of steps to show their efficiency, and a preliminary user
          study to explore learnability, utility, and usability.
        </div>
      </div>
    </div>
  );
}

export function ShadowMarksAbstract() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prev) => !prev);
  return (
    <div>
      <div className="cursor-pointer hover:bg-zinc-900 p-2 mt-2 rounded-sm" onClick={toggleExpand}>
        <div className="flex flex-row justify-between items-center underline">
          Abstract:
          <svg
            className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
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
        <div className={"text-sm" + (!expanded ? " line-clamp-2" : "")}>
          Making spatial comparisons in visualizations with multiple views is
          often difficult (e.g., comparing locations is difficult across small
          multiples, and overlay techniques quickly become cluttered). To
          improve multi-view spatial comparisons, we developed Shadow Marks –
          visual marks that are replicated across all views – that provide a
          common spatial reference frame at the location where a comparison
          needs to be made. We evaluated Shadow Marks through three crowdsourced
          studies that explored different visual-analytics tasks. Study results
          show that Shadow Marks consistently led to more accurate answers than
          either a small-multiples grid or an overlay. Shadow Marks also
          required less effort and were strongly preferred, showing that
          user-controlled spatial reference frames can improve multiple-view
          comparison.
        </div>
      </div>
    </div>
  );
}
