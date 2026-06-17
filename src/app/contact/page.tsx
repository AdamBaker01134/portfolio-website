import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl flex-col items-center justify-between p-8 bg-white dark:bg-black sm:items-start">
        <div className="text-6xl font-semibold tracking-tight mb-4">
          Get in touch with me
        </div>
        <div className="flex flex-col justify-start">
          <div className="flex flex-row items-center m-2">
            <Image
              className="rounded-lg invert mx-4"
              src="/icons/email.svg"
              alt="Email icon"
              width={30}
              height={10}
              priority
            />
            <a href="mailto:adam.baker.dev@gmail.com">
              adam.baker.dev@gmail.com
            </a>
          </div>
          <div className="flex flex-row items-center m-2">
            <Image
              className="rounded-lg invert mx-4"
              src="/icons/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={10}
              priority
            />
            <a
              href="https://www.linkedin.com/in/adam-baker-ab3198203"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/adam-baker-ab3198203
            </a>
          </div>
          <div className="flex flex-row items-center m-2">
            <Image
              className="rounded-lg invert mx-4"
              src="/icons/github.svg"
              alt="GitHub icon"
              width={30}
              height={10}
              priority
            />
            <a
              href="https://github.com/AdamBaker01134"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/AdamBaker01134
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
