import Image from "next/image";
import {
  InteractionTechniquesComparingVideoAbstract,
  ShadowMarksAbstract,
} from "./abstracts";

export default function Education() {
  return (
    <div className="flex flex-col flex-1 items-start bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full items-center justify-between p-8 md:pb-0 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col md:flex-row">
          <div className=" flex flex-col items-center justify-between w-full h-full md:min-h-[80vh] p-4 md:mx-4 border dark:border-white rounded-lg">
            <div className="flex flex-row">
              <div className="mr-4">&#9654;</div>
              <a
                href="https://doi.org/10.1145/3670947.3670948"
                target="_blank"
                className="items-start w-full pl-[36px] indent-[-36px]"
              >
                Baker, Adam, Carl Gutwin, Justin Matejka, and Ian Stavness.
                &quot;
                <b>Interaction techniques for comparing video</b>.&quot; In
                Proceedings of the 50th Graphics Interface Conference, pp. 1-13.
                2024.
              </a>
            </div>
            <InteractionTechniquesComparingVideoAbstract />
            <Image
              className="w-full md:w-3/5 h-auto m-2"
              src="/images/gi_activity.jpg"
              alt="Graphics Interface (GI) 2024 boat ride"
              width={4032}
              height={3024}
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-between w-full h-full md:min-h-[80vh] p-4 mt-4 md:mt-0 md:mx-4 border dark:border-white rounded-lg">
            <div className="flex flex-row">
              <div className="mr-4">&#9654;</div>
              <a
                href="https://doi.org/10.1007/978-3-032-05005-2_11"
                target="_blank"
                className="items-start w-full pl-[36px] indent-[-36px]"
              >
                Baker, Adam, Carl Gutwin, Justin Matejka, and Ian Stavness.
                &quot;
                <b>
                  Improving Visual Comparison Across Multiple Views with Shadow
                  Marks.
                </b>
                &quot; In IFIP Conference on Human-Computer Interaction, pp.
                202-223. Cham: Springer Nature Switzerland, 2025.
              </a>
            </div>
            <ShadowMarksAbstract />
            <Image
              className="w-full md:w-3/5 h-auto m-2"
              src="/images/interact_presentation.webp"
              alt="Interact 2025 presentation photo"
              width={5712}
              height={4284}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
