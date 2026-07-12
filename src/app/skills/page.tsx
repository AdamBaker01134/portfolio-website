import Image from "next/image";
import {
  DockerDescription,
  GitDescription,
  PythonDescription,
  ReactDescription,
  TerraformDescription,
} from "./descriptions";

export default function Education() {
  return (
    <div className="flex flex-col flex-1 items-start bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full items-center justify-between p-8 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col items-start md:items-center md:flex-row py-4 border-b">
            <Image
              className="mb-4 md:mx-4 w-[90px] h-auto"
              src="/icons/react.svg"
              alt="React icon"
              width={90}
              height={90}
              priority
            />
            <ReactDescription />
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row-reverse py-4 border-b">
            <Image
              className="mb-4 md:mx-4 w-[90px] h-auto"
              src="/icons/git.svg"
              alt="Git icon"
              width={90}
              height={90}
              priority
            />
            <GitDescription />
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row py-4 border-b">
            <Image
              className="mb-4 md:mx-4 w-[90px] h-auto"
              src="/icons/docker.svg"
              alt="Docker icon"
              width={90}
              height={90}
              priority
            />
            <DockerDescription />
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row-reverse py-4 border-b">
            <Image
              className="mb-4 md:mx-4 w-[90px] h-auto"
              src="/icons/python.svg"
              alt="Python icon"
              width={90}
              height={90}
              priority
            />
            <PythonDescription />
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row py-4 border-b">
            <Image
              className="mb-4 md:mx-4 w-[90px] h-auto"
              src="/icons/terraform.svg"
              alt="Terraform icon"
              width={90}
              height={90}
              priority
            />
            <TerraformDescription />
          </div>
          <div className="text-lg mt-4">Other skills:</div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col my-4 md:m-8 md:mt-4">
              <b className="text-lg">
                <u>Technical Skills</u>
              </b>
              <ul>
                <li>HTML/CSS</li>
                <li>PostgreSQL and SQLite</li>
                <li>AWS EC2 and S3</li>
                <li>Nginx</li>
                <li>Google Cloud Run</li>
                <li>Data cleaning and analysis</li>
                <li>HPC workflows</li>
                <li>Node.js</li>
                <li>System Design</li>
                <li>UX</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div></div>
            <div className="flex flex-col my-4 md:m-8">
              <b className="text-lg">
                <u>Interpersonal Skills</u>
              </b>
              <ul>
                <li>Communication</li>
                <li>Leadership</li>
                <li>Collaboration</li>
                <li>Adaptability</li>
                <li>Agile training</li>
                <li>Remote working</li>
                <li>Presenting</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
