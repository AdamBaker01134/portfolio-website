import Cycler from "./cycler";
import {
  CeltxDescription,
  CropDecisionToolDescription,
  MastersResearchDescription,
  WeddingWebsiteDescription,
} from "./descriptions";
import {
  celtxPhotos,
  cropDecisionToolPhotos,
  mastersResearchPhotos,
  weddingWebsitePhotos,
} from "./photos";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full h-full items-center justify-between p-4 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col md:flex-row justify-center items-center p-4 border-b w-full">
          <CropDecisionToolDescription />
          <div className="min-w-8 min-h-8" />
          <Cycler photos={cropDecisionToolPhotos} />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 border-b w-full">
          <Cycler photos={celtxPhotos} />
          <div className="min-w-8 min-h-8" />
          <CeltxDescription />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center p-4 border-b w-full">
          <MastersResearchDescription />
          <div className="min-w-8 min-h-8" />
          <Cycler photos={mastersResearchPhotos} />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 w-full">
          <Cycler photos={weddingWebsitePhotos} />
          <div className="min-w-8 min-h-8" />
          <WeddingWebsiteDescription />
        </div>
      </main>
    </div>
  );
}
