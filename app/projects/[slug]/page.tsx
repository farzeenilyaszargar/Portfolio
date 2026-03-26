import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

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

  const gallery = [project.img, ...(project.moreImgs ?? [])];

  return (
    <div className="min-h-screen w-screen px-20 py-16">
      <Link href="/" className="text-sm uppercase tracking-widest hover:underline">
        Back
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,1.1fr]">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="mt-3 text-lg text-gray-600">{project.description}</p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <p className="text-sm uppercase tracking-widest text-gray-500">Overview</p>
            <p className="mt-3 text-base leading-relaxed text-gray-800">
              {project.fullInfo ?? project.description}
            </p>
          </div>

          {project.skills?.length ? (
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">Skills</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border px-3 py-1 text-xs font-semibold uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {project.features?.length ? (
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">Features</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.linkWeb ? (
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">Link</p>
              <Link
                href={project.linkWeb}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold hover:invert"
              >
                Visit Project
              </Link>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {gallery.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className={`overflow-hidden rounded-2xl ${index === 0 ? "sm:col-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`${project.title} preview ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
