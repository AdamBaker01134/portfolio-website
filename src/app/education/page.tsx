import Image from "next/image";

export default function Education() {
  return (
    <div className="flex flex-col flex-1 items-start bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full items-center justify-between p-8 md:pb-0 bg-white dark:bg-black sm:items-start">
        <Image
          className="self-center mx-4 w-full md:w-[30vw] h-auto"
          src="/images/usask_usask_colour_reverse.png"
          alt="GitHub icon"
          width={1395}
          height={313}
          priority
        />
        <div className="flex flex-col md:flex-row w-full h-fit py-4 md:p-4">
          <div className="w-full h-full p-4 mt-4 md:mb-4 border border-white rounded-lg">
            <div className="flex flex-row justify-between mb-4">
              <b>Bachelor&apos;s Degree</b>
              2018-2023
            </div>
            I began my academic journey at the University of Saskatchewan, where
            I earned a Bachelor&apos;s degree in Computer Science. Throughout my
            undergraduate studies, I developed a strong foundation in computer
            science theory while strengthening my programming and
            problem-solving skills, with an emphasis on designing efficient,
            maintainable software. My coursework provided experience in
            full-stack web development, operating systems, and software
            engineering principles.
            <br />
            <br />
            In my final year, I completed an honours research project under the
            supervision of a faculty member. This research laid the foundation
            for my graduate studies and ultimately evolved into my Master&apos;s
            thesis.
          </div>
          <div className="border border-white self-center w-0 h-[100px] md:w-[100px] md:h-0" />
          <div className="w-full h-full p-4 mb-4 md:mt-8 border border-white rounded-lg">
            <div className="flex flex-row justify-between mb-4">
              <b>Master&apos;s Degree</b>
              2023-2025
            </div>
            I continued my education by pursuing a Master&apos;s degree in
            Computer Science, focusing my research on video comparison
            techniques. Throughout my graduate studies, I designed and developed
            multiple research systems and co-authored two peer-reviewed research
            papers, gaining valuable experience in both software development and
            academic research.
            <br />
            <br />
            In addition to my research, I served as a teaching assistant for
            several undergraduate courses under the supervision of my advisor.
            This role strengthened my communication, public speaking, and
            mentoring skills while providing opportunities to support students
            in their learning. I completed my Master&apos;s degree in two years
            and successfully defended my thesis before a committee of faculty
            members.
          </div>
        </div>
      </main>
    </div>
  );
}
