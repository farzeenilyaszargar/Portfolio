import { projects } from "@/data/projects";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

const heightClasses = [
    "h-56 sm:h-64 md:h-72",
    "h-72 sm:h-80 md:h-96",
    "h-64 sm:h-72 md:h-80",
    "h-80 sm:h-96 md:h-[28rem]",
    "h-60 sm:h-72 md:h-[22rem]",
    "h-72 sm:h-[22rem] md:h-[30rem]",
];

export default function Projects() {
    return (
        <div className="w-screen px-20 my-10">
            <h1 className={`text-3xl font-bold mb-6 text-stroke-1 ${instrumentSerif.className}`}>
                Projects
            </h1>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {projects.map((project, index) => (
                    <div key={project.id} className="mb-6 break-inside-avoid">
                        <Link
                            href={`/projects/${project.id}`}
                            className="group relative block overflow-hidden rounded-2xl"
                            aria-label={project.title}
                        >
                            <div className={`relative w-full ${heightClasses[index % heightClasses.length]}`}>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p
                                        className={`text-xl font-semibold text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${instrumentSerif.className}`}
                                    >
                                        {project.title}
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
