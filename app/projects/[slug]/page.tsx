import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Instrument_Serif } from "next/font/google";
import Navbar from "@/comp/navbar";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  const gallery = [project.img];

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-20 py-16">
        <Link href="/" className="text-sm uppercase tracking-widest hover:border-b pb-1 transition inline-flex items-center ">
          <Image src="/icons/left.png" alt="Back" width={16} height={16} className="inline h-4 w-4 theme-invert mr-1" />
          Back
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className={`text-5xl text-stroke-1 ${instrumentSerif.className}`}>{project.title}</h1>
              <p className="mt-3 text-lg text-black dark:text-gray-300">{project.description}</p>
              {project.skills?.length ? (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border px-3 py-1 text-xs font-semibold uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
              {project.linkWeb ? (
                <Link
                  href={project.linkWeb}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-invert mt-4 inline-flex items-center justify-center gap-2 rounded-full border bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  <Image src="/icons/link.png" alt="External Link" width={16} height={16} className="h-4 w-4 invert" />
                  Visit Project
                </Link>
              ) : null}
            </div>

            {project.features?.length ? (
              <div>
                <p className="text-sm uppercase tracking-widest text-black dark:text-gray-400">Features</p>
                <ul className="mt-3 list-disc pl-5 text-sm text-black dark:text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-base leading-relaxed text-black dark:text-gray-300">
              {project.fullInfo ?? project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {gallery.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className={`mx-auto overflow-hidden rounded-2xl border-2 w-1/2 bg-white  ${index === 0 ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`${project.title} preview ${index + 1}`}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
