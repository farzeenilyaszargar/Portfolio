import { projects } from "@/data/projects";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function Projects()
{
    return (
        <div className="w-screen px-20 ">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            
            {
                projects.map((e, i) => (
                    <div key={e.id} className="flex flex-col border p-5 rounded-xl mb-5">
                        <div className="flex flex-row items-center mb-3">
                            <Image src={e.img} alt={e.title} className="w-10 h-10 mr-5 rounded-full" />
                            <h2 className="text-lg font-bold">{e.title}</h2>
                        </div>
                        <p className="text-sm">{e.description}</p>
                        {e.linkWeb && (
                        <Link href={e.linkWeb} target="_blank" className="flex flex-row items-center gap-1 border bg-white hover:invert px-2 mx-5 rounded-sm mt-3">
                            <Image src="/icons/link.png" alt="External Link" width={16} height={16} className="w-3 h-3" />
                            <p className="pr-2">Visit</p>
                        </Link>
                        )}
                    </div>
                ))
            }

        </div>
    );
}
