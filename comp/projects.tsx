import { projects } from "@/data/projects";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

export default function Projects() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-20 my-10">
            <h1 className={`text-3xl font-bold mb-6 text-stroke-1 ${instrumentSerif.className}`}>
                Projects
            </h1>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="mb-6 break-inside-avoid">
                        <Link
                            href={`/projects/${project.id}`}
                            className="group relative block overflow-hidden rounded-2xl border"
                            aria-label={project.title}
                        >
                            <div className="relative w-full">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02] "
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/35 transition-opacity duration-300" />
                                <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p
                                        className={`text-2xl text-stroke-1-w font-semibold text-white translate-y-3 transition-all duration-300  group-hover:translate-y-0 ${instrumentSerif.className}`}
                                    >
                                        {project.title}
                                    </p>
                                    <p className={`text-lg font-semibold text-gray-300 translate-y-2 transition-all duration-300 hidden group-hover:block group-hover:translate-y-0 ${instrumentSerif.className}`}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
