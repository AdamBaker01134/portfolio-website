import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col md:flex-row w-full max-w-3xl flex-col items-center justify-between p-8 bg-white dark:bg-black sm:items-start">
        <Image
          className="rounded-lg mx-4 mb-4 md:mb-0"
          src="/images/profile_photo.jpg"
          alt="Profile photo"
          width={400}
          height={500}
          priority
        />
        <div className="flex flex-col mx-4">
          <div className="text-lg pb-4">
            Hello! My name is Adam, and I&apos;m a software developer
            specializing in full-stack web development.
          </div>
          <div className="text-lg py-4">
            I built this website to showcase my background, technical skills,
            and some of the projects I&apos;ve worked on throughout my career.
          </div>
          <div className="text-lg pt-4">
            Thanks for stopping by! Take a look around, explore my work, and
            don&apos;t hesitate to get in touch if you&apos;d like to connect or
            discuss opportunities.
          </div>
        </div>
      </main>
    </div>
  );
}
