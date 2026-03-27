import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"]
});

interface ExpProps {
    name: string;
    desc: string;
    time: string;
    link?: string;
    role: string;
    logo: string;
}

const exp: ExpProps[] = [
    {
        name: "Nap Inc.",
        desc: "Nap is the best way to code with AI and run multiple agents on your PC.",
        time: "Jan 2026-Present",
        link: "https://www.nap-code.com/",
        role: "CO-FOUNDER & BACKEND DEV",
        logo: "/icons/nap.png"

    },

    {
        name: "Superflights",
        desc: "Co-founded out of college. We had ₹25,00,000 in GBR (Gross Booking Revenue).",
        time: "June 2025 - Dec 2025",
        link: "https://www.superflights.co.in/",
        role: "COO & CO-FOUNDER",
        logo: "/icons/superflights.jpeg"
    },
    {
        name: "VIT, Vellore",
        desc: "studied computer science with a specialization in IoT.",
        time: "2023-2027",
        role: "STUDENT",
        logo: "/icons/vit.png"
    },
];



export default function Experience() {
    return (
        <div className="w-screen flex flex-col items-start px-20">
                <h1 className={`text-3xl font-bold mb-5 text-stroke-1 ${instrumentSerif.className}`}>Experience</h1>
            {
                exp.map((e, i) => (
                    <div className={`flex flex-row items-center border p-2 px-5 rounded-xl mb-5 w-full`} key={i}>
                        <img src={e.logo} alt={e.name} className="w-10 h-10 mr-5 rounded-full" />
                        <div className="flex flex-col w-full">
                            <h2 className={`text-lg font-bold  `}><span className={`text-stroke-1 ${instrumentSerif.className}`}>{e.name}</span> <span className="text-xs text-gray-500 font-normal">({e.time})</span></h2>
                            <p className="text-xs text-gray-400">{e.role}</p>
                            <p className="text-sm text-gray-800">{e.desc}</p>
                        </div>
                        {e.link ?(
                            <Link href={e.link} target="_blank" className="flex flex-row items-center gap-1 border bg-white hover:invert px-3 py-0.5 mx-5 rounded-full">
                                <Image src="/icons/link.png" alt="External Link" width={16} height={16} className="w-3 h-3" />
                                <p className="pr-2">Visit</p>
                            </Link>
                        ):
                        (
                            <div className=""></div> 
                        )}
                    </div>
                ))
            }
        </div>
    );
}
